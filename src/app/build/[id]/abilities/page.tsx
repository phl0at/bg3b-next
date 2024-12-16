import React from "react";
import Abilities from "@/components/abilities";
import BuildComponent from "@/components/buildComponent";
import Strength from "../../../../../public/stats/Strength.png"
import Dexterity from "../../../../../public/stats/Dexterity.png"
import Constitution from "../../../../../public/stats/Constitution.png"
import Intelligence from "../../../../../public/stats/Intelligence.png"
import Wisdom from "../../../../../public/stats/Wisdom.png"
import Charisma from "../../../../../public/stats/Charisma.png"

const AbilitiesPage = async () => {
  const images = [
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma
  ]
  return (
    <BuildComponent>
      <Abilities images={images} />
    </BuildComponent>
  );
};

export default AbilitiesPage;
