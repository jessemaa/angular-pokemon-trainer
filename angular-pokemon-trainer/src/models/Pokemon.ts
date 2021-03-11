export interface Pokemon { 
    id: number;
    abilities: Array<any>;
    name: string;
    height: number
    weight: number;
    moves: Array<any>;
    sprites: object;
    base_experience: number;
    stats: Array<any>;
    types: Array<any>;
  }