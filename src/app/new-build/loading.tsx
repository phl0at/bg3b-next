import React from "react";
import { SyncLoader } from "react-spinners";

const loading = () => {
  return (
    <div>
      <main className="h-screen w-screen flex items-center justify-center">
        <SyncLoader color="#e4c274" />;
      </main>
    </div>
  );
};

export default loading;
