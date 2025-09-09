import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Gloves from "@/lib/equipment/gloves";

const GlovesPage = () => {
  return <ItemList items={Gloves} slot="gloves" title="Gloves" />;
};

export default GlovesPage;
