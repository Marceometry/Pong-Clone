import { useEffect, useRef } from 'react'
import { Ball, Paddle, Score } from '@/components'
import { useGame } from '@/contexts'
import './styles/main.css'

export function App() {
  const ballRef = useRef<HTMLDivElement>(null)
  const playerPaddleRef = useRef<HTMLDivElement>(null)
  const computerPaddleRef = useRef<HTMLDivElement>(null)
  const { start, isGameRunning } = useGame()

  useEffect(() => {
    if (
      ballRef.current &&
      playerPaddleRef.current &&
      computerPaddleRef.current &&
      !isGameRunning
    ) {
      start(ballRef.current, playerPaddleRef.current, computerPaddleRef.current)
    }
  }, [ballRef.current, playerPaddleRef.current, computerPaddleRef.current])

  return (
    <div>
      <Score />

      <Ball ballRef={ballRef} />

      <Paddle paddleRef={playerPaddleRef} />
      <Paddle paddleRef={computerPaddleRef} side='right' />
    </div>
  )
}
