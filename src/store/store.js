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
  viewItem: "VIEW ITEM",
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
      if (payload.id && payload.name) {
        newState.current.origin = payload.id;
        payload.id != 8
          ? (newState.current.characterName = payload.name)
          : (newState.current.characterName = "Tav");
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
    case types.viewItem: {
      const newState = { ...state };
      newState.viewItem = payload;
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
      const newState = { ...state };
      newState.current.level = 0;
      newState.current.classList = [];
      newState.current.cantrips = [];
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
      newState.current.classList[payload.class] = payload.id;
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

export const useStore = create((set) => ({
  current: {
    ...defaultBuild,
  },
  showMenu: false,
  showEquipment: "current",
  selectedClass: 1,
  builds: new Set(),
  dispatch: (args) => set((state) => reducer(state, args)),
}));
