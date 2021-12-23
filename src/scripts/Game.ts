import { Ball, Paddle } from '.'

function start() {
  const ball = new Ball(document.getElementById('ball') as HTMLElement)
  const playerPaddle = new Paddle(
    document.getElementById('player-paddle') as HTMLElement
  )
  const computerPaddle = new Paddle(
    document.getElementById('computer-paddle') as HTMLElement
  )
  const playerScoreElem = document.getElementById('player-score') as HTMLElement
  const computerScoreElem = document.getElementById(
    'computer-score'
  ) as HTMLElement

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
      playerScoreElem.textContent = String(
        parseInt(playerScoreElem.textContent as string) + 1
      )
    } else {
      computerScoreElem.textContent = String(
        parseInt(computerScoreElem.textContent as string) + 1
      )
    }
    ball.reset()
    computerPaddle.reset()
  }

  document.addEventListener('mousemove', (e) => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
  })

  window.requestAnimationFrame(update)
}

export const Game = { start }
