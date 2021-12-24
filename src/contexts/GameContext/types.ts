import { ReactNode } from 'react'
import { Score } from '../../utils/types'

export type GameContextData = {
  score: Score
  isGameRunning: boolean
  start: (
    ballRef: HTMLDivElement,
    playerPaddleRef: HTMLDivElement,
    computerPaddleRef: HTMLDivElement
  ) => void
}

export type GameContextProviderProps = {
  children: ReactNode
}
