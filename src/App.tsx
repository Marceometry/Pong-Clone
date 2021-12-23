import { useEffect } from 'react'
import { Ball, Score } from './components'
import { Game } from './scripts'
import './styles/main.css'

export function App() {
  useEffect(() => {
    Game.start()
  }, [])

  return (
    <div>
      <Score />

      <Ball />
      <div className='paddle left' id='player-paddle'></div>
      <div className='paddle right' id='computer-paddle'></div>
    </div>
  )
}
