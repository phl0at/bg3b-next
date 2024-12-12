"use client";
import { useStore } from "@/store/store";
import React from "react";
import DataMapper from "./dataMapper";

const Origins = ({ origins }: { origins: Origin[] }) => {
  const setter = (id: number) => dispatch({ type: "SET ORIGIN", payload: id });
  const {
    dispatch,
    current: { origin },
  } = useStore((state) => state);

  return (
    <DataMapper
      data={origins}
      selectedElement={origin}
      setter={setter}
      route="char"
      width={100}
      height={130}
      button={<></>}
    />
  );
};

export default Origins;
