const Melee = [
  {
    damage: '1d4',
    damage_bonus: 0,
    damage_mod: 'Strength',
    damage_type: 'Bludgeoning',
    description: "Splinters of a Giant's Might: Increase Strength to 19.",
    id: 1,
    img: 'Club of Hill Giant Strength',
    modifiers: 'strength=19',
    name: 'Club of Hill Giant Strength',
    range: 'Melee',
    rarity: 'Uncommon',
    spell: null,
    type: 'Club'
  },
  {
    damage: '1d4',
    damage_bonus: 1,
    damage_mod: 'Dexterity',
    damage_type: 'Piercing',
    description: 'Deathly Slumber: Deals an additional 1d4 Necrotic damage to creatures that are Knocked out or Sleeping.',
    id: 2,
    img: 'Dagger_1',
    modifiers: null,
    name: "Assassin's Touch",
    range: 'Melee',
    rarity: 'Uncommon',
    spell: null,
    type: 'Dagger'
  },
  {
    damage: '1d6',
    damage_bonus: 2,
    damage_mod: 'Dexterity***Strength',
    damage_type: 'Piercing',
    description: 'Description: Snatched from the realm of the mad wizard Halaster Blackoak, this knife became a prized keepsake of a duergar king.&*&        Organ Rearranger: Reduce the number you need to roll a Critical Hit while attacking by 1. When you roll 2 damage or less, reroll the dice, taking the highest result &*& Shadow Blade: You have Advantage on Attack rolls against Lightly or Heavily Obscured targets when using this blade.',
    id: 4,
    img: 'Knife of the Undermountain King',
    modifiers: null,
    name: 'Knife of the Undermountain King',
    range: 'Melee',
    rarity: 'Very Rare',
    spell: null,
    type: 'Shortsword'
  },
  {
    damage: '2d6',
    damage_bonus: 3,
    damage_mod: 'Strength',
    damage_type: 'Slashing',
    description: "Description: Wielded by Balduran, the founder of Baldur's Gate and friend to his guardian dragon, a great glittering wyrm called Ansur. Fellowship can be undone, though, as easily as you or I might unlace the strings of our shoes, and it was in a time of skullduggery and hardship that Balduran killed Ansur, carrying out the deed with this sword.&*&        Giantslayer: On a hit, double the damage from your Strength modifier. This weapon grants you Advantage on Attack rolls against Large, Huge or Gargantuan creatures.",
    id: 5,
    img: "Balduran's Giantslayer",
    modifiers: null,
    name: "Balduran's Giantslayer",
    range: 'Melee',
    rarity: 'Legendary',
    spell: null,
    type: 'Greatsword'
  },
  {
    damage: '1d4',
    damage_bonus: 0,
    damage_mod: 'Dexterity***Strength',
    damage_type: 'Piercing',
    description: 'Description: Fecund and revolting, the Abyss is not the worst place this has been.',
    id: 6,
    img: 'Poo Scraper',
    modifiers: null,
    name: 'Poo Scraper',
    range: 'Melee',
    rarity: 'Common',
    spell: null,
    type: 'Dagger'
  }
]

export default Melee
