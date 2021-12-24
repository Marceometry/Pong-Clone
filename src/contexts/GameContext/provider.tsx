import { useState } from 'react'
import { Score, setHueColor } from '../../utils'
import { setUpListeners } from './listeners'
import { GameContext, GameContextProviderProps, Ball, Paddle } from '.'

export function GameProvider({ children }: GameContextProviderProps) {
  const [score, setScore] = useState<Score>([0, 0])
  const [isGameRunning, setIsGameRunning] = useState(false)
  let lastTime = 0

  function start(
    ballRef: HTMLDivElement,
    playerPaddleRef: HTMLDivElement,
    computerPaddleRef: HTMLDivElement
  ) {
    const ball = new Ball(ballRef)
    const playerPaddle = new Paddle(playerPaddleRef)
    const computerPaddle = new Paddle(computerPaddleRef)

    setIsGameRunning(true)
    setUpListeners(playerPaddle)
    window.requestAnimationFrame((time) =>
      update(time, ball, playerPaddle, computerPaddle)
    )
  }

  function update(
    time: number,
    ball: Ball,
    playerPaddle: Paddle,
    computerPaddle: Paddle
  ) {
    if (lastTime != null) {
      const delta = time - lastTime

      ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
      computerPaddle.update(delta, ball.y)

      setHueColor(delta)

      if (isLose(ball)) handleLose(ball, computerPaddle)
    }

    lastTime = time
    window.requestAnimationFrame((time) =>
      update(time, ball, playerPaddle, computerPaddle)
    )
  }

  function isLose(ball: Ball) {
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
  }

  function handleLose(ball: Ball, computerPaddle: Paddle) {
    const rect = ball.rect()
    if (rect.right >= window.innerWidth) {
      setScore((oldScore) => [oldScore[0] + 1, oldScore[1]])
    } else {
      setScore((oldScore) => [oldScore[0], oldScore[1] + 1])
    }

    ball.reset()
    computerPaddle.reset()
  }

  return (
    <GameContext.Provider
      value={{ start, score, setScore, isGameRunning, setIsGameRunning }}
    >
      {children}
    </GameContext.Provider>
  )
}
