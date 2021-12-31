import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GameProvider } from '@/contexts'
import { Background, Settings } from './components'
import './styles.css'

export function Home() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)

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

      <Settings
        isOpen={isSettingsModalOpen}
        setIsOpen={setIsSettingsModalOpen}
      />

      <GameProvider>
        <Background />
      </GameProvider>
    </div>
  )
}
