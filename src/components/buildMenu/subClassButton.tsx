import React, { MouseEvent } from "react";

const SubClassButton = ({
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

  const currentSubClass = availableSubClasses.find(
    (subClass) => subClass.id === selectedClassInBuild.subClass
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplay("subclass");
  };

  if (!availableSubClasses.length) {
    return "";
  } else if (selectedClassInBuild.subClass === undefined) {
    return (
      <button
        className="mt-12 p-3 outline rounded-lg text-amber-100 hover:text-amber-400"
        onClick={(e) => handleClick(e)}
      >
        Chose a Sub Class
      </button>
    );
  } else if (currentSubClass != undefined) {
    return <div className="text-amber-300">{currentSubClass.name}</div>;
  }
};

export default SubClassButton;
