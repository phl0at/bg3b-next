import React from "react";
import ItemList from "@/components/itemList";
import ItemsPage from "@/components/itemsPage";
import Amulets from "@/lib/amulets";

const AmuletsPage = () => {
  return (
    <ItemsPage>
      <ItemList items={Amulets} slot="amulet" title="Amulets" />
    </ItemsPage>
  );
};

export default AmuletsPage;
