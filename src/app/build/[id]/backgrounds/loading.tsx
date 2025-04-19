"use client";
import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <SyncLoader />;
    </main>
  );
};

export default Loading;
