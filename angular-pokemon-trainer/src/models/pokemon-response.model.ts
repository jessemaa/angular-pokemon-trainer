import { Pokemon } from "./Pokemon";

export interface PokemonResponse {
    next: string,
    count: number,
    prev: string,
    results: Pokemon[];
}