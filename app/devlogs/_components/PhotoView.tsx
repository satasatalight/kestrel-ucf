import Image from "next/image";
import React from "react";

interface Props {
  photoUrl: string | null | undefined;
}

const PhotoView = ({ photoUrl }: Props) => {
  if (!photoUrl) return null;
  return <Image src={photoUrl} alt="devlog photo" />;
};

export default PhotoView;
