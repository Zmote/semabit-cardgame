import { ChangeEvent, MouseEvent, useCallback, useState } from 'react'

import { CardService } from '@/features/games/card/services/card'
import { GameConfig, GameMode, GameModeType, GameResult as Result } from '@/features/games/card/types/card'

// TODO: could be further optimized with reducers
export function useCardGame() {
  const [loading, setLoading] = useState<boolean>(false)
  const [gameConfig, setGameConfig] = useState<GameConfig>(() => {
    return { card_count: 5, player_count: 4, mode: GameMode.random }
  })
  const [gameResult, setGameResult] = useState<Result>()
  const handleModeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setGameConfig({
      ...gameConfig,
      mode: e.target.value as GameModeType,
    })
  }, [gameConfig])

  const handleCardCountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setGameConfig({
      ...gameConfig,
      card_count: Number(e.target.value),
    })
  }, [gameConfig])

  const handlePlayerCountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setGameConfig({
      ...gameConfig,
      player_count: Number(e.target.value),
    })
  }, [gameConfig])

  const simulateGameHandler = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    CardService.simulateGame(gameConfig)
      .then((result: Result) => {
        setGameResult(result)
      }).catch((err: Error) => {
        console.error(err)
      }).then(() => {
        setLoading(false)
      })
  }, [gameConfig])

  return {
    loading,
    gameConfig,
    gameResult,
    handleCardCountChange,
    handlePlayerCountChange,
    handleModeChange,
    simulateGameHandler,
  }
}
