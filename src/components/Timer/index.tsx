import { useState, useEffect } from 'react'
import './styles.css'

export function Timer() {
  const [timer, setTimer] = useState(3)

  useEffect(() => {
    const id = setTimeout(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) return prevTimer
        return prevTimer - 1
      })
    }, 1000)

    return () => {
      clearTimeout(id)
    }
  })

  return (
    <>
      {!!timer && (
        <div className='timer'>
          <h1>{timer}</h1>
        </div>
      )}
    </>
  )
}
