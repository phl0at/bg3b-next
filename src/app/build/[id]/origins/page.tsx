import React from "react";
import Origins from "./origin";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";

const OriginPage = async () => {
  const origins = await getData("origins");

  return (
    <BuildComponent>
      <Origins origins={origins} />
    </BuildComponent>
  );
};

export default OriginPage;
