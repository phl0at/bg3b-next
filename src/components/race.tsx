"use client";
import { StaticImageData } from "next/image";
import { useStore } from "@/store/store";
import DataMapper from "./dataMapper";
import React from "react";

const Races = ({
  races,
  images,
}: {
  races: Race[];
  images: StaticImageData[];
}) => {
  const setter = (race: Race) => dispatch({ type: "SET RACE", payload: race });
  const {
    dispatch,
    current: { race },
  } = useStore((state) => state);

  return (
    <DataMapper
      data={races}
      selectedElement={race}
      setter={setter}
      width={150}
      height={150}
      button={<></>}
      images={images}
    />
  );
};

export default Races;
