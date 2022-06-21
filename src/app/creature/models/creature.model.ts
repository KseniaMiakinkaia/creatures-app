export interface Creature {
    name: string;
	height: string;
	mass: string;
	birth_year: string;
}

export interface CreatureResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Creature[];
}