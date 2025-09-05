import AmuletOfBhaal from "../../public/images/items/amulets/Amulet of Bhaal.png"
import AmuletOfGreaterHealth from "../../public/images/items/amulets/Amulet of Greater Health.png"
import AmuletOfTheDevout from "../../public/images/items/amulets/Amulet of the Devout.png"
import AmuletOfTheHarpers from "../../public/images/items/amulets/Amulet of the Harpers.png"
import PeriaptOfWoundClosure from "../../public/images/items/amulets/Periapt of Wound Closure.png"


const Amulets = [
  {
    description: 'First Blood: On a hit, inflict Bleeding upon targets that have maximum Hit Points.',
    id: 1,
    img: AmuletOfBhaal,
    modifiers: null,
    name: 'Amulet of Bhaal',
    rarity: 'Legendary',
    spell: null,
  },
  {
    description: 'Description: Gives the wearer advantage with Wisdom Saving Throws. &*& Grants Ability: Shield',
    id: 2,
    img: AmuletOfTheHarpers,
    modifiers: null,
    name: 'Amulet of the Harpers',
    rarity: 'Rare',
    spell: 'Shield',
  },
  {
    description: 'Wound Closure: When Downed, automatically stabilize at the start of the turn &*& Potent Healing: Maximize the number of Hit Points restored.',
    id: 3,
    img: PeriaptOfWoundClosure,
    modifiers: null,
    name: 'Periapt of Wound Closure',
    rarity: 'Rare',
    spell: null,
  },
  {
    description: "Description: Set the wearer's Constitution score to 23. The enchantment has no effect if their Constitution score is higher without it. Additionally, gain Advantage on Constitution Saving Throws.",
    id: 4,
    img: AmuletOfGreaterHealth,
    modifiers: 'constitution=23',
    name: 'Amulet of Greater Health',
    rarity: 'Very Rare',
    spell: null
  },
  {
    description: 'High Spellcasting: You gain a 2 bonus to Spell Save DC &*& Godswill: You gain an additional use of Channel Divinity.',
    id: 5,
    img: AmuletOfTheDevout,
    modifiers: null,
    name: 'Amulet of the Devout',
    rarity: 'Very Rare',
    spell: 'Godswill'
  }
]

export default Amulets
