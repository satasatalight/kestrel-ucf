import { getAllDevlogs } from "../api/devlogs/hooks";
import DevlogCard from "./_components/DevlogCard";

const DevlogsPage = async () => {
  const devlogs = await getAllDevlogs();

  return (
    <div className="mt-12 bg-white h-full">
      <div className="flex flex-col items-center w-full h-full pt-8 gap-4">
        <div className="text-2xl text-black">DevlogsPage</div>
        <div className="flex flex-col gap-4 text-green-600">
          {devlogs.map((devlog) => (
            <DevlogCard devlog={devlog} key={devlog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevlogsPage;
