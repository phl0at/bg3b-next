"use client";
import { useStore } from "@/store/store";
import React from "react";
import DataMapper from "./dataMapper";
import Backgrounds from "@/lib/backgrounds"

const BackgroundComponent = () => {
  const {
    dispatch,
    current: { background },
  } = useStore((state) => state);
  const setter = (background: Background) =>
    dispatch({ type: "SET BACKGROUND", payload: background });

  console.log(Backgrounds)
  return (
    <DataMapper
      menu={"backgrounds"}
      data={Backgrounds.toSpliced(Backgrounds.length - 1)}
      selectedElement={background}
      setter={setter}
      width={120}
      height={120}
      button={<></>}
    />
  );
};

export default BackgroundComponent;
