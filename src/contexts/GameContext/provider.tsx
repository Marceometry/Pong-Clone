import { ReactNode, useState } from 'react'
import { GameContext } from '.'

export type GameContextProviderProps = {
  children: ReactNode
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <GameContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </GameContext.Provider>
  )
}
