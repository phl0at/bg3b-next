import React, { MouseEvent } from "react";

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

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplay("class");
  };

  if (!availableSubClasses.length) return "";

  return (
    <main>
      {availableSubClasses.map((subClass) => {
        return <div key={subClass.id}>{subClass.description}</div>;
      })}

      <button onClick={handleClick}>Back</button>
    </main>
  );
};

export default SubClassComponent;
