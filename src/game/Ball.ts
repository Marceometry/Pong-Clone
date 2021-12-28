import {
  Vector,
  randomNumberBetween,
  isCollision,
  BALL_INITIAL_VELOCITY,
  BALL_VELOCITY_INCREASE,
} from '@/utils'

export class Ball {
  ballElem: HTMLDivElement
  direction: Vector = { x: 0, y: 0 }
  velocity: number = 0
  isFixedVelocity: boolean = false

  constructor(ballElem: HTMLDivElement, isFixedVelocity: boolean) {
    this.ballElem = ballElem
    this.isFixedVelocity = isFixedVelocity
    this.reset()
  }

  get x(): number {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--x'))
  }

  set x(value: number) {
    this.ballElem.style.setProperty('--x', String(value))
  }

  get y(): number {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--y'))
  }

  set y(value: number) {
    this.ballElem.style.setProperty('--y', String(value))
  }

  rect(): DOMRect {
    return this.ballElem.getBoundingClientRect()
  }

  reset() {
    this.x = 50
    this.y = 50
    this.direction = { x: 0, y: 0 }
    this.velocity = BALL_INITIAL_VELOCITY

    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.x) >= 0.9
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI)
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
    }
  }

  update(delta: number, paddleRects: DOMRect[]) {
    this.x += this.direction.x * this.velocity * delta
    this.y += this.direction.y * this.velocity * delta
    if (!this.isFixedVelocity) this.velocity += BALL_VELOCITY_INCREASE * delta

    const rect = this.rect()

    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
      this.direction.y *= -1
    }

    if (paddleRects.some((r: DOMRect) => isCollision(r, rect))) {
      this.direction.x *= -1
    }
  }
}
