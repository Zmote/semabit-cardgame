export type Card = {
  color: string
}
export type Player = {
  id: number
  name: string
  cards_remaining: number
  open_cards: Card[]
}

export const GameMode = {
  random: 'random' as const,
  unique: 'unique' as const,
}

export type GameModeType = typeof GameMode[keyof typeof GameMode]

export interface GameConfig {
  card_count: number
  player_count: number
  mode: typeof GameMode.random | typeof GameMode.unique
}

export type GameResult = {
  rounds: number
  card_count: number
  players: Player[]
}
