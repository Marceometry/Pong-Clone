import { ReactNode } from 'react'
import { GameContextProvider } from './contexts'

export type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <GameContextProvider>{children}</GameContextProvider>
}
