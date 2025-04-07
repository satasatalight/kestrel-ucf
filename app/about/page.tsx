import Image from "next/image";
import React from "react";
import imageTeam from "@/public/GroupSample.jpg";

const AboutPage = () => {
  return (
    <div className="h-fit w-full bg-gradient-to-t from-slate-700 to-slate-900">
      <div className="pt-[80px] text-5xl font-bold text-center text-neutral-200 font-mono">
        About Kestrel
      </div>
      <div className="text-amber-50 pt-6 text-center font-serif justify-center w-2/3 items-center m-auto">
        Kestrel is an autonomous videography drone initiative developed by
        student teams within several student ran clubs at UCF. Kestrel's focus
        was on pushing the boundaries of aerial robotics while integrating the
        intelligence of modern day computing systems. The project combines
        expertise from both hardware and software disciplines to design, build,
        and program drones capable of intelligent flight. Whether it's object
        detection, pathfinding, or dynamic control, Kestrel aims to provide a
        comprehensive platform for learning, research, and innovation in
        autonomous systems.
      </div>
      <section className="flex flex-row gap-20 items-center justify-center pt-8 w-full">
        <div className="w-78 flex flex-col border-4 h-120 shadow-neutral-600 shadow-2xl overflow-y-hidden border-gray-700">
          <img
            className="h-1/3 border-b-3 border-b-gray-800"
            src="FlyingDrone.jpg"
          ></img>
          <div className="w-full h-full bg-amber-50">
            <h1 className="text-2xl text-center text-neutral-900">
              Hardware Team
            </h1>
            <p className="flex justify-center text-center pt-4 text-black">
              The Hardware Team underpins Kestrel's stability and
              responsiveness, designing and implementing the electronic systems
              that allow seamless integration with software logic. They are
              developing a custom sensing array using VL53L1X ToF sensors,
              creating region-of-interest-based data that feeds directly into
              software-generated heat maps. On the control side, the Ardu-Pilot
              subteam is gathering key hardware parameters such as weight
              distribution to inform dynamic piloting algorithms. Their upcoming
              goal is to enable real-time responsiveness by passing structured
              sensor and flight path data into Ardu-Pilot, allowing the drone to
              follow computed routes, avoid obstacles, and keep its camera
              focused on the target group through coordinated motor control and
              body rotation.
            </p>
          </div>
        </div>
        <div className="w-78 flex flex-col border-4 h-120 shadow-neutral-600 shadow-2xl overflow-y-hidden border-gray-700">
          <img
            className="h-1/3 border-b-3 border-b-gray-800"
            src="FlyingDrone.jpg"
          ></img>
          <div className="w-full h-full bg-amber-50">
            <h1 className="text-2xl text-center text-neutral-900">
              Software Team
            </h1>
            <p className="flex justify-center text-center pt-4 text-black">
              The Software Team drives the intelligence behind Kestrel by
              developing and integrating machine learning models and autonomous
              flight logic. Collaborating closely with the Hardware Team, they
              receive real-time sensor data to build region-based heat maps
              using VL53L1X ToF sensors, which are later stitched together to
              inform the drone's awareness of its environment. They are also
              refining detection and tracking models with a diverse dataset to
              maintain accurate identification of groups mid-flight. On the
              pathing side, the team is exploring geodesic distance calculations
              and Ricci flow algorithms to smooth out flight paths for safer,
              more efficient navigation. Additionally, they are developing base
              station initialization logic to manage flight sequence commands
              like takeoff and landing, ensuring clear control boundaries for
              the operator.
            </p>
          </div>
        </div>
        <div className="w-78 flex flex-col border-4 h-120 shadow-neutral-600 shadow-2xl overflow-y-hidden border-gray-700">
          <img
            className="h-1/3 border-b-3 border-b-gray-800"
            src="FlyingDrone.jpg"
          ></img>
          <div className="w-full h-full bg-amber-50">
            <h1 className="text-2xl text-center text-neutral-900">Research</h1>
            <p className="flex justify-center text-center pt-4 text-black">
              Our research focuses on object tracking, deep learning, obstacle
              avoidance, and flight path optimization. By experimenting with
              neural networks and decision-making algorithms, we aim to improve
              Kestrel's ability to fly autonomously in dynamic environments.
              This includes navigating complex spaces, adapting to unseen
              obstacles, and making real-time decisions without human input.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 w-full">
        <div className="flex w-full">
          <div className="absolute flex justify-center pt-5 w-full">
            <h1 className="text-5xl font-serif font-bold text-amber-100">
              The Team
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image src={imageTeam} alt={""} className="w-5xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
