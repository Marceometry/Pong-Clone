import { Score } from '@/utils'

export type GameConstructor = {
  ballRef: HTMLDivElement
  playerPaddleRef: HTMLDivElement
  computerPaddleRef: HTMLDivElement
  setScore: (score: Score) => void
}
