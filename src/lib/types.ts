/* eslint-disable */
type User = {
  id: number;
  username: string;
};
type Build = {
  id: number | string;
  abilityPoints: number;
  armour_class: number;
  availableCantrips?: Set<Cantrip>;
  background: number;
  build_classes: Class[];
  cantripPoints: number;
  cantrips: Cantrip[];
  character_name: string;
  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  level: number;
  origin: number;
  plus_1: string;
  plus_2: string;
  race: number;
  strength: number;
  wisdom: number;
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
  sub_class?: string;
};
type SubClass = {
  name: string;
  description: string;
};
type Cantrip = {
  id: number;
  attack_save?: string;
  concentration?: boolean;
  damage?: string;
  damage_type?: string;
  description: string;
  duration: number;
  name: string;
  radius?: number;
  range?: number;
  school: string;
};

/* eslint-disable */
