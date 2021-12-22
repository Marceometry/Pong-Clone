import { Score } from './components'
import './styles/main.css'

export function App() {
  return (
    <div>
      <Score />

      <div className='ball' id='ball'></div>
      <div className='paddle left' id='player-paddle'></div>
      <div className='paddle right' id='computer-paddle'></div>
    </div>
  )
}
