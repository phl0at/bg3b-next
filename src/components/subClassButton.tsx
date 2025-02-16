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

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplay("subclass");
  };

  if (!availableSubClasses.length) return "";

  if (selectedClassInBuild.subClass === undefined) {
    return (
      <button
        className="mt-12 p-3 outline rounded-lg text-amber-100 hover:text-amber-400"
        onClick={handleClick}
      >
        Chose a Sub Class
      </button>
    );
  } else {
    <div>{availableSubClasses[selectedClassInBuild.subClass].description}</div>;
  }
};

export default SubClassButton;
