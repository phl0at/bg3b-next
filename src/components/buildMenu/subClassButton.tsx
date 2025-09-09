import React, { MouseEvent } from "react";
import SubClasses from "@/lib//character/subclasses";
import { useStore } from "@/store/store";

const SubClassButton = ({
  setDisplay,
}: {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { current, selectedClass } = useStore((state) => state);
  const selectedClassInBuild = current.classList[selectedClass];
  const availableSubClasses = Object.values(SubClasses).filter(
    (subClass) =>
      selectedClassInBuild?.id === subClass.class &&
      selectedClassInBuild?.level >= subClass.level
  );
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