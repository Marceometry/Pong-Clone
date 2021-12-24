import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Game, Home } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/play' element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}
