export interface RespFeed {
  info: Info;
  results: FeedItemType[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface FeedItemType {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = 'Alien',
  Animal = 'Animal',
  Human = 'Human',
  MythologicalCreature = 'Mythological Creature',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
