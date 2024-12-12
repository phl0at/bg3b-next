"use client";
import { useStore } from "@/store/store";
import DataMapper from "./dataMapper";
import React from "react";

const Races = ({ races }: { races: Race[] }) => {
  const setter = (id: number) => dispatch({ type: "SET RACE", payload: id });
  const {
    dispatch,
    current: { race },
  } = useStore((state) => state);

  return (
    <DataMapper
      data={races}
      selectedElement={race}
      setter={setter}
      route="race"
      width={90}
      height={90}
      button={<></>}
    />
  );
};

export default Races;
