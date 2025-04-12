"use client";
import React from "react";
import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <GridLoader />;
    </main>
  );
};

export default Loading;
