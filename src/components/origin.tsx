"use client";
import { useStore } from "@/store/store";
import React from "react";
import DataMapper from "./dataMapper";
import Origins from "@/lib/origins";

const OriginComponent = () => {
  const {
    dispatch,
    current: { origin },
  } = useStore((state) => state);
  const setter = (origin: Origin) =>
    dispatch({ type: "SET ORIGIN", payload: origin });

  return (
    <DataMapper
      menu={"origins"}
      data={Origins}
      selectedElement={origin}
      setter={setter}
      width={155}
      height={155}
      button={<></>}
    />
  );
};

export default OriginComponent;
