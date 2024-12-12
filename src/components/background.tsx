"use client";
import { useStore } from "@/store/store";
import React from "react";
import DataMapper from "./dataMapper";

const Backgrounds = ({ backgrounds }: { backgrounds: Background[] }) => {
  const setter = (id: number) =>
    dispatch({ type: "SET BACKGROUND", payload: id });
  const {
    dispatch,
    current: { background },
  } = useStore((state) => state);

  return (
    <DataMapper
      data={backgrounds.toSpliced(backgrounds.length - 1)}
      selectedElement={background}
      setter={setter}
      route="bg"
      width={90}
      height={90}
      button={<></>}
    />
  );
};

export default Backgrounds;
