import { useRef, useEffect } from 'react'
import { Ball, Paddle, Score } from '@/components'
import { useGame } from '@/contexts'

export function Game() {
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
