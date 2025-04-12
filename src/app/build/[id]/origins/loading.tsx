"use client";
import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <MoonLoader />;
    </main>
  );
};

export default Loading;
