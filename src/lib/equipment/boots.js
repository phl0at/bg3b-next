import BootsOfPersistence from "../../../public/images/items/boots/Boots of Persistence.png"
import BootsOfStormyClamour from "../../../public/images/items/boots/Boots of Stormy Clamour.png"
import DarkJusticiarBoots from "../../../public/images/items/boots/Dark Justiciar Boots.png"
import DisintegratingNightWalkers from "../../../public/images/items/boots/Disintegrating Night Walkers.png"
import DrowLeatherBoots from "../../../public/images/items/boots/Drow Leather Boots.png"

const Boots = {
  1: {
    description: 'Description: Shallow, web-like lines have been tooled into these boiled leather boots.',
    id: 1,
    img: DrowLeatherBoots,
    modifiers: null,
    name: 'Drow Leather Boots',
    rarity: 'Common',
    spell: null,
    type: 'Clothing'
  },
  2: {
    description: 'Description: Peals of thunder rumble at the back of your skull with every step taken in these boots.&*&Arcane Echomalefaction: When the wearer inflicts a condition upon a hostile creature, they also inflict 2 turns of Reverberation.',
    id: 2,
    img: BootsOfStormyClamour,
    modifiers: null,
    name: 'Boots of Stormy Clamour',
    rarity: 'Uncommon',
    spell: null,
    type: 'Clothing'
  },
  3: {
    description: 'Description: Scratched in places, scorched in others, and worn thin at the heel, these boots bear the indelible marks of experience. &*&        Shadow Teleportation: Teleport to an unoccupied, obscured spot.',
    id: 3,
    img: DarkJusticiarBoots,
    modifiers: null,
    name: 'Dark Justiciar Boots',
    rarity: 'Rare',
    spell: 'Shadow Teleportation',
    type: 'Medium'
  },
  4: {
    description: "Description: Darker than a starless night, Night Walkers are made for secrecy in the honour of Shar. This particular pair was found deep in the ruins of an Underdark fortress. Though the leather is old and the magic is fading, the boots were recently cleaned and oiled with care.&*&        Night Walker: Can't be Enwebbed, Entangled, or Ensnared and can't slip on Grease or Ice.",
    id: 4,
    img: DisintegratingNightWalkers,
    modifiers: null,
    name: 'Disintegrating Night Walkers',
    rarity: 'Very Rare',
    spell: 'Misty Step',
    type: 'Clothing'
  },
  5: {
    description: "Description: 'If I had a copper for all the adventurin folk I seen gutted or cut up, or clawed like they was made of wet paper, just cause they couldn't move quick enough when speed might have saved em... well, I'd be suckin good brandy from crystal rather than this fuckin swill.' - Overheard in a tavern in Baldur's Gate.&*&        Legendary Mobility: You gain Freedom of Movement and Longstrider.",
    id: 5,
    img: BootsOfPersistence,
    modifiers: null,
    name: 'Boots of Persistence',
    rarity: 'Very Rare',
    spell: 'Freedom of Movement&*&Longstrider',
    type: 'Medium'
  }
}

export default Boots
