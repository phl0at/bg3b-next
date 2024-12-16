"use client";
import { useStore } from "@/store/store";
import React from "react";
import DataMapper from "./dataMapper";
import { StaticImageData } from "next/image";

// import HauntedOne from "../../public/backgrounds/Haunted One.png";

const Backgrounds = ({
  backgrounds,
  images,
}: {
  backgrounds: Background[];
  images: StaticImageData[];
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
    />
  );
};

export default Backgrounds;
