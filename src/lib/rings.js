import CallousGlowRing from "../../public/images/items/rings/Callous Glow Ring.png"
import CausticBand from "../../public/images/items/rings/Caustic Band.png"
import GoldBlackRing from "../../public/images/items/rings/Gold Black Ring.png"
import RingOfArcaneSynergy from "../../public/images/items/rings/Ring of Arcane Synergy.png"
import RingOfFreeAction from "../../public/images/items/rings/Ring of Free Action.png"

const Rings = [
  {
    description: 'Malefic Excretion: Your weapon attacks also deal 2 Acid damage.',
    id: 1,
    img: CausticBand,
    modifiers: 'damage+2&*&Acid',
    name: 'Caustic Band',
    rarity: 'Very Rare',
    spell: null
  },
  {
    description: 'Callous Glow: The wearer deals an additional 2 points of Radiant damage against creatures that are illuminated.',
    id: 2,
    img: CallousGlowRing,
    modifiers: 'damage+2&*&Radiant',
    name: 'Callous Glow Ring',
    rarity: 'Uncommon',
    spell: null
  },
  {
    description: 'Executioner: When you kill a creature, your next Attack roll will be a Critical Hit. This can only happen once per long rest.',
    id: 3,
    img: GoldBlackRing,
    modifiers: null,
    name: "Killer's Sweetheart",
    rarity: 'Very Rare',
    spell: 'Executioner'
  },
  {
    description: 'Synergetic Cantrip: When you deal damage with a Cantrip, you gain Arcane Synergy for 2 turns.',
    id: 4,
    img: RingOfArcaneSynergy,
    modifiers: 'Arcane Synergy',
    name: 'Ring of Arcane Synergy',
    rarity: 'Rare',
    spell: null
  },
  {
    description: 'Unwavering: You ignore the effects of Difficult Terrain, and cannot be Paralyzed or Restrained.',
    id: 5,
    img: RingOfFreeAction,
    modifiers: null,
    name: 'Ring of Free Action',
    rarity: 'Rare',
    spell: null
  }
]

export default Rings
