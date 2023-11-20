"use client";

import plusIcon from "@/public/images/icon-plus.svg";
import minusIcon from "@/public/images/icon-minus.svg";
import Image from "next/image";
import { useState } from "react";
import { comments } from "../lib/placeholder-data";

interface UpvoteButtonScore {
  id: number;
  score: number;
}

const UpvoteButton: React.FC<UpvoteButtonScore> = ({ id, score }) => {
  const [currentScore, setCurrentScore] = useState(score);

  const handleScoreUpdate = (direction: string) => {
    if (direction === "+") {
      setCurrentScore((prev) => prev + 1);
      comments.map((comment) => {
        if (comment.id === id) {
          comment.score = currentScore + 1;
        }
        return comment;
      });
      window.localStorage.setItem("commentState", JSON.stringify(comments));
      //updateScore(id, currentScore + 1);
    } else {
      setCurrentScore((prev) => prev - 1);
      comments.map((comment) => {
        if (comment.id === id) {
          comment.score = currentScore - 1;
        }
        return comment;
      });
      window.localStorage.setItem("commentState", JSON.stringify(comments));
      //updateScore(id, currentScore - 1);
    }
  };

  return (
    <div className="flex gap-2 items-center bg-lightGray max-w-24 px-4 rounded-md">
      <button
        className="text-lightGrayishBlue h-9 w-auto"
        onClick={() => handleScoreUpdate("+")}
      >
        <Image src={plusIcon} alt="plus" />
      </button>
      <div className=" text-moderateBlue font-medium px-2">{currentScore}</div>
      <button
        className="text-lightGrayishBlue h-9 w-auto"
        onClick={() => handleScoreUpdate("-")}
      >
        <Image src={minusIcon} alt="minus" />
      </button>
    </div>
  );
};

export default UpvoteButton;
