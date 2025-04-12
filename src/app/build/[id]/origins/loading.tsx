"use client";
import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <FadeLoader />;
    </main>
  );
};

export default Loading;
