import { StaticImageData } from "next/image";

/* eslint-disable */
export type Build = {
  id: number | string;
  authorId: string;
  abilityPoints: number;
  armourClass: number;
  availableCantrips?: Set<Cantrip>;
  background: number;
  classList: Class[];
  cantripPoints: number;
  cantrips: Cantrip[];
  characterName: string;
  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
  wisdom: number;
  level: number;
  origin: number;
  plus1: string;
  plus2: string;
  race: number;
  subRace: number;
  magSec?: number;
  helmet: Helmet;
  cloak: Cloak;
  amulet: Amulet;
  armour: Armour;
  gloves: Glove;
  ring1: Ring;
  ring2: Ring;
  boots: Boot;
  meleeMH: Weapon;
  meleeOH?: Weapon;
  rangedMH: Weapon;
  rangedOH?: Weapon;
};
export type Origin = {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
};
export type Race = {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
};
export type SubRace = {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
};
export type Background = {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
};
export type Class = {
  id: number;
  name: string;
  description: string;
  modifier: string;
  img: StaticImageData;
};
export type AddedClass = {
  id: number;
  buildId: number;
  classId: number;
  name: string;
  subClass: SubClass | null;
  level: number;
  levelsAdded: string
  modifier: string;
  order: number;
};
export type SubClass = {
  class: number;
  id: number;
  level: number;
  name: string;
  description: string;
  img: StaticImageData;
};
export type Cantrip = {
  id: number;
  attackSave?: string;
  concentration?: boolean;
  damage?: string;
  damageType?: string;
  description: string;
  duration: number;
  name: string;
  radius?: number;
  range?: number;
  school: string;
  img: StaticImageData;
};
export type Helmet = {
  id: number;
  description: string;
  modifiers: string | null;
  name: string;
  rarity: string;
  spell: string | null;
  type: string;
  damage?: string;
  damage_bonus?: number;
  damage_mod?: string;
  damage_type?: string;
  range?: string;
  img: StaticImageData;
};
export type Cloak = {
  id: number;
  description: string;
  modifiers: string | null;
  name: string;
  rarity: string;
  spell: string | null;
  type?: string;
  damage?: string;
  damage_bonus?: number;
  damage_mod?: string;
  damage_type?: string;
  range?: string;
  img: StaticImageData;
};
export type Amulet = {
  id: number;
  description: string;
  modifiers: string | null;
  name: string;
  rarity: string;
  spell: string | null;
  type?: string;
  damage?: string;
  damage_bonus?: number;
  damage_mod?: string;
  damage_type?: string;
  range?: string;
  img: StaticImageData;
};
export type Armour = {
  id: number;
  description: string;
  armour_class: number;
  modifiers: string | null;
  name: string;
  rarity: string;
  spell: string | null;
  type: string;
  damage?: string;
  damage_bonus?: number;
  damage_mod?: string;
  damage_type?: string;
  range?: string;
  img: StaticImageData;
};
export type Glove = {
  id: number;
  description: string;
  modifiers: string | null;
  name: string;
  rarity: string;
  spell: string | null;
  type: string;
  damage?: string;
  damage_bonus?: number;
  damage_mod?: string;
  damage_type?: string;
  range?: string;
  img: StaticImageData;
};
export type Ring = {
  id: number;
  description: string;
  modifiers: string | null;
  name: string;
  rarity: string;
  spell: string | null;
  type?: string;
  damage?: string;
  damage_bonus?: number;
  damage_mod?: string;
  damage_type?: string;
  range?: string;
  img: StaticImageData;
};
export type Boot = {
  id: number;
  description: string;
  modifiers: string | null;
  name: string;
  rarity: string;
  spell: string | null;
  type: string;
  damage?: string;
  damage_bonus?: number;
  damage_mod?: string;
  damage_type?: string;
  range?: string;
  img: StaticImageData;
};
export type Weapon = {
  id: number;
  description: string;
  damage: string;
  damage_bonus: number;
  damage_mod: string;
  damage_type: string;
  range: string;
  modifiers: string;
  name: string;
  rarity: string;
  spell: string;
  type: string;
  img: StaticImageData;
};
export type ItemData =
  | Helmet[]
  | Cloak[]
  | Amulet[]
  | Armour[]
  | Glove[]
  | Ring[]
  | Boot[]
  | Weapon[];

export type SomeItem = Helmet | Cloak | Amulet | Armour | Glove | Ring | Boot | Weapon;
/* eslint-disable */
