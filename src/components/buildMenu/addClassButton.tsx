"use client";
import React, { MouseEvent } from "react";
import { useStore } from "@/store/store";
import Classes from "@/lib//character/classes";
import SubClassButton from "./subClassButton";
import { FrontEndBuild, FrontEndClass, StaticClass } from "@/lib/types";

const AddClassButton = ({
  setDisplay,
}: {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { dispatch, current, selectedClass }: { dispatch: ({ }) => void; current: FrontEndBuild; selectedClass: number; } = useStore((state) => state);
  const selectedClassInBuild: FrontEndClass = current.classList[selectedClass];
  const handleClickAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (current.level > 11) alert("Max level reached");
    dispatch({ type: "ADD CLASS", payload: Classes[selectedClass as keyof typeof Classes] as StaticClass });
  };
  const handleClickReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CLEAR CLASSES" });
  };

  return (
    <div className="w-[80%] mt-12 flex items-center justify-between text-amber-100 ">
      <button
        className={`p-3 outline rounded-lg hover:text-amber-400 ${current.level > 11 && "opacity-50 cursor-not-allowed"}`}
        onClick={handleClickAdd}
        disabled={current.level > 11}
      >
        {selectedClassInBuild ? "Add Level" : "Add Class"}
      </button>
      <SubClassButton
        setDisplay={setDisplay}
      />
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
