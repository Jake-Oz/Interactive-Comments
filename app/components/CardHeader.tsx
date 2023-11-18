"use client";

import Image from "next/image";

interface CardHeaderProps {
  imageURL: string;
  username: string;
  isUser?: boolean;
  timeSinceComment: string | undefined;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  imageURL,
  username,
  isUser,
  timeSinceComment,
}) => {
  return (
    <header className="flex  justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src={imageURL} alt="User Image" width={35} height={35} />
        <h4>{username}</h4>
        {isUser ? (
          <p className="bg-moderateBlue text-white text-sm px-2 rounded">you</p>
        ) : (
          ""
        )}

        <h5 className="text-grayishBlue">{timeSinceComment}</h5>
      </div>
    </header>
  );
};

export default CardHeader;
