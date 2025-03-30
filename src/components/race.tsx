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
  images: string[];
}) => {
  const setter = (race: Race) => dispatch({ type: "SET RACE", payload: race });
  const {
    dispatch,
    current: { race },
  } = useStore((state) => state);
  const menu = "races"

  return (
    <DataMapper
      data={races}
      selectedElement={race}
      setter={setter}
      width={120}
      height={120}
      button={<></>}
      images={images}
      menu={menu}
    />
  );
};

export default Races;
