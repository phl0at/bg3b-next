import React from "react";
import ItemList from "@/components/itemList";
import Amulets from "@/lib/amulets";

const AmuletsPage = () => {
  return <ItemList items={Amulets} slot="amulet" title="Amulets" />;
};

export default AmuletsPage;
