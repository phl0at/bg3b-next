/* eslint-disable */
import { create } from "zustand";

const defaultBuild = {
  id: "new",
  character_name: "Tav",
  origin: 8,
  race: 1,
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
  plus_1: "",
  plus_2: "",
  level: 0,
  armour_class: 10,
  build_classes: {},
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
  raiseAbilityPoints: "RAISE ABILITY POINTS",
  lowerAbilityPoints: "LOWER ABILITY POINTS",
  resetAbilities: "RESET ABILITIES",
  increaseAbility: "INCREASE ABILITY",
  decreaseAbility: "DECREASE ABILITY",
  setBonus: "SET BONUS",
  removeBonus: "REMOVE BONUS",
  setSubClass: "SET SUB CLASS",
  addClass: "ADD CLASS",
  clearClasses: "CLEAR CLASSES",
  addCantrip: "ADD CANTRIP",
  removeCantrip: "REMOVE CANTRIP",
  equipItem: "EQUIP ITEM",
  removeItem: "REMOVE ITEM",
  showMenu: "SHOW MENU",
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
          ? (newState.current.character_name = payload.name)
          : (newState.current.character_name = "Tav");
      }
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.setRace: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.race = payload;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.setBackground: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.background = payload;
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
      newState.current.plus_1 = "";
      newState.current.plus_2 = "";
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
      const bonusAmount = Number(payload.amount.split("_")[1]);

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
      const bonusAmount = Number(payload.amount.split("_")[1]);
      newState.current[payload.amount] = "";
      newState.current[payload.ability] -= bonusAmount;
      return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.equipItem: {
      const newState = { ...state, current: { ...state.current } };
      newState.current[payload.type] = payload.item;
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
      // let newState = {
      //   ...state,
      //   current: {
      //     ...state.current,
      //     build_classes: { ...state.current.build_classes },
      //   },
      // };
      // if (newState.current.build_classes[action.payload.class_id]) {
      //   //If the build has this class, simply increment the classes level
      //   newState.current.build_classes[action.payload.class_id].level++;
      // } else {
      //   //Otherwise, set the class level to 1, set its order, and add it to the build
      //   action.payload.level = 1;
      //   action.payload.order = Object.values(
      //     newState.current.build_classes
      //   ).length;
      //   newState.current.build_classes[action.payload.class_id] =
      //     action.payload;
      // }
      // newState.current.level++;
      // // determines whether the
      // // class has a subclass available at this level
      // // and return either true or false
      // newState.current.build_classes[action.payload.class_id].mustPickSC =
      //   mustPickSC(newState.current.build_classes[action.payload.class_id]);
      // // adds the proper amount of cantrip points
      // // to the build based on the new class/level
      // newState.current.cantripPoints += addCantripPoints(
      //   action.payload.name,
      //   newState.current.level
      // );
      // return newState;
    }
    //!-------------------------------------------------------------------
    //!-------------------------------------------------------------------
    case types.clearClasses: {
      const newState = { ...state };
      newState.current.level = 0;
      newState.current.build_classes = [];
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
          build_classes: { ...state.current.build_classes },
        },
      };
      newState.current.build_classes[payload.class_id] = payload;
      newState.current.build_classes[payload.class_id].mustPickSC = false;
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
      const newState = {...state}
      newState.showMenu = payload
      return newState
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
  builds: new Set(),
  dispatch: (args) => set((state) => reducer(state, args)),
}));
