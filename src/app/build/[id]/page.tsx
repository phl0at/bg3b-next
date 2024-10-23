import React from "react";
import { GiVibratingShield } from "react-icons/gi";

const BuildPage = () => {
  return (
    <>
      <main className="w-full h-screen fixed top-0 py-3 flex justify-center items-center">
        <div className="bg-zinc-800 shadow-xl w-1/3 h-full rounded-3xl"></div>
      </main>
      <GiVibratingShield className="text-blue-300 hover:text-blue-500 cursor-pointer fixed right-1 bottom-1 size-36 hover:-translate-y-1 transition ease-in-out delay-250 duration-300" />
    </>
  );
};

export default BuildPage;
