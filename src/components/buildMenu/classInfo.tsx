import React from "react";
import Image from "next/image";
import { Class, AddedClass } from "@/lib/types";

const ClassInfo = ({
  selectedClass,
  addedClass,
  level,
}: {
  selectedClass: Class;
  addedClass: AddedClass;
  level: number;
}) => {
  return (
    <div className="w-[80%] mb-10 mt-5 text-amber-100">
      <div>Total Level: {level}</div>
      {selectedClass && (
        <div className="fixed flex">
          <Image
            title={`${selectedClass.name}`}
            src={selectedClass.img}
            alt=""
            width={35}
            height={35}
            className="rounded-md object-cover"
          />
          <div>: {addedClass.level}</div>
        </div>
      )}
    </div>
  );
};

export default ClassInfo;
