import { ReactNode } from 'react'

export type BallVelocityIncreaseModeKey = 'slow' | 'medium' | 'fast' | 'insane'

export type BallVelocityIncreaseModesKeys = {
  SLOW: 'slow'
  MEDIUM: 'medium'
  FAST: 'fast'
  INSANE: 'insane'
}

export type BallVelocityIncreaseModes = {
  slow: number
  medium: number
  fast: number
  insane: number
}

export type Settings = {
  ballVelocityIncrease: BallVelocityIncreaseModeKey
  paddleSize: number
  colorScheme: {
    isRainbow: boolean
    hueColor: string
  }
}

export type SettingsContextData = {
  settings: Settings
  setSettings: React.Dispatch<React.SetStateAction<Settings>>
  handleRainbowBackground: () => void
  cancelRainbowBackground: () => void
}

export type SettingsProviderProps = {
  children: ReactNode
}
