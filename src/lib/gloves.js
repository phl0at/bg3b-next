const Gloves = [
  {
    description: "Description: Set the wearer's Dexterity score to 18. This enchantment has no effect if their Dexterity is higher without it.",
    id: 1,
    img: 'Gloves of Dexterity',
    modifiers: 'dexterity=18',
    name: 'Gloves of Dexterity',
    rarity: 'Very Rare',
    spell: null,
    type: 'Clothing'
  },
  {
    description: "Description: When the Lord of Murder, Bhaal, was rendered mortal, he knew his days were numbered. His vile machinations had gained him many enemies. Those days ran out and Bhaal was indeed killed, not by a god, but by a man with hawkish features named Cyric.&*&        Garrotte: Wrap a shadow rope around a Humanoid creature's throat to deal 1d10 Bludgeoning damage and start Garrotting it (DC 14 Strength saving throw to avoid becoming Garrotted for 3 turns).",
    id: 2,
    img: 'Bhaalist Gloves',
    modifiers: null,
    name: 'Bhaalist Gloves',
    rarity: 'Very Rare',
    spell: 'Garrote',
    type: 'Clothing'
  },
  {
    description: 'Description: Indents on the fingertips of these gloves are ringed with tiny meteorites, lined in a shimmering purple light rather than the rich red of astral flame.&*&        Craterous Wounds: Whenever you score a Critical Hit, deal an additional 1d6 Force damage.',
    id: 3,
    img: 'Craterflesh Gloves',
    modifiers: 'damage+1d6&*&Force',
    name: 'Craterflesh Gloves',
    rarity: 'Rare',
    spell: null,
    type: 'Clothing'
  },
  {
    description: "Description: The grip of darkness is a fear felt by many. The grip of a Dark Justiciar's Gauntlets is a sacred fear reserved for an unfortunate few.&*&        Umbral Attack: Your weapon attacks deal an additional 1d4 Necrotic damage.",
    id: 4,
    img: 'Dark Justiciar Gauntlets',
    modifiers: 'damage+1d4&*&Necrotic',
    name: 'Dark Justiciar Gauntlets',
    rarity: 'Uncommon',
    spell: null,
    type: 'Clothing'
  },
  {
    description: "Description: Banded in dark iron, these gloves are embossed with the brass likeness of an elf against a trio of arrows in flight.&*&        Corellon's Guiding Hand: You gain Proficiency with Longbows and Shortbows. Additionally, your ranged weapon attacks deal +2 damage.",
    id: 5,
    img: 'Gloves of Archery',
    modifiers: 'damage+2',
    name: 'Gloves of Archery',
    rarity: 'Uncommon',
    spell: null,
    type: 'Clothing'
  }
]

export default Gloves
