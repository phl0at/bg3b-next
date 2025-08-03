"use client";
import React, { MouseEvent } from "react";
import Classes from "@/lib/classes";
import { useStore } from "@/store/store";

const AddClassButton = ({
  selectedClass,
  selectedClassInBuild,
}: {
  selectedClass: number;
  selectedClassInBuild: Class;
}) => {
  const { dispatch } = useStore((state) => state);

  const handleClickAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD CLASS", payload: Classes[selectedClass - 1] });
  };

  const handleClickReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CLEAR CLASSES" });
  };

  return (
    <div className="w-[80%] mt-12 flex items-center justify-between text-amber-100 ">
      <button
        className="p-3 outline rounded-lg hover:text-amber-400"
        onClick={handleClickAdd}
      >
        {selectedClassInBuild ? "Add Level" : "Add Class"}
      </button>
      <button
        className="p-3 outline rounded-lg hover:text-red-400"
        onClick={handleClickReset}
      >
        Reset Classes
      </button>
    </div>
  );
};

export default AddClassButton;
