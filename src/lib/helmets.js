// import Birthright from "../../public/images/items/helmets/Birthright.png"
import DiademOfArcaneSynergy from "../../public/images/items/helmets/Diadem of Arcane Synergy.png"
import HasteHelm from "../../public/images/items/helmets/Haste Helm.png"
import MaskOfSoulPerception from "../../public/images/items/helmets/Mask of Soul Perception.png"
import TiaraGrey from "../../public/images/items/helmets/Tiara Grey.png"

const Helmets = [
  {
    description:
      "Smooth Start: At the start of combat, the wearer gains Momentum for 3 turns.",
    id: 1,
    img: HasteHelm,
    modifiers: null,
    name: "Haste Helm",
    rarity: "Rare",
    spell: null,
    type: "Clothing",
  },
  {
    description:
      "Soul Perception: Gain a +2 bonus to Attack rolls, Initiative Rolls, and Perception Checks.",
    id: 3,
    img: MaskOfSoulPerception,
    modifiers: null,
    name: "Mask of Soul Perception",
    rarity: "Very Rare",
    spell: "Detect Thoughts",
    type: "Clothing",
  },
  {
    description:
      "Hunter's Eye: You gain a +1d4 bonus to Attack rolls against creatures marked by Hunter's Mark, True Strike, Faerie Fire, or Guiding Bolt.",
    id: 4,
    img: TiaraGrey,
    modifiers: null,
    name: "Circlet of Hunting",
    rarity: "Very Rare",
    spell: null,
    type: "Clothing",
  },
  {
    description:
      "Synergetic Moments: When you inflict a condition, gain Arcane Synergy for 2 turns.",
    id: 2,
    img: DiademOfArcaneSynergy,
    modifiers: null,
    name: "Diadem of Arcane Synergy",
    rarity: "Rare",
    spell: null,
    type: "Clothing",
  },
];

export default Helmets;
