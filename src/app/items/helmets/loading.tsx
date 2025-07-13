import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <SyncLoader color="#e4c274" />;
    </main>
  );
};

export default Loading;
