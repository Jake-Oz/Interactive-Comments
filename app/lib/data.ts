import { sql } from "@vercel/postgres";
import { user, comment } from "@/app/lib/types";

type updatedComment = Omit<comment, "replyCommentIds"> & {
  username: string;
  image_png: string;
};

export async function fetchComments() {
  try {
    const data = await sql<updatedComment>`
      SELECT comments.id, user_id, content, created_at, score, is_reply, users.username, users.image_png
      FROM comments
      JOIN users ON comments.user_id = users.id
      `;

    const comments = data.rows.map((comment: updatedComment) => ({
      ...comment,
    }));
    return comments;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch comments.");
  }
}

export async function updateScore(id: number, score: number) {
  console.log({
    score,
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  });
  try {
    await sql`
          UPDATE comments 
          SET score = ${score}
          WHERE id = ${id}
          `;
    console.log("Updated score");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update score.");
  }
}
