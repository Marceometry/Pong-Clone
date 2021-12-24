import { useState } from 'react'
import { Score } from '../../utils'
import { GameContext, GameContextProviderProps } from '.'
import { Game } from '@/game'

export function GameProvider({ children }: GameContextProviderProps) {
  const [score, setScore] = useState<Score>([0, 0])
  const [isGameRunning, setIsGameRunning] = useState(false)

  function start(
    ballRef: HTMLDivElement,
    playerPaddleRef: HTMLDivElement,
    computerPaddleRef: HTMLDivElement
  ) {
    const gameConfig = { ballRef, playerPaddleRef, computerPaddleRef, setScore }
    const game = new Game(gameConfig)

    game.start()
    setIsGameRunning(true)
  }

  return (
    <GameContext.Provider value={{ start, score, isGameRunning }}>
      {children}
    </GameContext.Provider>
  )
}
