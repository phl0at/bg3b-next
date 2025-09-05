"use client";
import React from "react";
import Image from "next/image";
import { useStore } from "@/store/store";

const ClassInfo = () => {
  const { selectedClass, current: { classList, level } } = useStore((state) => state);
  const addedClassInBuild = classList[selectedClass]

  return (
    <div className="w-[80%] mb-10 mt-5 text-amber-100">
      <div>Total Level: {level}</div>
      {addedClassInBuild && (
        <div className="fixed flex">
          <Image
            title={`${addedClassInBuild.name}`}
            src={addedClassInBuild.img}
            alt=""
            width={35}
            height={35}
            className="rounded-md object-cover"
          />
          <div>: {addedClassInBuild.level}</div>
        </div>
      )}
    </div>
  );
};

export default ClassInfo;
