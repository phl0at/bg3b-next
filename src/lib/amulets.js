const Amulets = [
  {
    description: 'First Blood: On a hit, inflict Bleeding upon targets that have maximum Hit Points.',
    id: 1,
    img: 'Amulet of Bhaal',
    modifiers: null,
    name: 'Amulet of Bhaal',
    rarity: 'Legendary',
    spell: null
  },
  {
    description: 'Description: Gives the wearer advantage with Wisdom Saving Throws. &*& Grants Ability: Shield',
    id: 2,
    img: 'Amulet of the Harpers',
    modifiers: null,
    name: 'Amulet of the Harpers',
    rarity: 'Rare',
    spell: 'Shield'
  },
  {
    description: 'Wound Closure: When Downed, automatically stabilize at the start of the turn &*& Potent Healing: Maximize the number of Hit Points restored.',
    id: 3,
    img: 'Periapt of Wound Closure',
    modifiers: null,
    name: 'Periapt of Wound Closure',
    rarity: 'Rare',
    spell: null
  },
  {
    description: "Description: Set the wearer's Constitution score to 23. The enchantment has no effect if their Constitution score is higher without it. Additionally, gain Advantage on Constitution Saving Throws.",
    id: 4,
    img: 'Amulet of Greater Health',
    modifiers: 'constitution=23',
    name: 'Amulet of Greater Health',
    rarity: 'Very Rare',
    spell: null
  },
  {
    description: 'High Spellcasting: You gain a 2 bonus to Spell Save DC &*& Godswill: You gain an additional use of Channel Divinity.',
    id: 5,
    img: 'Amulet of the Devout',
    modifiers: null,
    name: 'Amulet of the Devout',
    rarity: 'Very Rare',
    spell: 'Godswill'
  }
]

export default Amulets
