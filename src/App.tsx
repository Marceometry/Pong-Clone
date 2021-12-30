import { useRef, useEffect } from 'react'
import { setHueColor } from './utils'
import { Router } from './router'
import './styles/main.css'
import { SettingsProvider } from './contexts'

export function App() {
  const animationId = useRef(0)

  useEffect(() => {
    window.requestAnimationFrame(handleHueColor)

    return () => {
      window.cancelAnimationFrame(animationId.current)
    }
  }, [])

  function handleHueColor() {
    setHueColor(20)
    animationId.current = window.requestAnimationFrame(handleHueColor)
  }

  return (
    <SettingsProvider>
      <Router />
    </SettingsProvider>
  )
}
