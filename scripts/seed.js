const { db } = require("@vercel/postgres");
const { users, comments } = require("../app/lib/placeholder-data");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        image_png VARCHAR(255) NOT NULL,
        image_webp VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL UNIQUE
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return client.sql`
        INSERT INTO users (id, image_png, image_webp, username)
        VALUES (${user.id}, ${user.image_png}, ${user.image_webp}, ${user.username})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedComments(client) {
  try {
    // Create the "comments" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS comments (
    id INT PRIMARY KEY,
    user_id UUID NOT NULL,
    content TEXT NOT NULL,
    created_at VARCHAR(255) NOT NULL,
    score INT,
    is_reply BOOLEAN
  );
`;

    console.log(`Created "comments" table`);

    // Insert data into the "invoices" table
    const insertedComments = await Promise.all(
      comments.map(
        (comment) => client.sql`
        INSERT INTO comments (id, user_id, content, created_at, score, is_reply)
        VALUES (${comment.id}, ${comment.userId}, ${comment.content}, ${comment.createdAt},${comment.score}, ${comment.isReply})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedComments.length} comments`);

    return {
      createTable,
      comments: insertedComments,
    };
  } catch (error) {
    console.error("Error seeding comments:", error);
    throw error;
  }
}

async function seedCommentReply(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "comment-reply" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS comment_reply (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        comment_id INT,
        reply_id INT 
      );
    `;

    console.log(`Created "comment_reply" table`);

    // Insert data into the "comment-reply" table
    const insertedCommentReply = await Promise.all(
      comments.map((comment) => {
        if (comment.replyCommentIds.length > 0) {
          console.log("Adding replies...");
          comment.replyCommentIds.map(
            (reply) =>
              client.sql`
        INSERT INTO comment_reply (comment_id, reply_id)
        VALUES (${comment.id}, ${reply})
        ON CONFLICT (id) DO NOTHING;
      `
          );
        }
      })
    );

    console.log(`Seeded ${insertedCommentReply.length} comment_replies`);

    return {
      createTable,
      comment_replies: insertedCommentReply,
    };
  } catch (error) {
    console.error("Error seeding comment_replies:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedCommentReply(client);
  await seedUsers(client);
  await seedComments(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
