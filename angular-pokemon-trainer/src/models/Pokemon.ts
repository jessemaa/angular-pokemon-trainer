export interface Pokemon { 
    id?: number;
    name: string;
    url: string;
    image?: string;
    weight?: number;
    types?: PokemonType[];
    stats?: PokemonStat[];
    sprites?: any[];
}
export interface PokemonType {
  slot: number;
  type: PokemonTypeType;
}
export interface PokemonTypeType {
  name: string;
  url: string;
}
export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonStatStat;
}

export interface PokemonStatStat {
  name: string;
  url: string;
}

export interface PokemonSprite {
  front_default: string;
}