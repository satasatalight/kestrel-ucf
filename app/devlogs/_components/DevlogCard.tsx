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
  // Convert the input to a Date object if it isn't already
  const date = createdAt instanceof Date ? createdAt : new Date(createdAt);

  // Extract day, month, and year from the date
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}

const DevlogCard = ({ devlog }: Props) => {
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
        <CardDescription>{devlog.description}</CardDescription>
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
