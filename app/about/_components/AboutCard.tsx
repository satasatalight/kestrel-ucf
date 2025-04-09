import Image, { StaticImageData } from "next/image";

export interface AboutCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutCard = ({ title, description, image }: AboutCardProps) => {
  return (
    <Card className="w-full h-fit bg-slate-600 border-slate-700">
      <CardHeader>
        <Image
          className="rounded-lg mb-4 shadow-md hover:scale-102 transition-all duration-300 h-50"
          src={image}
          alt={title}
        />
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <CardDescription className="overflow-y-auto max-h-[300px] text-white/50">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );

  return (
    <div className="w-78 flex flex-col border-4 h-120 shadow-neutral-600 shadow-2xl overflow-y-hidden border-gray-700 rounded-2xl">
      <Image
        className="h-1/3 border-b-3 border-b-gray-800"
        src={image}
        alt={title}
      />
      <div className="w-full h-full bg-[red]">
        <h1 className="text-2xl text-center text-neutral-900">{title}</h1>
        <p className="flex justify-center text-center pt-4 text-black text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
