import Image, { StaticImageData } from "next/image";
import React from "react";
import imageSensors from "@/public/teams/sensors.jpg";
import imagePathing from "@/public/teams/pathing.jpg";
import imageArdupilot from "@/public/teams/ardupilot.jpg";
import imageModel from "@/public/teams/model.jpg";
import TeamCard, { TeamCardProps } from "./_components/TeamCard";

const TeamsPage = () => {
  const cards: TeamCardProps[] = [
    {
      title: "Sensor Team",
      description: ' ',
      image: imageSensors,
      link: "/teams/sensors",
    },
    {
      title: "Pathing Team",
      description: ' ',
      image: imagePathing,
      link: "/teams/pathing",
    },
    {
      title: "ArduPilot Team",
      description:' ',
      image: imageArdupilot,
      link: "/teams/ardupilot",
    },
    {
      title: "Model Team",
      description: ' ',
      image: imageModel,
      link: "/team/model",
    },
  ];

  return(
    <div className = "h-fit w-full bg-gradient-to-t from-slate-700 to-slate-900">
      {/* Heading */}
      <div className = "pt-[80px] text-5xl font-bold text-conter text-neutral-200 font-mon0">
        Meet the Teams
      </div>

      {/* Intro Description */}
      <div className = "text-amber-50 pt-6 text-center font-serif justify-center w-2/3 items-center m-auto">
        Kestrel is a collaborative project made possible by multiple specialized teams at UCF. ..., each team plays a critical role in building an autonomous drone capable of intelligent flight.
      </div>

      {/* Card Grid */}
      <div className = "flex w-full justify-center items-center">
        <div className = "flex flex-wrap gap-20 justify-center pt-10 max-w-6xl">
          {cards.map((card) => (
            <TeamCard {...card} key = {card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;