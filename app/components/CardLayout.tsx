import Card from "./Card";
import { fetchComments } from "../lib/data";

const CardLayout = async () => {
  const comments = await fetchComments();

  return (
    <div className="bg-veryLightGray p-2">
      {comments.map((comment) => (
        <>
          {!comment.isReply && (
            <Card
              key={comment.id}
              id={comment.id}
              username={comment.user.username}
              userImage={comment.user.image.png}
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
              reply={comment.isReply}
              isCurrentUser={
                data.currentUser.username === comment.user.username
              }
              handleDelete={handleDelete}
            />
          )}
          {comment.replies.length > 0 &&
            comment.replies.map((reply) => (
              <Card
                key={reply.id}
                id={reply.id}
                username={comments[reply.id - 1].user.username}
                userImage={comments[reply.id - 1].user.image.png}
                content={comments[reply.id - 1].content}
                createdAt={comments[reply.id - 1].createdAt}
                score={comments[reply.id - 1].score}
                reply={comments[reply.id - 1].isReply}
                replyingTo={reply.replyingTo}
                isCurrentUser={
                  data.currentUser.username ===
                  data.comments[reply.id - 1].user.username
                }
                handleDelete={handleDelete}
              />
            ))}
        </>
      ))}
    </div>
  );
};

export default CardLayout;
