import { ReactNode, useEffect, useRef } from 'react'
import { GameProvider } from './contexts'
import { setHueColor } from './utils'

export type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
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

  return <GameProvider>{children}</GameProvider>
}
