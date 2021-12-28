import { ReactNode } from 'react'
import { Score } from '@/utils'
import { GameOptions } from '@/game'

export type GameState = {
  isGameRunning: boolean
  score: Score
}

export type GameContextData = {
  gameState: GameState
  start: () => void
  setUp: (
    ballRef: HTMLDivElement,
    playerPaddleRef: HTMLDivElement,
    computerPaddleRef: HTMLDivElement,
    options: GameOptions
  ) => void
}

export type GameContextProviderProps = {
  children: ReactNode
}
