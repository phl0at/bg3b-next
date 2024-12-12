import React from "react";

const SubClassComponent = ({
  selectedClassInBuild,
  subClasses,
}: {
  selectedClassInBuild: Class;
  subClasses: SubClass[];
}) => {
  console.log(selectedClassInBuild);
  if (!selectedClassInBuild) return "";

  const availableSubClasses = subClasses.filter(
    (subClass) =>
      selectedClassInBuild.id === subClass.class &&
      selectedClassInBuild.level >= subClass.level
  );

  if (!availableSubClasses.length) return "";

  if (selectedClassInBuild.subClass === undefined) {
    return (
      <main>
        {availableSubClasses.map((subClass) => {
          return <div key={subClass.id}>{subClass.description}</div>;
        })}
      </main>
    );
  } else {
    return (
      <main>
        {availableSubClasses[selectedClassInBuild.subClass].description}
      </main>
    );
  }
};

export default SubClassComponent;
