import { useEffect, useRef, useState } from 'react'
import { getHueColor, setRainbowBackground } from '@/utils'
import {
  ballVelocityIncreaseModesKeys,
  Settings,
  SettingsContext,
  SettingsProviderProps,
} from '.'

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useState<Settings>({
    ballVelocityIncrease: ballVelocityIncreaseModesKeys.MEDIUM,
    hueColor: getHueColor(),
  })
  const animationId = useRef(0)

  useEffect(() => {
    window.requestAnimationFrame(handleRainbowBackground)

    return () => {
      window.cancelAnimationFrame(animationId.current)
    }
  }, [])

  function handleRainbowBackground() {
    setRainbowBackground()
    animationId.current = window.requestAnimationFrame(handleRainbowBackground)
  }

  function cancelRainbowBackground() {
    window.cancelAnimationFrame(animationId.current)
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
        handleRainbowBackground,
        cancelRainbowBackground,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
