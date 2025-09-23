import { csrfToken } from '@/services/api'

import { GameConfig } from '../types/card'

export const CardService = {
  simulateGame: (gameConfig: GameConfig) => fetch('/api/v1/games/cards/simulate', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': csrfToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(gameConfig),
  }).then(res => res.json()),
}
