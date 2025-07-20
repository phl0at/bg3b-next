import React from "react";
import ItemList from "@/components/itemList";
import ItemsPage from "@/components/itemsPage";
import Boots from "@/lib/boots";

const BootsPage = () => {
  return <ItemList items={Boots} slot="boots" title="Boots" />;
};

export default BootsPage;
