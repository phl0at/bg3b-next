import React from "react";
import Classes from "./classes";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";

const ClassPage = async () => {
  const classes = await getData("classes");

  return (
    <BuildComponent>
      <Classes classes={classes} />
    </BuildComponent>
  );
};

export default ClassPage;
