import React, { MouseEvent } from "react";
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

  const handleClickBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplay("class");
  };

  const handleClickSubClass = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplay("class");
  };

  return (
    <>
      <div className="w-5/6">
        <button
          onClick={handleClickBack}
          className="text-amber-100 hover:text-amber-500"
        >
          <IoArrowBackCircleOutline size="60" />
        </button>
      </div>
      <div className="flex-col w-5/6 justify-evenly items-start">
        {availableSubClasses.map((subClass) => {
          return (
            <div className="flex-col text-amber-100 hover:text-amber-400">
              <div className="flex min-w-[100px] flex-col items-center justify-center cursor-pointer">
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
              <div className="text-base text-center flex items-center">{subClass.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SubClassComponent;
