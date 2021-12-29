import { GameState } from '@/contexts'

export type GameConstructor = React.Dispatch<React.SetStateAction<GameState>>

export type GameSetUp = {
  ballRef: HTMLDivElement
  playerPaddleRef: HTMLDivElement
  computerPaddleRef: HTMLDivElement
  options?: GameOptions
}

export type GameOptions = {
  isWatch?: boolean
  isFixedVelocity?: boolean
  gameStartTimer?: number
}
