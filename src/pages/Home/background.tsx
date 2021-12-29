import { useRef, useEffect } from 'react'
import { Ball, Paddle, Score, Timer } from '@/components'
import { useGame } from '@/contexts'

export function Background() {
  const ballRef = useRef<HTMLDivElement>(null)
  const playerPaddleRef = useRef<HTMLDivElement>(null)
  const computerPaddleRef = useRef<HTMLDivElement>(null)
  const { setUp, start, gameState } = useGame()

  useEffect(() => {
    if (
      ballRef.current &&
      playerPaddleRef.current &&
      computerPaddleRef.current &&
      !gameState.isGameRunning
    ) {
      setUp(
        ballRef.current as HTMLDivElement,
        playerPaddleRef.current as HTMLDivElement,
        computerPaddleRef.current as HTMLDivElement,
        { isWatch: true, isFixedVelocity: true, gameStartTimer: 1000 }
      )

      start()
    }
  }, [
    ballRef.current,
    playerPaddleRef.current,
    computerPaddleRef.current,
    gameState.isGameRunning,
  ])

  return (
    <div className='background'>
      <Ball ballRef={ballRef} />
      <Paddle paddleRef={playerPaddleRef} />
      <Paddle paddleRef={computerPaddleRef} side='right' />
    </div>
  )
}
