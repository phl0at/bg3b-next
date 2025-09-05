import BhaalistArmour from "../../public/images/items/armours/Bhaalist Armor.png"
import DarkJusticiarHalfPlate from "../../public/images/items/armours/Dark Justiciar Half Plate.png"
import HellduskArmour from "../../public/images/items/armours/Helldusk Armour.png"
import LeatherArmour from "../../public/images/items/armours/Leather Armour.png"
import ScaleMail_2 from "../../public/images/items/armours/Scale Mail_2.png"

const Armours = [
  {
    armour_class: 11,
    description: 'Description: Dark, messy stains line the armholes of the well-used leather breastplate.',
    id: 1,
    img: LeatherArmour,
    modifiers: null,
    name: 'Leather Armour',
    rarity: 'Common',
    spell: null,
    type: 'Light'
  },
  {
    armour_class: 15,
    description: 'Exotic Material: Add your full Dexterity Modifier to your Armour Class. Additionally, this armour does not impose Disadvantage on Stealth Ability Checks.',
    id: 2,
    img: ScaleMail_2,
    modifiers: null,
    name: 'Yuan Ti Scale Mail',
    rarity: 'Rare',
    spell: null,
    type: 'Medium'
  },
  {
    armour_class: 14,
    description: 'Description: Bhaal, Lord of Murder, was forced to walk the world as a mortal man during a period of history called the Time of Troubles. He was more vulnerable than he had ever been. But Bhaal was cunning. He had contingencies in case he died.&*&Aura of Murder: Enemies within 2m / 6.5ft become Vulnerable to Piercing damage, unless they are Resistant or Immune to it.',
    id: 3,
    img: BhaalistArmour,
    modifiers: null,
    name: 'Bhaalist Armor',
    rarity: 'Very Rare',
    spell: null,
    type: 'Light'
  },
  {
    armour_class: 16,
    description: "Description: Shar's aspect winds its way though the patterns and pauldrons of this half plate, and any light cast nearby seems to almost quiver away from it, afraid. For even the light knows that the clank of this armour is swiftly followed by the Dark Justiciar's silent blade.&*&Shar's Umbrae: While obscured, the wearer has Advantage on Stealth Checks. Additionally, gain advantage on Constitution Saving Throws",
    id: 4,
    img: DarkJusticiarHalfPlate,
    modifiers: null,
    name: 'Dark Justiciar Half Plate',
    rarity: 'Rare',
    spell: "Shar's Aegis",
    type: 'Medium'
  },
  {
    armour_class: 21,
    description: 'Description: Carixim, soul-stuffed forgemaster of hellish Avernus, hammers away ceaselessly at new creations. Questions of morality and destiny do not concern him. Conscience is for his betters. He works with cheer, his swollen skin moaning soothingly.&*&Infernal Retribution: When you succeed a Saving Throw, the caster receives Burning for 3 turns.&*&Prime Aegis of Fire: You have Resistance to Fire damage and cannot be Burned. Additionally, you are considered Proficient with this armor while wearing it and you take 3 less damage from all sources.',
    id: 5,
    img: HellduskArmour,
    modifiers: null,
    name: 'Helldusk Armour',
    rarity: 'Legendary',
    spell: 'Fly',
    type: 'Heavy'
  }
]

export default Armours
