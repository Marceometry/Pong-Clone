import { ReactNode } from 'react'

export type GameContextData = {
  score: Score
  setScore: (score: Score) => void
  isGameRunning: boolean
  setIsGameRunning: (isRunning: boolean) => void
  start: (
    ballRef: HTMLElement,
    playerPaddleRef: HTMLElement,
    computerPaddleRef: HTMLElement
  ) => void
}

export type GameContextProviderProps = {
  children: ReactNode
}

export type Score = [number, number]
