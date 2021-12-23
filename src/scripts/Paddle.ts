const SPEED = 0.02

export class Paddle {
  paddleElem

  constructor(paddleElem: HTMLElement) {
    this.paddleElem = paddleElem
    this.reset()
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue('--position')
    )
  }

  set position(value) {
    this.paddleElem.style.setProperty('--position', String(value))
  }

  rect() {
    return this.paddleElem.getBoundingClientRect()
  }

  reset() {
    this.position = 50
  }

  update(delta: number, ballHeight: number) {
    this.position += SPEED * delta * (ballHeight - this.position)
  }
}
