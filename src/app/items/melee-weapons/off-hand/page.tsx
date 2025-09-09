import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Melee from "@/lib/equipment/meleeWeapons";

const MeleePage = () => {
  const OffHandWeapons = Object.values(Melee).filter(
    (item) => item.type != "Greatsword" && item.type != "Trident"
  );
  return (
    <ItemList
      items={OffHandWeapons}
      slot="meleeOH"
      title="Offhand Melee Weapons"
    />
  );
};

export default MeleePage;
