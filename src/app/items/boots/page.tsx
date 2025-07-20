import React from "react";
import ItemList from "@/components/itemList";
import ItemsPage from "@/components/itemsPage";
import Boots from "@/lib/boots";

const BootsPage = () => {
  return (
    <ItemsPage>
      <ItemList items={Boots} slot="boots" title="Boots" />
    </ItemsPage>
  );
};

export default BootsPage;
