import React from "react";
import ItemList from "@/components/itemList";
import Boots from "@/lib/boots";

const BootsPage = () => {
  return <ItemList items={Boots} slot="boots" title="Boots" />;
};

export default BootsPage;
