import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Boots from "@/lib/boots";
const BootsPage = () => {
  return <ItemList items={Boots} slot="boots" title="Boots" />;
};

export default BootsPage;
