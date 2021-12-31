import './styles.css'

import { useState } from 'react'

export type RangeProps = {
  name: string
  defaultValue: string
  handleChange: (value: string) => void
}

export function Range({ name, defaultValue, handleChange }: RangeProps) {
  const [value, setValue] = useState(defaultValue)

  return (
    <div className='range'>
      <input
        type='range'
        max={360}
        id={name}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => {
          handleChange(e.target.value)
          setValue(e.target.value)
        }}
      />
    </div>
  )
}
