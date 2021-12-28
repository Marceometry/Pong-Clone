import { Link } from 'react-router-dom'
import './styles.css'

export function Home() {
  return (
    <div className='home'>
      <h1>Pong Clone</h1>

      <div className='home-content'>
        <Link to='/play'>Play</Link>
        <Link to='/watch'>Watch mode</Link>
      </div>

      <span>Made by Marcelino Teixeira</span>
    </div>
  )
}
