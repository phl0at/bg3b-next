import { create } from "zustand";

export const useStore = create<Build>((set) => ({
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
    cantrips: [],
    availableCantrips: new Set(),
    cantripPoints: 0,
    plus_1: "",
    plus_2: "",
    level: 0,
    armour_class: 10,
    build_classes: [],
  }))
