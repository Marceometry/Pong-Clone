import { createContext, useContext } from 'react'

export type GameContextData = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const GameContext = createContext({} as GameContextData)

export const useGameContext = () => useContext(GameContext)
