import React from "react";

const Description = ({
  data,
  selectedElement,
}: {
  data: Origin[] | Background[] | Race[] | Class[];
  selectedElement: number;
}) => {
  return (
    <div className="w-[80%] gap-y-3 flex flex-col mt-12 text-left text-amber-100">
      <p className="text-amber-400 underline">Description</p>
      <p className="text-md">{data[selectedElement].description}</p>
    </div>
  );
};

export default Description;
