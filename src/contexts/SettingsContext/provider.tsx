import { useState } from 'react'
import {
  ballVelocityIncreaseModes,
  Settings,
  SettingsContext,
  SettingsProviderProps,
} from '.'

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useState<Settings>({
    ballVelocityIncrease: ballVelocityIncreaseModes.medium,
  })

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
