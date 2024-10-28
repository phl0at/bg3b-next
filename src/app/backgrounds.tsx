import React from "react";

const Backgrounds = ({ backgrounds }: { backgrounds: Background[] }) => {
  return (
    <main className="bg-zinc-800 shadow-xl min-w-96 w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8"></main>
  );
};

export default Backgrounds;
