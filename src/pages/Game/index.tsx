import { useRef, useEffect } from 'react'
import { Ball, Paddle, Score, Timer } from '@/components'
import { useGame } from '@/contexts'

type GameProps = {
  isWatch?: boolean
}

export function Game({ isWatch = false }: GameProps) {
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
        { isWatch }
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
    <>
      <Timer />

      <Score />

      <Ball ballRef={ballRef} />
      <Paddle paddleRef={playerPaddleRef} />
      <Paddle paddleRef={computerPaddleRef} side='right' />
    </>
  )
}
