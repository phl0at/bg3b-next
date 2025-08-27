import React from "react";
import Image from "next/image";

const ClassInfo = ({
  selectedClass,
  level,
}: {
  selectedClass: Class;
  level: number;
}) => {
  return (
    <div className="w-[80%] mb-10 mt-5 text-amber-100">
      <div>Total Level: {level}</div>
      {selectedClass && (
        <div className="fixed flex">
          <Image
            title={`${selectedClass.name}`}
            src={`/images/full/classes/${selectedClass.img}.png`}
            alt=""
            width={35}
            height={35}
            className="rounded-md object-cover"
          />
          <div>: {selectedClass.level}</div>
        </div>
      )}
    </div>
  );
};

export default ClassInfo;
