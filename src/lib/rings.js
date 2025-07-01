const Rings = [
  {
    description: 'Malefic Excretion: Your weapon attacks also deal 2 Acid damage.',
    id: 1,
    img: 'Caustic Band',
    modifiers: 'damage+2&*&Acid',
    name: 'Caustic Band',
    rarity: 'Very Rare',
    spell: null
  },
  {
    description: 'Callous Glow: The wearer deals an additional 2 points of Radiant damage against creatures that are illuminated.',
    id: 2,
    img: 'Callous Glow Ring',
    modifiers: 'damage+2&*&Radiant',
    name: 'Callous Glow Ring',
    rarity: 'Uncommon',
    spell: null
  },
  {
    description: 'Executioner: When you kill a creature, your next Attack roll will be a Critical Hit. This can only happen once per long rest.',
    id: 3,
    img: "Killer's Sweetheart",
    modifiers: null,
    name: "Killer's Sweetheart",
    rarity: 'Very Rare',
    spell: 'Executioner'
  },
  {
    description: 'Synergetic Cantrip: When you deal damage with a Cantrip, you gain Arcane Synergy for 2 turns.',
    id: 4,
    img: 'Ring of Arcane Synergy',
    modifiers: 'Arcane Synergy',
    name: 'Ring of Arcane Synergy',
    rarity: 'Rare',
    spell: null
  },
  {
    description: 'Unwavering: You ignore the effects of Difficult Terrain, and cannot be Paralyzed or Restrained.',
    id: 5,
    img: 'Ring of Free Action',
    modifiers: null,
    name: 'Ring of Free Action',
    rarity: 'Rare',
    spell: null
  }
]

export default Rings
