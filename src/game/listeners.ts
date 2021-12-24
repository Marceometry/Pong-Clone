import { Paddle } from '.'

const playerMouseMove = (e: MouseEvent, playerPaddle: Paddle) => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
}

export function setUpListeners(playerPaddle: Paddle) {
  document.addEventListener('mousemove', (e) => {
    playerMouseMove(e, playerPaddle)
  })
}
