import React from "react";
import ItemList from "@/components/itemList";
import ItemsPage from "@/components/itemsPage";
import Cloaks from "@/lib/cloaks";

const CloaksPage = () => {
  return (
    <ItemsPage>
      <ItemList items={Cloaks} slot="cloak" title="Cloaks" />
    </ItemsPage>
  );
};

export default CloaksPage;
