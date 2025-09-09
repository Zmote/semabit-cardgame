import {GameConfig} from "types/game-config";

export const GameCardService = {
    simulateGame: (gameConfig: GameConfig, token: string) => fetch('/api/v1/games/card_game', {
        method: 'POST',
        headers: {
            'X-CSRF-Token': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(gameConfig)
    }).then(res => res.json())
}