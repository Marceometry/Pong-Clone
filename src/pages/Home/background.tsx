import { useRef, useEffect } from 'react'
import { Ball, Paddle } from '@/components'
import { useGame } from '@/contexts'
import { GameOptions } from '@/game'

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
      const options: GameOptions = {
        gameMode: 'watch',
        isFixedVelocity: true,
        gameStartTimer: 1000,
      }

      setUp(
        ballRef.current,
        playerPaddleRef.current,
        computerPaddleRef.current,
        options
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
