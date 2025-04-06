"use client";
import { useStore } from "@/store/store";
import React from "react";
import DataMapper from "./dataMapper";

const Backgrounds = ({
  backgrounds,
  images,
}: {
  backgrounds: Background[];
  images: string[];
}) => {
  const {
    dispatch,
    current: { background },
  } = useStore((state) => state);
  const setter = (background: Background) =>
    dispatch({ type: "SET BACKGROUND", payload: background });

  return (
    <DataMapper
      data={backgrounds.toSpliced(backgrounds.length - 1)}
      selectedElement={background}
      setter={setter}
      width={120}
      height={120}
      button={<></>}
      images={images}
      menu={"backgrounds"}
    />
  );
};

export default Backgrounds;
