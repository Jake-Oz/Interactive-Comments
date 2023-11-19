import Card from "./Card";
import { fetchComments } from "../lib/data";

const CardLayout = async () => {
  const comments = await fetchComments();
  console.log(comments);

  return (
    <div className="bg-veryLightGray p-2">
      {comments.map((comment) => (
        <>
          {!comment.is_reply ? (
            <Card
              key={comment.id}
              id={comment.id}
              username={comment.username}
              userImage={comment.image_png}
              content={comment.content}
              createdAt={comment.created_at}
              score={comment.score}
              reply={comment.is_reply}
              isCurrentUser={true}
            />
          ) : (
            <Card
              key={comment.id}
              id={comment.id}
              username={comment.username}
              userImage={comment.image_png}
              content={comment.content}
              createdAt={comment.created_at}
              score={comment.score}
              reply={comment.is_reply}
              replyingTo={"Replying to"}
              isCurrentUser={false}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default CardLayout;
