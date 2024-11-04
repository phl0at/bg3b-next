"use client";
import { useBuildContext } from "@/context/build";
import Image from "next/image";
import React from "react";

const Classes = ({ classes }: { classes: Class[] }) => {
  const { selectedClass, setSelectedClass } = useBuildContext();

  return (
    <main className="bg-zinc-800 shadow-xl min-w-96 w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8">
      <div className="grid grid-cols-4 gap-y-5 w-5/6">
        {classes.map((_class: Class) => (
          <div
            className="flex flex-col justify-center items-center cursor-pointer"
            key={_class.id}
            onClick={() => setSelectedClass(_class.id)}
          >
            <Image
              width={90}
              height={90}
              src={`https://ik.imagekit.io/phl0at/images/class_icons/${_class.name}.png`}
              alt=""
            />
            {_class.name}
          </div>
        ))}
      </div>
      <div className="text-center">
        {classes[selectedClass - 1].description}
      </div>
    </main>
  );
};

export default Classes;
