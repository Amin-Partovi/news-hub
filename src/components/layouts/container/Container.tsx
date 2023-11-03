import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto md:px-10 px-4">
      {children}
    </div>
  );
};

export default Container;
