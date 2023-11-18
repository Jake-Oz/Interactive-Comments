"use client";

import plusIcon from "@/public/images/icon-plus.svg";
import minusIcon from "@/public/images/icon-minus.svg";
import Image from "next/image";
import { useState } from "react";
import { useDataState } from "../hooks/useDataState";

interface UpvoteButtonScore {
  id: number;
  score: number;
}

const UpvoteButton: React.FC<UpvoteButtonScore> = ({ score, id }) => {
  const [currentScore, setCurrentScore] = useState(score);
  const dataStore = useDataState();

  const addScore = () => {
    setCurrentScore((prevScore) => prevScore + 1);
    dataStore.updateScore(id, currentScore + 1);
  };

  const subtractScore = () => {
    setCurrentScore((prevScore) => prevScore - 1);
    dataStore.updateScore(id, currentScore - 1);
  };

  return (
    <div className="flex gap-2 items-center bg-lightGray max-w-24 px-4 rounded-md">
      <button className="text-lightGrayishBlue h-9 w-auto" onClick={addScore}>
        <Image src={plusIcon} alt="plus" />
      </button>
      <div className=" text-moderateBlue font-medium px-2">{currentScore}</div>
      <button
        className="text-lightGrayishBlue h-9 w-auto"
        onClick={subtractScore}
      >
        <Image src={minusIcon} alt="minus" />
      </button>
    </div>
  );
};

export default UpvoteButton;
