import { ReactNode } from 'react'

export type BallVelocityIncreaseModes = {
  slow: number
  medium: number
  fast: number
  insane: number
}

export type Settings = {
  ballVelocityIncrease: number
}

export type SettingsContextData = {
  settings: Settings
  setSettings: React.Dispatch<React.SetStateAction<Settings>>
}

export type SettingsProviderProps = {
  children: ReactNode
}
