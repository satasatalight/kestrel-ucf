import React from "react";
import MemberCard from "../_components/MemberCard";
import members from "./members"

const SensorsTeamPage = () => {
  return <div className="bg-gradient-to-t from-slate-700 to-slate-900 text-neutral-200 h-[100vh]">
    <h1 className="pt-20 text-5xl text-center font-bold font-mono">
      Kestrel's Embedded Software Team
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
