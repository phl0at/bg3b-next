/* eslint-disable */
import { create } from "zustand";
import { addCantripPoints } from "@/lib/utils";

const defaultBuild = {
  id: "new",
  characterName: "Tav",
  origin: 8,
  race: 1,
  subRace: 0,
  background: 1,
  strength: 8,
  dexterity: 8,
  constitution: 8,
  intelligence: 8,
  wisdom: 8,
  charisma: 8,
  abilityPoints: 27,
  cantrips: {},
  availableCantrips: new Set(),
  cantripPoints: 0,
  plus1: "",
  plus2: "",
  level: 0,
  armourClass: 10,
  classList: {},
};

const types = {
  getBuild: "GET BUILD",
  getAllBuilds: "GET ALL BUILDS",
  setBuildMenu: "SET BUILD MENU",
  setDefault: "SET DEFAULT",
  deleteBuild: "DELETE BUILD",
  importBuild: "IMPORT BUILD",
  setOrigin: "SET ORIGIN",
  setRace: "SET RACE",
  setBackground: "SET BACKGROUND",
  setClass: "SET CLASS",
  raiseAbilityPoints: "RAISE ABILITY POINTS",
  lowerAbilityPoints: "LOWER ABILITY POINTS",
  resetAbilities: "RESET ABILITIES",
  increaseAbility: "INCREASE ABILITY",
  decreaseAbility: "DECREASE ABILITY",
  setBonus: "SET BONUS",
  removeBonus: "REMOVE BONUS",
  addClass: "ADD CLASS",
  clearClasses: "CLEAR CLASSES",
  setSubClass: "SET SUB CLASS",
  addCantrip: "ADD CANTRIP",
  removeCantrip: "REMOVE CANTRIP",
  equipItem: "EQUIP ITEM",
  removeItem: "REMOVE ITEM",
  showMenu: "SHOW MENU",
  showEquipment: "SHOW EQ",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.setDefault: {
      const newState = {
        ...state,
        current: {
          ...defaultBuild,
        },
      };
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.setBuildMenu: {
      const newState = {
        ...state,
        buildMenu: payload,
      };
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.setClass: {
      const newState = {
        ...state,
        selectedClass: payload.id,
      };
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    // case types.getBuild:{}
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    // case types.getAllBuilds:{}
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    // case types.importBuild:{}
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.setOrigin: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.origin = payload.id;
      newState.current.name = payload.name;

      if (payload.name === "Custom") {
        newState.current.race = 1;
        newState.current.background = 1;
      }

      if (payload.name === "Shadowheart") {
        newState.current.race = 7;
        newState.current.background = 1;
      }

      if (payload.name === "Gale") {
        newState.current.race = 4;
        newState.current.background = 9;
      }

      if (payload.name === "Lae'zel") {
        newState.current.race = 5;
        newState.current.background = 10;
      }

      if (payload.name === "Astarion") {
        newState.current.race = 1;
        newState.current.background = 2;
      }

      if (payload.name === "Wyll") {
        newState.current.race = 4;
        newState.current.background = 5;
      }

      if (payload.name === "Karlach") {
        newState.current.race = 2;
        newState.current.background = 8;
      }

      if (payload.name === "The Dark Urge") {
        newState.current.race = 10;
        newState.current.background = 12;
      }

      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.setRace: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.race = payload.id;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.setBackground: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.background = payload.id;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.raiseAbilityPoints: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.abilityPoints += payload;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.lowerAbilityPoints: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.abilityPoints -= payload;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.resetAbilities: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.abilityPoints = 27;
      newState.current.strength = 8;
      newState.current.dexterity = 8;
      newState.current.constitution = 8;
      newState.current.intelligence = 8;
      newState.current.wisdom = 8;
      newState.current.charisma = 8;
      newState.current.plus1 = "";
      newState.current.plus2 = "";
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.increaseAbility: {
      const newState = { ...state, current: { ...state.current } };
      newState.current[payload]++;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.decreaseAbility: {
      const newState = { ...state, current: { ...state.current } };
      newState.current[payload]--;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.setBonus: {
      const newState = { ...state, current: { ...state.current } };
      const existingBonus = newState.current[payload.amount];
      const bonusAmount = Number(payload.amount[payload.amount.length - 1]);

      if (existingBonus) {
        newState.current[existingBonus] -= bonusAmount;
      }
      newState.current[payload.amount] = payload.ability;
      newState.current[payload.ability] += bonusAmount;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.removeBonus: {
      const newState = { ...state, current: { ...state.current } };
      const bonusAmount = Number(payload.amount[payload.amount.length - 1]);
      newState.current[payload.amount] = "";
      newState.current[payload.ability] -= bonusAmount;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.equipItem: {
      const newState = { ...state, current: { ...state.current } };
      newState.current[payload.slot] = payload.item;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.removeItem: {
      const newState = { ...state, current: { ...state.current } };
      delete newState.current[payload];
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.addClass: {
      const newState = {
        ...state,
        current: {
          ...state.current,
          classList: { ...state.current.classList },
        },
      };
      if (newState.current.classList[payload.id]) {
        //If the build has this class, simply increment the classes level
        newState.current.classList[payload.id].level++;
      } else {
        //Otherwise, set the class level to 1, set its order, and add it to the build
        payload.level = 1;
        payload.order = Object.values(newState.current.classList).length;
        newState.current.classList[payload.id] = payload;
      }
      newState.current.level++;

      // adds the proper amount of cantrip points
      // to the build based on the new class/level
      newState.current.cantripPoints += addCantripPoints(
        payload.name,
        newState.current.level
      );
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.clearClasses: {
      const newState = {
        ...state,
        current: {
          ...state.current,
          classList: { ...state.current.classList },
        },
      };
      if (newState.current.classList) {
        for (const key in newState.current.classList)
          delete newState.current.classList[key].subClass;
      }
      newState.current.level = 0;
      newState.current.classList = {};
      newState.current.cantrips = {};
      newState.current.availableCantrips = new Set();
      newState.current.cantripPoints = 0;
      newState.current.magSec = 0;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.setSubClass: {
      const newState = {
        ...state,
        current: {
          ...state.current,
          classList: { ...state.current.classList },
        },
      };
      newState.current.classList[payload.class].subClass = payload.id;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.addCantrip: {
      const newState = {
        ...state,
        current: { ...state.current, cantrips: { ...state.current.cantrips } },
      };
      newState.current.cantrips[payload.id] = payload;
      newState.current.cantripPoints--;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.removeCantrip: {
      const newState = {
        ...state,
        current: { ...state.current, cantrips: { ...state.current.cantrips } },
      };
      delete newState.current.cantrips[payload];
      newState.current.cantripPoints++;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.showMenu: {
      const newState = { ...state };
      newState.showMenu = payload;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.showEquipment: {
      const newState = { ...state };
      newState.showEquipment = payload;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    default:
      return state;
  }
};


const amulets = {
  1: {
    description:
      "First Blood: On a hit, inflict Bleeding upon targets that have maximum Hit Points.",
    id: 1,
    img: "Amulet of Bhaal",
    modifiers: null,
    name: "Amulet of Bhaal",
    rarity: "Legendary",
    spell: null,
  },
  2: {
    description:
      "Description: Gives the wearer advantage with Wisdom Saving Throws. &*& Grants Ability: Shield",
    id: 2,
    img: "Amulet of the Harpers",
    modifiers: null,
    name: "Amulet of the Harpers",
    rarity: "Rare",
    spell: "Shield",
  },
  3: {
    description:
      "Wound Closure: When Downed, automatically stabilize at the start of the turn &*& Potent Healing: Maximize the number of Hit Points restored.",
    id: 3,
    img: "Periapt of Wound Closure",
    modifiers: null,
    name: "Periapt of Wound Closure",
    rarity: "Rare",
    spell: null,
  },
  4: {
    description:
      "Description: Set the wearer's Constitution score to 23. The enchantment has no effect if their Constitution score is higher without it. Additionally, gain Advantage on Constitution Saving Throws.",
    id: 4,
    img: "Amulet of Greater Health",
    modifiers: "constitution=23",
    name: "Amulet of Greater Health",
    rarity: "Very Rare",
    spell: null,
  },
  5: {
    description:
      "High Spellcasting: You gain a 2 bonus to Spell Save DC &*& Godswill: You gain an additional use of Channel Divinity.",
    id: 5,
    img: "Amulet of the Devout",
    modifiers: null,
    name: "Amulet of the Devout",
    rarity: "Very Rare",
    spell: "Godswill",
  },
};

const armours = {
  1: {
    armour_class: 11,
    description:
      "Description: Dark, messy stains line the armholes of the well-used leather breastplate.",
    id: 1,
    img: "Leather Armour",
    modifiers: null,
    name: "Leather Armour",
    rarity: "Common",
    spell: null,
    type: "Light",
  },
  2: {
    armour_class: 15,
    description:
      "Exotic Material: Add your full Dexterity Modifier to your Armour Class. Additionally, this armour does not impose Disadvantage on Stealth Ability Checks.",
    id: 2,
    img: "Scale Mail_2",
    modifiers: null,
    name: "Yuan Ti Scale Mail",
    rarity: "Rare",
    spell: null,
    type: "Medium",
  },
  3: {
    armour_class: 14,
    description:
      "Description: Bhaal, Lord of Murder, was forced to walk the world as a mortal man during a period of history called the Time of Troubles. He was more vulnerable than he had ever been. But Bhaal was cunning. He had contingencies in case he died.&*&Aura of Murder: Enemies within 2m / 6.5ft become Vulnerable to Piercing damage, unless they are Resistant or Immune to it.",
    id: 3,
    img: "Bhaalist Armor",
    modifiers: null,
    name: "Bhaalist Armor",
    rarity: "Very Rare",
    spell: null,
    type: "Light",
  },
  4: {
    armour_class: 16,
    description:
      "Description: Shar's aspect winds its way though the patterns and pauldrons of this half plate, and any light cast nearby seems to almost quiver away from it, afraid. For even the light knows that the clank of this armour is swiftly followed by the Dark Justiciar's silent blade.&*&Shar's Umbrae: While obscured, the wearer has Advantage on Stealth Checks. Additionally, gain advantage on Constitution Saving Throws",
    id: 4,
    img: "Dark Justiciar Half Plate",
    modifiers: null,
    name: "Dark Justiciar Half Plate",
    rarity: "Rare",
    spell: "Shar's Aegis",
    type: "Medium",
  },
  5: {
    armour_class: 21,
    description:
      "Description: Carixim, soul-stuffed forgemaster of hellish Avernus, hammers away ceaselessly at new creations. Questions of morality and destiny do not concern him. Conscience is for his betters. He works with cheer, his swollen skin moaning soothingly.&*&Infernal Retribution: When you succeed a Saving Throw, the caster receives Burning for 3 turns.&*&Prime Aegis of Fire: You have Resistance to Fire damage and cannot be Burned. Additionally, you are considered Proficient with this armor while wearing it and you take 3 less damage from all sources.",
    id: 5,
    img: "Helldusk Armour",
    modifiers: null,
    name: "Helldusk Armour",
    rarity: "Legendary",
    spell: "Fly",
    type: "Heavy",
  },
};

const cloaks = {
  1: {
    description:
      "Description: Grants a +1 bonus to Armor Class and Saving Throw.",
    id: 1,
    img: "Cloak of Protection",
    modifiers: "armour_class+1",
    name: "Cloak of Protection",
    rarity: "Uncommon",
    spell: null,
    type: "Clothing",
  },
  2: {
    description:
      "The Shadow Itself: Once per turn when you kill an enemy, shroud yourself in primaeval darkness to become Invisible for 2 turns.",
    id: 2,
    img: "The Deathstalker Mantle",
    modifiers: null,
    name: "The Deathstalker Mantle",
    rarity: "Rare",
    spell: null,
    type: "Clothing",
  },
  3: {
    description:
      "Stealthy Critical: While Hiding, the number you need to roll a Critical Hit while attacking is reduced by 1. This effect can stack.",
    id: 3,
    img: "Shade Slayer Cloak",
    modifiers: null,
    name: "Shade Slayer Cloak",
    rarity: "Very Rare",
    spell: null,
    type: "Clothing",
  },
  4: {
    description:
      "Flaming Shroud: A creature that damages the wearer within 2m / 7ft receives Burning.",
    id: 4,
    img: "Cindermoth Cloak",
    modifiers: null,
    name: "Cindermoth Cloak",
    rarity: "Uncommon",
    spell: null,
    type: "Clothing",
  },
  5: {
    description:
      "Description: The wearer is perpetually just a little bit damp.",
    id: 5,
    img: "Reverse Rain Cloak",
    modifiers: null,
    name: "Reverse Rain Cloak",
    rarity: "Uncommon",
    spell: null,
    type: "Clothing",
  },
};

const gloves = {
  1: {
    description:
      "Description: Set the wearer's Dexterity score to 18. This enchantment has no effect if their Dexterity is higher without it.",
    id: 1,
    img: "Gloves of Dexterity",
    modifiers: "dexterity=18",
    name: "Gloves of Dexterity",
    rarity: "Very Rare",
    spell: null,
    type: "Clothing",
  },
  2: {
    description:
      "Description: When the Lord of Murder, Bhaal, was rendered mortal, he knew his days were numbered. His vile machinations had gained him many enemies. Those days ran out and Bhaal was indeed killed, not by a god, but by a man with hawkish features named Cyric.&*&        Garrotte: Wrap a shadow rope around a Humanoid creature's throat to deal 1d10 Bludgeoning damage and start Garrotting it (DC 14 Strength saving throw to avoid becoming Garrotted for 3 turns).",
    id: 2,
    img: "Bhaalist Gloves",
    modifiers: null,
    name: "Bhaalist Gloves",
    rarity: "Very Rare",
    spell: "Garrote",
    type: "Clothing",
  },
  3: {
    description:
      "Description: Indents on the fingertips of these gloves are ringed with tiny meteorites, lined in a shimmering purple light rather than the rich red of astral flame.&*&        Craterous Wounds: Whenever you score a Critical Hit, deal an additional 1d6 Force damage.",
    id: 3,
    img: "Craterflesh Gloves",
    modifiers: "damage+1d6&*&Force",
    name: "Craterflesh Gloves",
    rarity: "Rare",
    spell: null,
    type: "Clothing",
  },
  4: {
    description:
      "Description: The grip of darkness is a fear felt by many. The grip of a Dark Justiciar's Gauntlets is a sacred fear reserved for an unfortunate few.&*&        Umbral Attack: Your weapon attacks deal an additional 1d4 Necrotic damage.",
    id: 4,
    img: "Dark Justiciar Gauntlets",
    modifiers: "damage+1d4&*&Necrotic",
    name: "Dark Justiciar Gauntlets",
    rarity: "Uncommon",
    spell: null,
    type: "Clothing",
  },
  5: {
    description:
      "Description: Banded in dark iron, these gloves are embossed with the brass likeness of an elf against a trio of arrows in flight.&*&        Corellon's Guiding Hand: You gain Proficiency with Longbows and Shortbows. Additionally, your ranged weapon attacks deal +2 damage.",
    id: 5,
    img: "Gloves of Archery",
    modifiers: "damage+2",
    name: "Gloves of Archery",
    rarity: "Uncommon",
    spell: null,
    type: "Clothing",
  },
};

const boots = {
  1: {
    description:
      "Description: Shallow, web-like lines have been tooled into these boiled leather boots.",
    id: 1,
    img: "Drow Leather Boots",
    modifiers: null,
    name: "Drow Leather Boots",
    rarity: "Common",
    spell: null,
    type: "Clothing",
  },
  2: {
    description:
      "Description: Peals of thunder rumble at the back of your skull with every step taken in these boots.&*&Arcane Echomalefaction: When the wearer inflicts a condition upon a hostile creature, they also inflict 2 turns of Reverberation.",
    id: 2,
    img: "Boots of Stormy Clamour",
    modifiers: null,
    name: "Boots of Stormy Clamour",
    rarity: "Uncommon",
    spell: null,
    type: "Clothing",
  },
  3: {
    description:
      "Description: Scratched in places, scorched in others, and worn thin at the heel, these boots bear the indelible marks of experience. &*&        Shadow Teleportation: Teleport to an unoccupied, obscured spot.",
    id: 3,
    img: "Dark Justiciar Boots",
    modifiers: null,
    name: "Dark Justiciar Boots",
    rarity: "Rare",
    spell: "Shadow Teleportation",
    type: "Medium",
  },
  4: {
    description:
      "Description: Darker than a starless night, Night Walkers are made for secrecy in the honour of Shar. This particular pair was found deep in the ruins of an Underdark fortress. Though the leather is old and the magic is fading, the boots were recently cleaned and oiled with care.&*&        Night Walker: Can't be Enwebbed, Entangled, or Ensnared and can't slip on Grease or Ice.",
    id: 4,
    img: "Disintegrating Night Walkers",
    modifiers: null,
    name: "Disintegrating Night Walkers",
    rarity: "Very Rare",
    spell: "Misty Step",
    type: "Clothing",
  },
  5: {
    description:
      "Description: 'If I had a copper for all the adventurin folk I seen gutted or cut up, or clawed like they was made of wet paper, just cause they couldn't move quick enough when speed might have saved em... well, I'd be suckin good brandy from crystal rather than this fuckin swill.' - Overheard in a tavern in Baldur's Gate.&*&        Legendary Mobility: You gain Freedom of Movement and Longstrider.",
    id: 5,
    img: "Boots of Persistence",
    modifiers: null,
    name: "Boots of Persistence",
    rarity: "Very Rare",
    spell: "Freedom of Movement&*&Longstrider",
    type: "Medium",
  },
};

const helmets = {
  1: {
    description:
      "Smooth Start: At the start of combat, the wearer gains Momentum for 3 turns.",
    id: 1,
    img: "Haste Helm",
    modifiers: null,
    name: "Haste Helm",
    rarity: "Rare",
    spell: null,
    type: "Clothing",
  },
  3: {
    description:
      "Soul Perception: Gain a +2 bonus to Attack rolls, Initiative Rolls, and Perception Checks.",
    id: 3,
    img: "Mask of Soul Perception",
    modifiers: null,
    name: "Mask of Soul Perception",
    rarity: "Very Rare",
    spell: "Detect Thoughts",
    type: "Clothing",
  },
  4: {
    description:
      "Hunter's Eye: You gain a +1d4 bonus to Attack rolls against creatures marked by Hunter's Mark, True Strike, Faerie Fire, or Guiding Bolt.",
    id: 4,
    img: "Tiara Grey",
    modifiers: null,
    name: "Circlet of Hunting",
    rarity: "Very Rare",
    spell: null,
    type: "Clothing",
  },
  2: {
    description:
      "Synergetic Moments: When you inflict a condition, gain Arcane Synergy for 2 turns.",
    id: 2,
    img: "Diadem of Arcane Synergy",
    modifiers: null,
    name: "Diadem of Arcane Synergy",
    rarity: "Rare",
    spell: null,
    type: "Clothing",
  },
};

const rings = {
  1: {
    description:
      "Malefic Excretion: Your weapon attacks also deal 2 Acid damage.",
    id: 1,
    img: "Caustic Band",
    modifiers: "damage+2&*&Acid",
    name: "Caustic Band",
    rarity: "Very Rare",
    spell: null,
  },
  2: {
    description:
      "Callous Glow: The wearer deals an additional 2 points of Radiant damage against creatures that are illuminated.",
    id: 2,
    img: "Callous Glow Ring",
    modifiers: "damage+2&*&Radiant",
    name: "Callous Glow Ring",
    rarity: "Uncommon",
    spell: null,
  },
  3: {
    description:
      "Executioner: When you kill a creature, your next Attack roll will be a Critical Hit. This can only happen once per long rest.",
    id: 3,
    img: "Gold Black Ring",
    modifiers: null,
    name: "Killer's Sweetheart",
    rarity: "Very Rare",
    spell: "Executioner",
  },
  4: {
    description:
      "Synergetic Cantrip: When you deal damage with a Cantrip, you gain Arcane Synergy for 2 turns.",
    id: 4,
    img: "Ring of Arcane Synergy",
    modifiers: "Arcane Synergy",
    name: "Ring of Arcane Synergy",
    rarity: "Rare",
    spell: null,
  },
  5: {
    description:
      "Unwavering: You ignore the effects of Difficult Terrain, and cannot be Paralyzed or Restrained.",
    id: 5,
    img: "Ring of Free Action",
    modifiers: null,
    name: "Ring of Free Action",
    rarity: "Rare",
    spell: null,
  },
};

const weapons = {
  1: {
    damage: "1d4",
    damage_bonus: 0,
    damage_mod: "Strength",
    damage_type: "Bludgeoning",
    description: "Splinters of a Giant's Might: Increase Strength to 19.",
    id: 1,
    img: "Club_1",
    modifiers: "strength=19",
    name: "Club of Hill Giant Strength",
    range: "Melee",
    rarity: "Uncommon",
    spell: null,
    type: "Club",
  },
  2: {
    damage: "1d4",
    damage_bonus: 1,
    damage_mod: "Dexterity",
    damage_type: "Piercing",
    description:
      "Deathly Slumber: Deals an additional 1d4 Necrotic damage to creatures that are Knocked out or Sleeping.",
    id: 2,
    img: "Dagger_1",
    modifiers: null,
    name: "Assassin's Touch",
    range: "Melee",
    rarity: "Uncommon",
    spell: null,
    type: "Dagger",
  },
  3: {
    damage: "1d8",
    damage_bonus: 1,
    damage_mod: "Dexterity&*&Strength",
    damage_type: "Piercing",
    description:
      "Titan Weapon: This weapon deals additional damage equal to your Strength Modifier.",
    id: 3,
    img: "Longbow_2",
    modifiers: null,
    name: "Titanstring Bow",
    range: "Ranged",
    rarity: "Rare",
    spell: null,
    type: "Longbow",
  },
  4: {
    damage: "1d6",
    damage_bonus: 2,
    damage_mod: "Dexterity***Strength",
    damage_type: "Piercing",
    description:
      "Description: Snatched from the realm of the mad wizard Halaster Blackoak, this knife became a prized keepsake of a duergar king.&*&        Organ Rearranger: Reduce the number you need to roll a Critical Hit while attacking by 1. When you roll 2 damage or less, reroll the dice, taking the highest result &*& Shadow Blade: You have Advantage on Attack rolls against Lightly or Heavily Obscured targets when using this blade.",
    id: 4,
    img: "Knife of the Undermountain King",
    modifiers: null,
    name: "Knife of the Undermountain King",
    range: "Melee",
    rarity: "Very Rare",
    spell: null,
    type: "Shortsword",
  },
  5: {
    damage: "2d6",
    damage_bonus: 3,
    damage_mod: "Strength",
    damage_type: "Slashing",
    description:
      "Description: Wielded by Balduran, the founder of Baldur's Gate and friend to his guardian dragon, a great glittering wyrm called Ansur. Fellowship can be undone, though, as easily as you or I might unlace the strings of our shoes, and it was in a time of skullduggery and hardship that Balduran killed Ansur, carrying out the deed with this sword.&*&        Giantslayer: On a hit, double the damage from your Strength modifier. This weapon grants you Advantage on Attack rolls against Large, Huge or Gargantuan creatures.",
    id: 5,
    img: "Giantslayer",
    modifiers: null,
    name: "Balduran's Giantslayer",
    range: "Melee",
    rarity: "Legendary",
    spell: null,
    type: "Greatsword",
  },
  6: {
    damage: "1d4",
    damage_bonus: 0,
    damage_mod: "Dexterity***Strength",
    damage_type: "Piercing",
    description:
      "Description: Fecund and revolting, the Abyss is not the worst place this has been.",
    id: 6,
    img: "Dagger_2",
    modifiers: null,
    name: "Poo Scraper",
    range: "Melee",
    rarity: "Common",
    spell: null,
    type: "Dagger",
  },
  7: {
    damage: "1d8",
    damage_bonus: 3,
    damage_mod: "Dexterity",
    damage_type: "Piercing",
    description:
      "Description: Gontr Mael blasted from the corpse of the Steelwatcher Titan: a bow formed from the boiling slag and weird whispering gyros inherent to the mechanical giant. It must have acted as the Titan's abdomen, exchanging muscle for immaculate steel.&*&        Promised Victory: On a hit, possibly inflict Guiding Bolt upon the target &*& Gontr Mael: This object shines with a glowing light radius of 6m / 20ft.",
    id: 7,
    img: "Gontr Mael",
    modifiers: null,
    name: "Gontr Mael",
    range: "Ranged",
    rarity: "Legendary",
    spell: "Haste",
    type: "Longbow",
  },
  8: {
    damage: "1d6",
    damage_bonus: 2,
    damage_mod: "Dexterity",
    damage_type: "Piercing",
    description:
      "Description: Rigged to draw on the skin-peeling hellfire of Avernus by a resourceful devil, this crossbow's size is no indication of its deadly potential.&*&        Hellstalker: Possibly inflict Burning when attacking while Hiding or Invisible.",
    id: 8,
    img: "Hand Crossbow_1",
    modifiers: null,
    name: "Hellfire Hand Crossbow",
    range: "Ranged",
    rarity: "Very Rare",
    spell: "Scorching Ray",
    type: "Hand Crossbow",
  },
  9: {
    damage: "1d6",
    damage_bonus: 1,
    damage_mod: "Dexterity",
    damage_type: "Force",
    description:
      "Description: On the stock, the crafter of this crossbow etched in tiny print: 'Ifn yer gonna miss, why dontchyae stop being a wally, and hit instead!'&*&Damage Type: Attacks with this weapon deal Force damage.",
    id: 9,
    img: "Hand Crossbow_1",
    modifiers: null,
    name: "Ne'er Misser",
    range: "Ranged",
    rarity: "Rare",
    spell: "Magic Missile",
    type: "Hand Crossbow",
  },
  10: {
    damage: "1d6",
    damage_bonus: 1,
    damage_mod: "Dexterity",
    damage_type: "Piercing",
    description:
      "Description: Conducting a series of increasingly sick rituals - involving the ashes of a gnome and silkworms fed fat on the corpse of a dwarven cleric - the goblin shaman Kirruk Redrats created this deadly bow.&*&        Blightbringer: Attacking Gnomes or Dwarves with this weapon receives a 1d4 bonus to Attack and Damage rolls &*& Prey Decelerator: When this weapon lands a Critical Hit, it also Slows the target.",
    id: 10,
    img: "Shortbow_1",
    modifiers: "Blightbringer",
    name: "Blightbringer",
    range: "Ranged",
    rarity: "Very Rare",
    spell: "Prey Decelerator",
    type: "Shortbow",
  },
};

export const useStore = create((set) => ({
  current: {
    ...defaultBuild,
  },
  amulets,
  armours,
  gloves,
  helmets,
  boots,
  rings,
  weapons,
  showMenu: false,
  showEquipment: "current",
  selectedClass: 1,
  buildMenu: "Origins",
  builds: new Set(),
  dispatch: (args) => set((state) => reducer(state, args)),
}));
