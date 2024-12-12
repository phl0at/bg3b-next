import React from "react";
import Backgrounds from "@/components/background";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";

const BGPage = async () => {
  const backgrounds = await getData("backgrounds");

  return (
    <BuildComponent>
      <Backgrounds backgrounds={backgrounds} />
    </BuildComponent>
  );
};

export default BGPage;
