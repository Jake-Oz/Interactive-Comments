import { sql } from "@vercel/postgres";
import { user, comment } from "@/app/lib/types";

type updatedComment = Omit<comment, "replyCommentIds"> & { user: user };

export async function fetchComments() {
  try {
    const data = await sql<comment>`
      SELECT user_id, content, created_at, score, is_reply
      FROM comment
      JOIN user ON comment.userId = user.id`;

    const comments = data.rows.map((comment: comment) => ({
      ...comment,
    }));
    return comments;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch comments.");
  }
}
