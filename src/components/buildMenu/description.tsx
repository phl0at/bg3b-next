import React from "react";

const Description = ({
  data,
  selectedElement,
}: {
  data: Origin[] | Background[] | Race[] | Class[];
  selectedElement: number;
}) => {
  return (
    <div className="w-[80%] mt-12 text-center text-amber-100">
      <p className="text-amber-400 my-1">{data[selectedElement - 1].name}</p>
      <p>{data[selectedElement - 1].description}</p>
    </div>
  );
};

export default Description;
