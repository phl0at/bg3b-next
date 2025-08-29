"use client";
import { useStore } from "@/store/store";
import React from "react";
import Races from "@/lib/races";
import MapSelections from "./mapSelections";
import Description from "./description";

const RaceComponent = () => {
  const {
    dispatch,
    current: { race, origin },
  } = useStore((state) => state);
  const setter = (race: Race) => {
    if (origin != 7) {
      alert(
        "Cannot change the Race of Origin Characters. Select the Custom Origin to edit your Race."
      );
    } else {
      dispatch({ type: "SET RACE", payload: race });
    }
  };

  return (
    <>
      <MapSelections
        menu={"races"}
        data={Races}
        selectedElement={race}
        setter={setter}
        width={155}
        height={155}
      />
      <Description data={Races} selectedElement={race} />
    </>
  );
};

export default RaceComponent;
