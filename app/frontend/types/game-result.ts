import {Player} from "./player";

export type GameResult = {
    rounds: number;
    card_count: number;
    players: Player[];
}