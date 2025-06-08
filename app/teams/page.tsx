import React from "react";
import placeholder from "@/public/ArduinoBoard.png"; 
import TeamCard, { TeamCardProps } from "./_components/TeamCard";

const TeamsPage = () => {
  const cards: TeamCardProps[] = [
    {
      title: "Embedded Team",
      description: "placeholder description",
      image: placeholder,
      link: "/teams/embedded"
    },
    {
      title: "Pathing Team",
      description: "placeholder description",
      image: placeholder,
      link: "/teams/pathing"
    },
    {
      title: "Hardware Team",
      description: "placeholder description",
      image: placeholder,
      link: "/teams/hardware"
    },
    {
      title: "Model Team",
      description: "placeholder description",
      image: placeholder,
      link: "/teams/model"
    },
    {
      title: "Leadership Team",
      description: "placeholder description",
      image: placeholder,
      link: "/teams/leadership"
    },
    {
      title: "Simulation Team",
      description: "sdsd",
      image: placeholder,
      link: "/teams/simulation"
    },
    {
      title: "Website Team",
      description: "placeholder description",
      image: placeholder,
      link: "/teams/website"
    }
  ]

  return <div className="bg-gradient-to-t from-slate-700 to-slate-900 text-center text-neutral-200 h-fit">
      <h1 className="pt-20 text-5xl font-bold font-mono">
        Kestrel's Teams
      </h1>
      <p className="pt-10 text-base">
        Description placeholder
      </p>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap w-full py-10 max-w-5xl gap-8">
          {cards.map((card) => (
            <TeamCard key={card.title} {...card}/>
          ))}
        </div>
      </div>
  </div>;
};

export default TeamsPage;
