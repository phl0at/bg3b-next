import CindermothCloak from "../../../public/images/items/cloaks/Cindermoth Cloak.png"
import CloakOfProtection from "../../../public/images/items/cloaks/Cloak of Protection.png"
import ReverseRainCloak from "../../../public/images/items/cloaks/Reverse Rain Cloak.png"
import ShadeSlayerCloak from "../../../public/images/items/cloaks/Shade Slayer Cloak.png"
import DeathstalkerMantle from "../../../public/images/items/cloaks/The Deathstalker Mantle.png"

const Cloaks = {
  1: {
    description: 'Description: Grants a +1 bonus to Armor Class and Saving Throw.',
    id: 1,
    img: CloakOfProtection,
    modifiers: 'armour_class+1',
    name: 'Cloak of Protection',
    rarity: 'Uncommon',
    spell: null,
    type: 'Clothing'
  },
  2: {
    description: 'The Shadow Itself: Once per turn when you kill an enemy, shroud yourself in primaeval darkness to become Invisible for 2 turns.',
    id: 2,
    img: DeathstalkerMantle,
    modifiers: null,
    name: 'The Deathstalker Mantle',
    rarity: 'Rare',
    spell: null,
    type: 'Clothing'
  },
  3: {
    description: 'Stealthy Critical: While Hiding, the number you need to roll a Critical Hit while attacking is reduced by 1. This effect can stack.',
    id: 3,
    img: ShadeSlayerCloak,
    modifiers: null,
    name: 'Shade Slayer Cloak',
    rarity: 'Very Rare',
    spell: null,
    type: 'Clothing'
  },
  4: {
    description: 'Flaming Shroud: A creature that damages the wearer within 2m / 7ft receives Burning.',
    id: 4,
    img: CindermothCloak,
    modifiers: null,
    name: 'Cindermoth Cloak',
    rarity: 'Uncommon',
    spell: null,
    type: 'Clothing'
  },
  5: {
    description: 'Description: The wearer is perpetually just a little bit damp.',
    id: 5,
    img: ReverseRainCloak,
    modifiers: null,
    name: 'Reverse Rain Cloak',
    rarity: 'Uncommon',
    spell: null,
    type: 'Clothing'
  }
}

export default Cloaks
