import { Devlog } from "@prisma/client";
import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  devlogs: Devlog[];
}

const AdminDevlogsTable = ({ devlogs }: Props) => {
  if (!devlogs || devlogs.length == 0) {
    return <div className="w-full text-center">No devlogs yet.</div>;
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {devlogs.map((devlog) => (
          <TableRow key={devlog.id} className="hover:bg-gray-50">
            <TableCell>{devlog.title}</TableCell>
            <TableCell>{devlog.description}</TableCell>
            <TableCell className="flex w-full justify-center">
              <Link
                href={`/admin/devlogs/${devlog.id}`}
                className="text-blue-500"
              >
                <Pencil size={16} />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminDevlogsTable;
