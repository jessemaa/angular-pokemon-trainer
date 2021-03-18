import { Pokemon } from "./Pokemon";

export interface Trainer {
    id: number,
    name: string,
    pokemon: Pokemon[];
}