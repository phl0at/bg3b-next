"use client";
import { useStore } from "@/store/store";
import React from "react";
import Origins from "@/lib/origins";
import MapSelections from "./mapSelections";
import Description from "./description";

const OriginComponent = () => {
  const {
    dispatch,
    current: { origin },
  } = useStore((state) => state);
  const setter = (origin: Origin) =>
    dispatch({ type: "SET ORIGIN", payload: origin });

  return (
    <>
      <MapSelections
        menu={"origins"}
        data={Origins}
        selectedElement={origin}
        setter={setter}
        width={155}
        height={155}
      />
      <Description data={Origins} selectedElement={origin} />
    </>
  );
};

export default OriginComponent;
