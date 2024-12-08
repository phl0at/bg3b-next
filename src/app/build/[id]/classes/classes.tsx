"use client";
import Image from "next/image";
import React, { useState, MouseEvent } from "react";
import { useStore } from "@/store/store";

const Classes = ({ classes }: { classes: Class[] }) => {
  const { dispatch } = useStore((state) => state);
  const [selectedClass, setSelectedClass] = useState(1);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD CLASS", payload: classes[selectedClass - 1] });
  };



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
      <div>
        <button onClick={handleClick}>Add Class</button>
      </div>
      <div className="text-center">
        {classes[selectedClass - 1].description}
      </div>
    </main>
  );
};

export default Classes;
