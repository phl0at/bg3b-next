import React, { MouseEvent, useState } from "react";
import Image from "next/image";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const SubClassComponent = ({
  selectedClassInBuild,
  subClasses,
  setDisplay,
}: {
  selectedClassInBuild: Class;
  subClasses: SubClass[];
  setDisplay: (str: string) => void;
}) => {
  if (!selectedClassInBuild) return "";

  const availableSubClasses = subClasses.filter(
    (subClass) =>
      selectedClassInBuild.id === subClass.class &&
      selectedClassInBuild.level >= subClass.level
  );

  if (!availableSubClasses.length) return "";

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplay("class");
  };
  const [selectedSC, setSelectedSC] = useState(-1);

  return (
    <>
      <div className="w-5/6">
        <button
          onClick={handleClick}
          className="text-amber-100 hover:text-amber-400"
        >
          <IoArrowBackCircleOutline size="60" />
        </button>
      </div>
      <div className="flex flex-col w-5/6 justify-evenly items-start">
        {availableSubClasses.map((subClass) => {
          return (
            <div className="flex flex-col justify-center items-center text-amber-100">
              <Image
                src={`/classes/subclasses/${selectedClassInBuild.name}/${subClass.name}.png`}
                alt=""
                width={90}
                height={90}
                className="rounded-md object-cover"
                loading="lazy"
              />
              <div>{subClass.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SubClassComponent;
