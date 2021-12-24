import { useState } from 'react'
import { Ball, Paddle } from '../../scripts'
import { GameContext, GameContextProviderProps, Score } from '.'

export function GameProvider({ children }: GameContextProviderProps) {
  const [score, setScore] = useState<Score>([0, 0])
  const [isGameRunning, setIsGameRunning] = useState(false)

  function start(
    ballRef: HTMLElement,
    playerPaddleRef: HTMLElement,
    computerPaddleRef: HTMLElement
  ) {
    const ball = new Ball(ballRef)
    const playerPaddle = new Paddle(playerPaddleRef)
    const computerPaddle = new Paddle(computerPaddleRef)

    let lastTime = 0
    function update(time: number) {
      if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
        computerPaddle.update(delta, ball.y)
        const hue = parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue('--hue')
        )

        document.documentElement.style.setProperty(
          '--hue',
          String(hue + delta * 0.01)
        )

        if (isLose()) handleLose()
      }

      lastTime = time
      window.requestAnimationFrame(update)
    }

    function isLose() {
      const rect = ball.rect()
      return rect.right >= window.innerWidth || rect.left <= 0
    }

    function handleLose() {
      const rect = ball.rect()
      if (rect.right >= window.innerWidth) {
        setScore((oldScore) => [oldScore[0] + 1, oldScore[1]])
      } else {
        setScore((oldScore) => [oldScore[0], oldScore[1] + 1])
      }

      ball.reset()
      computerPaddle.reset()
      console.log(score)
    }

    document.addEventListener('mousemove', (e) => {
      playerPaddle.position = (e.y / window.innerHeight) * 100
    })

    window.requestAnimationFrame(update)
    setIsGameRunning(true)
  }

  return (
    <GameContext.Provider
      value={{ start, score, setScore, isGameRunning, setIsGameRunning }}
    >
      {children}
    </GameContext.Provider>
  )
}
