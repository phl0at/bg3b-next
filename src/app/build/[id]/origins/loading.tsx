"use client";
import React from "react";
import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <BarLoader />;
    </main>
  );
};

export default Loading;
