import { GameState } from '@/contexts'
import { GAME_START_TIMER, Score } from '@/utils'
import {
  Ball,
  GameConstructor,
  GameOptions,
  GameSetUp,
  Paddle,
  setUpListeners,
} from '.'

export class Game {
  ball: Ball = null as any
  playerPaddle: Paddle = null as any
  computerPaddle: Paddle = null as any
  lastTime: number = 0
  timeStarted: number = 0
  score: Score = [0, 0]
  options: GameOptions = {}
  setGameState: React.Dispatch<React.SetStateAction<GameState>>

  constructor(setGameState: GameConstructor) {
    this.setGameState = setGameState
  }

  setUp({ ballRef, playerPaddleRef, computerPaddleRef, options }: GameSetUp) {
    this.ball = new Ball(ballRef, !!options?.isFixedVelocity)
    this.playerPaddle = new Paddle(playerPaddleRef)
    this.computerPaddle = new Paddle(computerPaddleRef)
    this.options = options ?? {}
  }

  start() {
    setTimeout(() => {
      !this.options.isWatch && setUpListeners(this.playerPaddle)
      window.requestAnimationFrame((time) => this.update(time))
    }, GAME_START_TIMER)
  }

  update(time: number) {
    if (this.lastTime != 0) {
      const delta = time - this.lastTime

      this.options.isWatch && this.playerPaddle.update(delta, this.ball.y)
      this.computerPaddle.update(delta, this.ball.y)
      this.ball.update(delta, [
        this.playerPaddle.rect(),
        this.computerPaddle.rect(),
      ])

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
      this.setGameState((prevState) => ({
        ...prevState,
        score: this.score,
      }))
    } else {
      this.score = [this.score[0], this.score[1] + 1]
      this.setGameState((prevState) => ({
        ...prevState,
        score: this.score,
      }))
    }

    this.ball.reset()
    this.computerPaddle.reset()
  }
}
