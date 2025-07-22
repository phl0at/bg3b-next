import React, { MouseEvent } from "react";
import Image from "next/image";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useStore } from "@/store/store";

const SubClassComponent = ({
  selectedClassInBuild,
  subClasses,
  setDisplay,
}: {
  selectedClassInBuild: Class;
  subClasses: SubClass[];
  setDisplay: (str: string) => void;
}) => {
  const { dispatch } = useStore((state) => state);
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

  const handleClickSubClass = (
    e: MouseEvent<HTMLButtonElement>,
    subClass: SubClass
  ) => {
    e.preventDefault();
    dispatch({ type: "SET SUB CLASS", payload: subClass });
    setDisplay("class");
  };


  return (
    <>
      <div className="w-5/6">
        <button
          onClick={(e) => handleClickBack(e)}
          className="text-amber-100 hover:text-amber-400"
        >
          <IoArrowBackCircleOutline size="60" />
        </button>
      </div>
      <div className="flex-col p-2 w-5/6 justify-evenly items-start overflow-y-auto">
        {availableSubClasses.map((subClass, i) => {
          return (
            <button
              key={i}
              onClick={(e) => handleClickSubClass(e, subClass)}
              className="flex-col p-3 text-amber-100 hover:text-amber-300 rounded-md cursor-pointer"
            >
              <div className="flex min-w-[100px] flex-col items-center justify-center">
                <Image
                  src={`/images/full/classes/subclasses/${selectedClassInBuild.name}/${subClass.name}.png`}
                  blurDataURL={`/images/loading/classes/subclasses/${selectedClassInBuild.name}/${subClass.name}.png`}
                  placeholder="blur"
                  alt=""
                  width={90}
                  height={90}
                  className="rounded-md object-cover"
                  loading="lazy"
                />
                <div>{subClass.name}</div>
              </div>
              <div className="text-base text-center flex items-center">
                {subClass.description}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SubClassComponent;
