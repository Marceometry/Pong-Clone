import { useGame } from '@/contexts'
import './styles.css'

export function Score() {
  const { score } = useGame()

  return (
    <div className='score'>
      <div id='player-score'>{score[0]}</div>
      <div id='computer-score'>{score[1]}</div>
    </div>
  )
}
