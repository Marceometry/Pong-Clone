import { ReactNode } from 'react'
import { GameProvider } from './contexts'

export type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <GameProvider>{children}</GameProvider>
}
