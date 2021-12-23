import { Ball, Score } from './components'
import './styles/main.css'

export function App() {
  return (
    <div>
      <Score />

      <Ball />
      <div className='paddle left' id='player-paddle'></div>
      <div className='paddle right' id='computer-paddle'></div>
    </div>
  )
}
