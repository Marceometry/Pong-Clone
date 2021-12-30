import { useState } from 'react'
import {
  ballVelocityIncreaseModesKeys,
  Settings,
  SettingsContext,
  SettingsProviderProps,
} from '.'

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useState<Settings>({
    ballVelocityIncrease: ballVelocityIncreaseModesKeys.MEDIUM,
  })

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
