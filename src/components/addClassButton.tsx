"use client";
import React, { MouseEvent } from "react";
import Classes from "@/lib/classes";
import { useStore } from "@/store/store";

const AddClassButton = ({
  level,
  selectedClass,
  selectedClassInBuild,
}: {
  level: number;
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
    <div className="w-[78%] mt-12 gap-x-5 flex items-center justify-between text-amber-100 ">
      <div className="gap-x-5 flex items-center justify-start text-amber-100 ">
        <button
          className="p-3 outline rounded-lg hover:text-amber-400"
          onClick={handleClickAdd}
        >
          Add Class
        </button>

        <div className="flex flex-col items-start justify-center">
          <p>
            {`${Classes[selectedClass - 1].name}: ${
              selectedClassInBuild?.level || 0
            }`}
          </p>
          <p>{`Total: ${level} / 12`}</p>
        </div>
      </div>
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
