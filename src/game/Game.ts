import { Score, setHueColor } from '@/utils'
import { Ball, GameConstructor, Paddle, setUpListeners } from '.'

export class Game {
  ball: Ball
  playerPaddle: Paddle
  computerPaddle: Paddle
  lastTime: number
  score: Score = [0, 0]
  setScore: (score: Score) => void

  constructor({
    ballRef,
    playerPaddleRef,
    computerPaddleRef,
    setScore,
  }: GameConstructor) {
    this.ball = new Ball(ballRef)
    this.playerPaddle = new Paddle(playerPaddleRef)
    this.computerPaddle = new Paddle(computerPaddleRef)
    this.setScore = setScore
    this.lastTime = 0
  }

  start() {
    setUpListeners(this.playerPaddle)
    window.requestAnimationFrame((time) => this.update(time))
  }

  update(time: number) {
    if (this.lastTime != null) {
      const delta = time - this.lastTime

      this.ball.update(delta, [
        this.playerPaddle.rect(),
        this.computerPaddle.rect(),
      ])
      this.computerPaddle.update(delta, this.ball.y)

      setHueColor(delta)

      if (this.isLose()) this.handleLose()
    }

    this.lastTime = time
    window.requestAnimationFrame((time) => this.update(time))
  }

  isLose() {
    const rect = this.ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
  }

  handleLose() {
    const rect = this.ball.rect()

    if (rect.right >= window.innerWidth) {
      this.score = [this.score[0] + 1, this.score[1]]
      this.setScore(this.score)
    } else {
      this.score = [this.score[0], this.score[1] + 1]
      this.setScore(this.score)
    }

    this.ball.reset()
    this.computerPaddle.reset()
  }
}
