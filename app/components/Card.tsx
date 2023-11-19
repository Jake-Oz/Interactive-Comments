"use client";

import Image from "next/image";
import UpvoteButton from "./UpvoteButton";
import CardHeader from "./CardHeader";
import replyImage from "@/public/images/icon-reply.svg";
import deleteImage from "@/public/images/icon-delete.svg";
import editImage from "@/public/images/icon-edit.svg";

interface CardProps {
  id: number;
  username: string;
  userImage: string;
  score: number;
  content: string;
  createdAt: string | undefined;
  reply: boolean;
  replyingTo?: string;
  isCurrentUser: boolean;
}

export const Card: React.FC<CardProps> = ({
  id,
  username,
  userImage,
  score,
  content,
  createdAt,
  reply,
  replyingTo,
  isCurrentUser,
}) => {
  return (
    <div className={`${reply ? "border-l-2 pl-4 border-l-lightGray" : ""}  `}>
      <div className="bg-white p-4 rounded-lg flex flex-col gap-4 mb-4">
        <CardHeader
          imageURL={userImage}
          username={username}
          timeSinceComment={createdAt}
          isUser={isCurrentUser}
        />
        <p className="text-grayishBlue">
          {reply && (
            <span className="text-moderateBlue">@{replyingTo}&nbsp;</span>
          )}
          {content}
        </p>
        <div className="flex justify-between items-center">
          <UpvoteButton score={score} id={id} />
          {!isCurrentUser && (
            <button className="flex gap-2 items-center">
              <Image className="w-5 h-4" src={replyImage} alt="Reply image" />
              <p className="text-moderateBlue font-medium">Reply</p>
            </button>
          )}
          {isCurrentUser && (
            <div className="flex gap-4 items-center">
              <button className="flex gap-1 items-center">
                <Image className="h-4" src={deleteImage} alt="Delete Button" />
                <div className="text-softRed font-medium">Delete</div>
              </button>
              <button className="flex gap-1 items-center">
                <Image className="h-4" src={editImage} alt="Edit Button" />
                <p className="text-moderateBlue font-medium">Edit</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
