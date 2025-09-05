import React, { MouseEvent } from "react";
import { AddedClass, SubClass } from "../../lib/types";

const SubClassButton = ({
  selectedClassInBuild,
  availableSubClasses,
  setDisplay,
}: {
  selectedClassInBuild: AddedClass;
  availableSubClasses: SubClass[]
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}) => {
  if (!selectedClassInBuild || !availableSubClasses.length) return "";

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplay("subclass");
  };

  if (selectedClassInBuild.subClass === undefined) {
    return (
      <button
        className="p-3 outline rounded-lg text-amber-100 hover:text-amber-400"
        onClick={(e) => handleClick(e)}
      >
        Chose a Sub Class
      </button>
    );
  } else {
    return ""
  };
}

export default SubClassButton;