import { useState } from 'react'
import { Game, GameOptions } from '@/game'
import { GameContext, GameContextProviderProps, GameState } from '.'

export function GameProvider({ children }: GameContextProviderProps) {
  const [gameState, setGameState] = useState<GameState>({
    isGameRunning: false,
    score: [0, 0],
  })

  const game = new Game(setGameState)

  function setUp(
    ballRef: HTMLDivElement,
    playerPaddleRef: HTMLDivElement,
    computerPaddleRef: HTMLDivElement,
    options: GameOptions
  ) {
    game.setUp({ ballRef, playerPaddleRef, computerPaddleRef, options })

    setGameState((prevState) => ({
      ...prevState,
      isGameRunning: true,
    }))
  }

  function start() {
    game.start()
  }

  return (
    <GameContext.Provider value={{ setUp, start, gameState }}>
      {children}
    </GameContext.Provider>
  )
}
