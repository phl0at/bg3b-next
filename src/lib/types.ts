/* eslint-disable */
type User = {
  id: number;
  username: string;
};
type Build = {
  id: number;
  name: string;
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
