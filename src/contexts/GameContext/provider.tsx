import { useRef, useState } from 'react'
import { Game, GameOptions } from '@/game'
import { GameContext, GameContextProviderProps, GameState } from '.'
import { useSettings } from '..'

export function GameProvider({ children }: GameContextProviderProps) {
  const { settings } = useSettings()

  const [gameState, setGameState] = useState<GameState>({
    isGameRunning: false,
    score: [0, 0],
  })
  const game = useRef<Game>(new Game(setGameState))

  function setUp(
    ballRef: HTMLDivElement,
    playerPaddleRef: HTMLDivElement,
    computerPaddleRef: HTMLDivElement,
    options: GameOptions
  ) {
    const fullOptions = {
      ...options,
      ballVelocityIncrease: settings.ballVelocityIncrease,
    }

    game.current.setUp({
      ballRef,
      playerPaddleRef,
      computerPaddleRef,
      options: fullOptions,
    })

    setGameState((prevState) => ({
      ...prevState,
      isGameRunning: true,
    }))
  }

  function start() {
    game.current.start()
  }

  return (
    <GameContext.Provider value={{ setUp, start, gameState }}>
      {children}
    </GameContext.Provider>
  )
}
