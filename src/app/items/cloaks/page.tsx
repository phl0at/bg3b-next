import React from "react";
import ItemList from "@/components/itemList";
import Cloaks from "@/lib/cloaks";

const CloaksPage = () => {
  return <ItemList items={Cloaks} slot="cloak" title="Cloaks" />;
};

export default CloaksPage;
