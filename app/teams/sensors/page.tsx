import React from "react";
import placeholder from "@/public/ArduinoBoard.png";
import MemberCard, { MemberCardProps } from "../_components/MemberCard";

const SensorsTeamPage = () => {
  // placeholder data
  const members: MemberCardProps[] = [
    {
      name: "name1",
      role: "role",
      description: "Lorem ",
      image: placeholder,
      links: [
        {
          type: "cover_letter",
          href: "iorhgirhgi"
        },
        {
          type: "github",
          href: "https://github.com"
        }
      ]
    },
    {
      name: "name2",
      role: "role",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: placeholder,
      links: [
        {
          type: "linkedin",
          href: "https://linkedin.com"
        },
        {
          type: "resume",
          href: "resumeresume"
        },
        {
          type: "misc link",
          href: "uihiuhuihoihoihih"
        }
      ]
    },
  ];

  return <div className="bg-linear-to-t from-purple-900 to-fuchsia-950 text-neutral-200 h-[100vh]">
    <h1 className="pt-20 text-5xl text-center font-bold font-mono">
      Kestrel's Sensors Team
    </h1>

    <div className="container mx-auto max-w-5xl">

      {/* Rundown */}
      <p className="pt-10 text-base text-center">
        placeholder team rundown
      </p>

      {/* Highlighted Devlogs */}
      <h2 className="pt-10 text-3xl font-light font-mono">Highlighted Devlogs:</h2>
      
      {/* Team Member Overviews */}
      <h2 className="pt-10 text-3xl font-light font-mono">Team Members:</h2>
      <div className="flex justify-center items-center mx-3">
        <div className="flex flex-wrap w-full pt-6 pb-15 gap-6">
          {members.map((member) => 
            <MemberCard key={member.name} {...member}/>
          )}
        </div>
      </div>

    </div>
  </div>;
};

export default SensorsTeamPage;
