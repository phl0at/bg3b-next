"use client";
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


  return (
    <DataMapper
      data={races}
      selectedElement={race}
      setter={setter}
      width={120}
      height={120}
      button={<></>}
      images={images}
      menu={"races"}
    />
  );
};

export default Races;
