import React from "react";
import ItemList from "@/components/itemList";
import ItemsPage from "@/components/itemsPage";
import Helmets from "@/lib/helmets";

const HelmetsPage = () => {
  return (
    <ItemsPage>
      <ItemList items={Helmets} slot="helmet" title="Helmets" />
    </ItemsPage>
  );
};

export default HelmetsPage;
