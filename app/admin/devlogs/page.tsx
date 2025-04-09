import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getAllDevlogs } from "../../api/devlogs/hooks";
import AdminDevlogsTable from "./AdminDevlogsTable";

const AdminDevlogPage = async () => {
  const devlogs = await getAllDevlogs();

  return (
    <div className="flex flex-col items-center w-full  max-w-3xl h-full gap-4">
      <h1 className="text-2xl text-primary">Devlogs List</h1>
      <AdminDevlogsTable devlogs={devlogs} />
      <Link href={"/admin/devlogs/new"}>
        <Button className="cursor-pointer">
          <Plus />
          Add New Devlog
        </Button>
      </Link>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default AdminDevlogPage;
