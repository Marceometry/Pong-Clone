import { GameState } from '@/contexts'

export type GameConstructor = React.Dispatch<React.SetStateAction<GameState>>

export type GameSetUp = {
  ballRef: HTMLDivElement
  playerPaddleRef: HTMLDivElement
  computerPaddleRef: HTMLDivElement
  options?: GameOptions
}

export type GameOptions = {
  gameMode?: GameMode
  isFixedVelocity?: boolean
  ballVelocityIncrease?: number
  paddleSize?: number
  gameStartTimer?: number
}

export type GameMode = 'single' | 'multiplayer' | 'watch'

export const gameModes: GameMode[] = ['single', 'multiplayer', 'watch']
