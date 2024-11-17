import React from "react";
import Origins from "./origin";
import { getData } from "@/lib/utils";
import BuildLayout from "../../layout";

const OriginPage = async () => {
  const origins = await getData("origins");

  return (
    <BuildLayout>
      <Origins origins={origins} />
    </BuildLayout>
  );
};

export default OriginPage;
