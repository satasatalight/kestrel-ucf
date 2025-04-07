import React from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { getAllDevlogs } from "../api/devlogs/hooks";

const AdminPage = async () => {
  const devlogs = await getAllDevlogs();

  return (
    <div className="flex flex-col items-center mt-12 bg-white h-full">
      <div className="flex flex-col items-center w-full  max-w-5xl h-full pt-8 gap-4">
        <h1 className="text-2xl text-black">Devlogs Page</h1>
        <table className="w-full border-collapse text-black">
          <thead>
            <tr>
              <th className="border p-2 text-left">Title</th>
              <th className="border p-2 text-left">Description</th>
              <th className="border p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {devlogs.map((devlog) => (
              <tr key={devlog.id} className="hover:bg-gray-50">
                <td className="border p-2">{devlog.title}</td>
                <td className="border p-2">{devlog.description}</td>
                <td className="border p-2 text-center">
                  <Link href={`/admin/${devlog.id}`}>
                    <Pencil size={20} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
