export type Player = {
    id: number;
    name: string;
    cards_remaining: number;
}

export interface GameConfig {
    card_count: number;
    player_count: number;
}

export type GameResult = {
    rounds: number;
    card_count: number;
    players: Player[];
}