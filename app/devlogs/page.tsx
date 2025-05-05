import { getAllDevlogs } from "../api/devlogs/hooks";
import DevlogCard from "./_components/DevlogCard";

const DevlogsPage = async () => {
  const devlogs = await getAllDevlogs();

  return (
    <div className="mt-12 bg-white h-full">
      <div className="flex flex-col items-center w-full h-full p-8 gap-8">
        <div className="text-4xl text-black font-semibold">
          Kestrel Project Devlogs
        </div>
        <div className="flex flex-col gap-8 text-primary pb-8">
          {devlogs.map((devlog) => (
            <DevlogCard devlog={devlog} key={devlog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default DevlogsPage;
