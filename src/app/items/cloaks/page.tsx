import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Cloaks from "@/lib/equipment/cloaks";

const CloaksPage = () => {
  return <ItemList items={Cloaks} slot="cloak" title="Cloaks" />;
};

export default CloaksPage;
