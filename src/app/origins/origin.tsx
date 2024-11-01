"use client";
import { useBuildContext } from "@/context/build";
import Image from "next/image";
import React from "react";

const Origins = ({ origins }: { origins: Origin[] }) => {
  const { selectedOrigin, setSelectedOrigin } = useBuildContext();

  return (
    <main className="bg-zinc-800 shadow-xl min-w-96 w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8">
      <div className="grid grid-cols-4 gap-y-5 w-5/6">
        {origins.map((origin) => (
          <div
            className="flex flex-col justify-center items-center cursor-pointer"
            key={origin.id}
            onClick={() => setSelectedOrigin(origin.id)}
          >
            <Image
              className="h-[140px] object-cover rounded-md"
              width={105}
              height={140}
              src={`https://ik.imagekit.io/phl0at/images/char_icons/${origin.name}.png`}
              alt=""
            />
            {origin.name}
          </div>
        ))}
      </div>
      <div className="text-center">
        {origins[selectedOrigin - 1].description}
      </div>
    </main>
  );
};

export default Origins;
