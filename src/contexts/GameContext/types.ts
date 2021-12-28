import { ReactNode } from 'react'
import { Score } from '@/utils'

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
    isWatch: boolean
  ) => void
}

export type GameContextProviderProps = {
  children: ReactNode
}
