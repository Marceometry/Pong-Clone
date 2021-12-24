import { ReactNode } from 'react'
import { Score } from '../../utils/types'

export type GameContextData = {
  score: Score
  setScore: (score: Score) => void
  isGameRunning: boolean
  setIsGameRunning: (isRunning: boolean) => void
  start: (
    ballRef: HTMLDivElement,
    playerPaddleRef: HTMLDivElement,
    computerPaddleRef: HTMLDivElement
  ) => void
}

export type GameContextProviderProps = {
  children: ReactNode
}
