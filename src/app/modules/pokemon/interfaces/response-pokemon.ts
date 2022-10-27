export interface ResponsePokemon<T> {
    count: number;
    next: string;
    previous: string;
    results: T
}
