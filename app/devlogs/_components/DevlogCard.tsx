import { Devlog } from "@prisma/client";
import React from "react";

interface Props {
  devlog: Devlog;
}

const DevlogCard = ({ devlog }: Props) => {
  return (
    <div
      key={devlog.id}
      className="bg-neutral-100 shadow-md rounded-lg p-6 m-4 transition transform"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{devlog.title}</h2>
      <p className="text-gray-600">{devlog.description}</p>
    </div>
  );
};

export default DevlogCard;
