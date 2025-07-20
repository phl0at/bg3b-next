import React from "react";
import ItemList from "@/components/itemList";
import Melee from "@/lib/meleeWeapons";

const MeleePage = () => {
  const OffHandWeapons = Melee.filter(
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
