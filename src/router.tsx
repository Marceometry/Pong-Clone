import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GameProvider } from './contexts'
import { GameMode, gameModes } from './game'
import { Game, Home } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path='/play'
          element={
            <GameProvider>
              <Game />
            </GameProvider>
          }
        />

        {gameModes.map((mode: GameMode) => (
          <Route
            key={mode}
            path={`/${mode === 'single' ? 'play' : mode}`}
            element={
              <GameProvider>
                <Game gameMode={mode} />
              </GameProvider>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
