import { Link } from 'react-router-dom'
import { GameProvider } from '@/contexts'
import { SettingsIcon } from '@/assets'
import { Background, SettingsModal } from './components'
import './styles.css'
import { useState } from 'react'

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

      <SettingsIcon onClick={() => setIsSettingsModalOpen(true)} />
      <SettingsModal
        isOpen={isSettingsModalOpen}
        setIsOpen={setIsSettingsModalOpen}
      />

      <GameProvider>
        <Background />
      </GameProvider>
    </div>
  )
}
