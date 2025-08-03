import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Ranged from "@/lib/rangedWeapons";

const RangedPage = () => {
  return (
    <ItemList items={Ranged} slot="rangedMH" title="Main Hand Range Weapons" />
  );
};

export default RangedPage;
