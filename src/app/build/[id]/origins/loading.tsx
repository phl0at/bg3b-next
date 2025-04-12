"use client";
import React from "react";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <CircleLoader />;
    </main>
  );
};

export default Loading;
