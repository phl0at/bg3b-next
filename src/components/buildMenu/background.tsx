"use client";
import { useStore } from "@/store/store";
import React from "react";
import Backgrounds from "@/lib/backgrounds";
import MapSelections from "./mapSelections";
import Description from "./description";

const BackgroundComponent = () => {
  const {
    dispatch,
    current: { background, origin },
  } = useStore((state) => state);
  const setter = (background: Background) => {
    if (origin != 8) {
      alert(
        "Cannot change the Background of Origin Characters. Select the Custom Origin to edit your Background."
      );
    } else {
      dispatch({ type: "SET BACKGROUND", payload: background });
    }
  };

  return (
    <>
      <MapSelections
        menu={"backgrounds"}
        data={Backgrounds.toSpliced(Backgrounds.length - 1)}
        selectedElement={background}
        setter={setter}
        width={120}
        height={120}
      />
      <Description data={Backgrounds} selectedElement={background} />
    </>
  );
};

export default BackgroundComponent;
