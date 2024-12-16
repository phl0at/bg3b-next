"use client";
import { StaticImageData } from "next/image";
import { useStore } from "@/store/store";
import React from "react";
import DataMapper from "./dataMapper";

const Origins = ({
  origins,
  images,
}: {
  origins: Origin[];
  images: StaticImageData[];
}) => {
  const {
    dispatch,
    current: { origin },
  } = useStore((state) => state);
  const setter = (origin: Origin) =>
    dispatch({ type: "SET ORIGIN", payload: origin });

  return (
    <DataMapper
      images={images}
      data={origins}
      selectedElement={origin}
      setter={setter}
      width={155}
      height={155}
      button={<></>}
    />
  );
};

export default Origins;
