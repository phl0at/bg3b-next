const RangedWeapons = [
  {
    damage: '1d8',
    damage_bonus: 1,
    damage_mod: 'Dexterity&*&Strength',
    damage_type: 'Piercing',
    description: 'Titan Weapon: This weapon deals additional damage equal to your Strength Modifier.',
    id: 3,
    img: 'Long Bow_2',
    modifiers: null,
    name: 'Titanstring Bow',
    range: 'Ranged',
    rarity: 'Rare',
    spell: null,
    type: 'Long Bow'
  },
  {
    damage: '1d8',
    damage_bonus: 3,
    damage_mod: 'Dexterity',
    damage_type: 'Piercing',
    description: "Description: Gontr Mael blasted from the corpse of the Steelwatcher Titan: a bow formed from the boiling slag and weird whispering gyros inherent to the mechanical giant. It must have acted as the Titan's abdomen, exchanging muscle for immaculate steel.&*&        Promised Victory: On a hit, possibly inflict Guiding Bolt upon the target &*& Gontr Mael: This object shines with a glowing light radius of 6m / 20ft.",
    id: 7,
    img: 'Gontr Mael',
    modifiers: null,
    name: 'Gontr Mael',
    range: 'Ranged',
    rarity: 'Legendary',
    spell: 'Haste',
    type: 'Longbow'
  },
  {
    damage: '1d6',
    damage_bonus: 2,
    damage_mod: 'Dexterity',
    damage_type: 'Piercing',
    description: "Description: Rigged to draw on the skin-peeling hellfire of Avernus by a resourceful devil, this crossbow's size is no indication of its deadly potential.&*&        Hellstalker: Possibly inflict Burning when attacking while Hiding or Invisible.",
    id: 8,
    img: 'Hellfire Hand Crossbow',
    modifiers: null,
    name: 'Hellfire Hand Crossbow',
    range: 'Ranged',
    rarity: 'Very Rare',
    spell: 'Scorching Ray',
    type: 'Hand Crossbow'
  },
  {
    damage: '1d6',
    damage_bonus: 1,
    damage_mod: 'Dexterity',
    damage_type: 'Force',
    description: "Description: On the stock, the crafter of this crossbow etched in tiny print: 'Ifn yer gonna miss, why dontchyae stop being a wally, and hit instead!'&*&Damage Type: Attacks with this weapon deal Force damage.",
    id: 9,
    img: "Ne'er Misser",
    modifiers: null,
    name: "Ne'er Misser",
    range: 'Ranged',
    rarity: 'Rare',
    spell: 'Magic Missile',
    type: 'Hand Crossbow'
  },
  {
    damage: '1d6',
    damage_bonus: 1,
    damage_mod: 'Dexterity',
    damage_type: 'Piercing',
    description: 'Description: Conducting a series of increasingly sick rituals - involving the ashes of a gnome and silkworms fed fat on the corpse of a dwarven cleric - the goblin shaman Kirruk Redrats created this deadly bow.&*&        Blightbringer: Attacking Gnomes or Dwarves with this weapon receives a 1d4 bonus to Attack and Damage rolls &*& Prey Decelerator: When this weapon lands a Critical Hit, it also Slows the target.',
    id: 10,
    img: 'Blightbringer',
    modifiers: 'Blightbringer',
    name: 'Blightbringer',
    range: 'Ranged',
    rarity: 'Very Rare',
    spell: 'Prey Decelerator',
    type: 'Shortbow'
  }
]

export default RangedWeapons
