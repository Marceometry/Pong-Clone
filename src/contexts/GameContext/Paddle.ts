import { COMPUTER_PADDLE_SPEED } from '../../utils'

export class Paddle {
  paddleElem: HTMLDivElement

  constructor(paddleElem: HTMLDivElement) {
    this.paddleElem = paddleElem
    this.reset()
  }

  get position(): number {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue('--position')
    )
  }

  set position(value: number) {
    this.paddleElem.style.setProperty('--position', String(value))
  }

  rect(): DOMRect {
    return this.paddleElem.getBoundingClientRect()
  }

  reset() {
    this.position = 50
  }

  update(delta: number, ballHeight: number) {
    this.position +=
      COMPUTER_PADDLE_SPEED * delta * (ballHeight - this.position)
  }
}
