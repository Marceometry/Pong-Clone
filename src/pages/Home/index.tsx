import { Link } from 'react-router-dom'
import { GameProvider } from '@/contexts'
import { Background } from './background'
import './styles.css'

export function Home() {
  return (
    <div className='home'>
      <h1>Pong Clone</h1>

      <div className='home-content'>
        <Link to='/play' className='large'>
          Play
        </Link>

        <Link to='/watch'>Watch mode</Link>
        <Link to='/multiplayer'>Multiplayer</Link>
      </div>

      <span>Made by Marcelino Teixeira</span>

      <GameProvider>
        <Background />
      </GameProvider>
    </div>
  )
}
