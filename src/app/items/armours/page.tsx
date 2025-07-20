import React from "react";
import ItemList from "@/components/itemList";
import ItemsPage from "@/components/itemsPage";
import Armours from "@/lib/armours";

const ArmoursPage = () => {
  return (
    <ItemsPage>
      <ItemList items={Armours} slot="armour" title="Armours" />
    </ItemsPage>
  );
};

export default ArmoursPage;
