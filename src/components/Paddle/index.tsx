import { RefObject } from 'react'
import './styles.css'

export type PaddleProps = {
  paddleRef: RefObject<HTMLDivElement>
  side?: 'left' | 'right'
}

export function Paddle({ paddleRef, side = 'left' }: PaddleProps) {
  return <div ref={paddleRef} className={`paddle ${side}`} />
}
