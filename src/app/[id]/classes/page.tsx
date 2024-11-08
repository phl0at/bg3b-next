import React from "react";
import BuildMenuList from "@/components/buildMenuList";
import Classes from "./classes";
import { getData } from "@/lib/utils";

const ClassPage = async () => {
  const classes = await getData("classes");

  return (
    <main className="w-screen h-screen fixed left-[21%] top-0 py-3 gap-4 flex items-center">
      <BuildMenuList />
      <Classes classes={classes} />
    </main>
  );
};

export default ClassPage;
