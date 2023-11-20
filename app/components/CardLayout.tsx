"use client";

import Card from "./Card";
import { users, comments } from "@/app/lib/placeholder-data";
import { useEffect, useState } from "react";

const CardLayout = () => {
  const [localComments, setLocalComments] = useState<typeof comments>([]);

  useEffect(() => {
    const data = window.localStorage.getItem("commentState");
    if (data !== null) {
      console.log("Setting Local Comments to local storage values");
      console.log(JSON.parse(data));
      setLocalComments(JSON.parse(data));
    } else {
      setLocalComments(comments);
      window.localStorage.setItem("commentState", JSON.stringify(comments));
    }
  }, []);

  function findUser(userId: string) {
    const userDetails = users.filter((user) => {
      return user.id === userId;
    });
    return userDetails;
  }

  return (
    <div className="bg-veryLightGray p-2">
      {localComments.map((comment) => (
        <>
          <Card
            key={comment.id}
            id={comment.id}
            username={findUser(comment.userId)[0].username}
            userImage={findUser(comment.userId)[0].image_png}
            content={comment.content}
            createdAt={comment.createdAt}
            score={comment.score}
            reply={comment.isReply}
            isCurrentUser={comment.userId === users[0].id}
            replyingTo={comment.replyingTo}
          />
        </>
      ))}
    </div>
  );
};

export default CardLayout;
