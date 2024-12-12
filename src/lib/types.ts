/* eslint-disable */
type User = {
  id: number;
  username: string;
};
type Build = {
  id: number | string;
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
  level: number;
  origin: number;
  plus1: string;
  plus2: string;
  race: number;
  subRace: number;
  strength: number;
  wisdom: number;
  magSec?: number;
};
type Origin = {
  id: number;
  name: string;
  description: string;
};
type Race = {
  id: number;
  name: string;
  description: string;
};
type SubRace = {
  id: number;
  name: string;
  description: string;
};
type Background = {
  id: number;
  name: string;
  description: string;
};
type Class = {
  id: number;
  name: string;
  description: string;
  modifier: string;
  subClass: number;
  order: number;
  level: number;
};
type SubClass = {
  class: number;
  id: number;
  level: number;
  name: string;
  description: string;
};
type Cantrip = {
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
};
/* eslint-disable */
