import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GameProvider } from './contexts'
import { Game, Home } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <GameProvider>
              <Home />
            </GameProvider>
          }
        />

        <Route
          path='/play'
          element={
            <GameProvider>
              <Game />
            </GameProvider>
          }
        />

        <Route
          path='/watch'
          element={
            <GameProvider>
              <Game isWatch />
            </GameProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
