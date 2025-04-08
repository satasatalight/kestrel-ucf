import { Devlog } from "@prisma/client";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

// Utility function to extract the YouTube video ID from a URL.
const getYoutubeVideoId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes("youtube.com")) {
      // For URLs like https://www.youtube.com/watch?v=VIDEO_ID
      return parsedUrl.searchParams.get("v");
    } else if (parsedUrl.hostname === "youtu.be") {
      // For URLs like https://youtu.be/VIDEO_ID
      return parsedUrl.pathname.slice(1); // Remove leading '/'
    }
    return null;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
};

interface Props {
  videoUrl: string | null | undefined;
}

const VideoView = ({ videoUrl }: Props) => {
  if (!videoUrl) return null;

  const videoId = getYoutubeVideoId(videoUrl);
  if (!videoId) {
    return (
      <div className="flex items-center justify-center w-full p-4 aspect-video border border-red-500 bg-red-500/5 rounded-md overflow-hidden">
        <div className="hidden @xs:block">
          <Alert
            variant="destructive"
            className="w-fit bg-red-500/5 border-red-500/10"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription className="flex">
              Invalid YouTube video url: {videoId}
            </AlertDescription>
          </Alert>
        </div>
        <AlertCircle className="block @xs:hidden h-8 w-8 text-red-500/80" />
      </div>
    );
  }

  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoView;
