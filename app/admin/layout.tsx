import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center pt-16 bg-background h-full">
      {children}
    </div>
  );
};

export default layout;
