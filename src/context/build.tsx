"use client";
import React, { createContext, useState, useContext } from "react";

const BuildContext = createContext<any>({});

export function BuildProvider({ children }: { children: React.ReactNode }) {
  const [selectedOrigin, setSelectedOrigin] = useState(1);
  const [selectedRace, setSelectedRace] = useState(1);
  const [selectedBackground, setSelectedBackground] = useState(1);
  const [selectedClass, setSelectedClass] = useState(1);

  return (
    <BuildContext.Provider
      value={{
        selectedOrigin,
        selectedRace,
        selectedBackground,
        selectedClass,
        setSelectedOrigin,
        setSelectedRace,
        setSelectedBackground,
        setSelectedClass,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
}

export function useBuildContext() {
  return useContext(BuildContext);
}
