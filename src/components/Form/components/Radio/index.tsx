import { BallVelocityIncreaseModeKey } from '@/contexts'
import './styles.css'

export type RadioProps = {
  name: string
  label: string
  group: string
  checked: boolean
  handleCheck: (checked: boolean, value: BallVelocityIncreaseModeKey) => void
}

export function Radio({
  name,
  label,
  group,
  checked,
  handleCheck,
}: RadioProps) {
  return (
    <div className='radio'>
      <input
        type='radio'
        name={group}
        id={name}
        value={name}
        checked={checked}
        onChange={(e) =>
          handleCheck(
            e.target.checked,
            e.target.value as BallVelocityIncreaseModeKey
          )
        }
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}
