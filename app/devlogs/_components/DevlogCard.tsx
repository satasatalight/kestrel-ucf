"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Devlog } from "@prisma/client";
import PhotoView from "./PhotoView";
import VideoView from "./VideoView";

interface Props {
  devlog: Devlog;
}

function formatCreatedAt(createdAt: Date | string): string {
  const date = createdAt instanceof Date ? createdAt : new Date(createdAt);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

const MAX_CHARS = 200;

const DevlogCard = ({ devlog }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if the description exceeds the maximum characters allowed.
  const isTruncatable = devlog.description.length > MAX_CHARS;

  // Compute the text to display.
  const displayText =
    !isTruncatable || isExpanded
      ? devlog.description
      : devlog.description.substring(0, MAX_CHARS) + "...";

  // Toggle function for the button.
  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Card className="w-xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div>{devlog.title}</div>
            <div className="opacity-30 font-normal text-sm">
              {formatCreatedAt(devlog.createdAt)}
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          {displayText}
          {isTruncatable && (
            <>
              <span className="ml-1"></span>
              <button
                onClick={toggleDescription}
                className="text-blue-500 text-sm"
              >
                {isExpanded ? "Show less" : "Read More"}
              </button>
            </>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <VideoView videoUrl={devlog.videoUrl} />
          <PhotoView photoUrl={devlog.photoUrl} />
        </div>
        {!devlog.videoUrl && !devlog.photoUrl && (
          <div className="opacity-50 text-sm">No videos or photos</div>
        )}
      </CardContent>
    </Card>
  );
};

export default DevlogCard;
