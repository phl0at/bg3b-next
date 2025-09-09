import Elf from "../../../public/images/races/Elf.png";
import Tiefling from "../../../public/images/races/Tiefling.png"
import Drow from "../../../public/images/races/Drow.png"
import Human from "../../../public/images/races/Human.png"
import Githyanki from "../../../public/images/races/Githyanki.png"
import Dwarf from "../../../public/images/races/Dwarf.png"
import HalfElf from "../../../public/images/races/HalfElf.png"
import Halfling from "../../../public/images/races/Halfling.png"
import Gnome from "../../../public/images/races/Gnome.png"
import Dragonborn from "../../../public/images/races/Dragonborn.png"
import HalfOrc from "../../../public/images/races/HalfOrc.png"

const Races = {
  0: {
    description:
      "With ethereal countenances and long lifespans, elves are at home with nature's power, flourishing in light and dark alike",
    id: 0,
    name: "Elf",
    img: Elf,
  },
  1: {
    description:
      "Descended from devils of the Nine Hells, tieflings face constant suspicion in Faerûn. Thankfully, their arcane abilities make them natural survivors.",
    id: 1,
    name: "Tiefling",
    img: Tiefling,
  },
  2: {
    description:
      "Driven to the Underdark, most drow have adopted a ruthless pragmatism. While the Lolth-sworn delight in the goddess' evil tenets, the Seldarine reject Her attempt to overthrow the leader of the elven pantheon.",
    id: 2,
    name: "Drow",
    img: Drow,
  },
  3: {
    description:
      "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.",
    id: 3,
    name: "Human",
    img: Human,
  },
  4: {
    description:
      "With a ruthlessness borne from mind flayer enslavement, githyanki ride the Astral Sea atop red dragons, bringing their silver swords and psionic might to bear against any trace of the illithid menace.",
    id: 4,
    name: "Githyanki",
    img: Githyanki,
  },
  5: {
    description:
      "As durable an unyielding as their homes of stone, dwarves are some of the finest warriors, miners, and smiths of Faerûn.",
    id: 5,
    name: "Dwarf",
    img: Dwarf,
  },
  6: {
    description:
      "Curious, ambitious, and versatile, half-elves are welcome everywhere, but struggle without a community to call their own.",
    id: 6,
    name: "Half-Elf",
    img: HalfElf,
  },
  7: {
    description:
      "Small yet capable, halflings prefer the comforts of home and hearth - but their natural luck and dexterity makes them fine adventurers.",
    id: 7,
    name: "Halfling",
    img: Halfling,
  },
  8: {
    description:
      "Small, clever, and energetic, gnomes use their long lives to explore Faerûn's brightest corners and darkest depths.",
    id: 8,
    name: "Gnome",
    img: Gnome,
  },
  9: {
    description:
      "A proud race that values clan and skills above all else. Once enslaved by dragons, they strive to be self-sufficient, not wanting to be beholden to anyone, not even the gods.",
    id: 9,
    name: "Dragonborn",
    img: Dragonborn,
  },
  10: {
    description:
      "Creatures of intense emotion, half-orcs are more inclined to act than contemplate - whether the rage burning in their bodies compels them to fight, or the love filling their hearts inspires acts of incredible kindness.",
    id: 10,
    name: "Half-Orc",
    img: HalfOrc,
  },
};

export default Races;
