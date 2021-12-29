import { Paddle } from '.'

const playerMouseMove = (e: MouseEvent, paddle: Paddle) => {
  paddle.position = (e.y / window.innerHeight) * 100
}

const movePlayer = (
  e: KeyboardEvent,
  paddle: Paddle,
  keys: [string, string]
) => {
  if (e.key === keys[0]) {
    paddle.position = paddle.position - 10
  }

  if (e.key === keys[1]) {
    paddle.position = paddle.position + 10
  }
}

export function setUpListeners(paddles: Paddle[]) {
  if (paddles.length === 2) {
    document.addEventListener('keydown', (e) => {
      movePlayer(e, paddles[0], ['w', 's'])
      movePlayer(e, paddles[1], ['ArrowUp', 'ArrowDown'])
    })
  } else {
    document.addEventListener('mousemove', (e) => {
      playerMouseMove(e, paddles[0])
    })
  }
}
