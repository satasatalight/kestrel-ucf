import { Devlog } from "@prisma/client";
import VideoView from "./VideoView";
import PhotoView from "./PhotoView";

interface Props {
  devlog: Devlog;
}

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

const DevlogCard = ({ devlog }: Props) => {
  return (
    <div className="w-full h-fit mx-auto">
      <div>
        <VideoView videoUrl={devlog.videoUrl} />
        <PhotoView photoUrl={devlog.photoUrl} />
      </div>
      <div className="flex relative justify-between items-center mt-4">
        <h2 className="text-lg @sm:text-2xl font-semibold">{devlog.title}</h2>
      </div>
      {devlog.description && (
        <p className="text-xs @sm:text-sm mt-1 text-icon-gray">
          {devlog.description}
        </p>
      )}
    </div>
  );
};

export default DevlogCard;
