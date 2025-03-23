import React, { MouseEvent, useState } from "react";
import {importSubClassImg} from "@/lib/utils"

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
  const images = importSubClassImg(selectedClassInBuild.name)
  console.log(mages)
  const [selectedSC, setSelectedSC] = useState(-1);

  return (
    <>
      {availableSubClasses.map((subClass) => {
        return (
          <div key={subClass.id} className="w-[90%] text-amber-100">
            <p className="text-amber-400">{subClass.name}</p>
            <p>{subClass.description}</p>
          </div>
        );
      })}

      <button
        onClick={handleClick}
        className="p-3 outline rounded-lg hover:text-red-400"
      >
        Back
      </button>
    </>
  );
};

export default SubClassComponent;
