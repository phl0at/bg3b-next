import React from "react";
import Classes from "./classes";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";

const ClassPage = async () => {
  //!Create a custom route in Neurelo to get both of these in one request
  const classes = await getData("classes");
  // const subClasses = await getData("subclasses")


  return (
    <BuildComponent>
      <Classes classes={classes}
      // subClasses={subClasses} 
      />
    </BuildComponent>
  );
};

export default ClassPage;
