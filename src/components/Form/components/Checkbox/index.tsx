import './styles.css'

export type CheckboxProps = {
  name: string
  label: string
  checked: boolean
  handleCheck: (checked: boolean) => void
}

export function Checkbox({ name, label, checked, handleCheck }: CheckboxProps) {
  return (
    <div className='checkbox'>
      <input
        type='checkbox'
        id={name}
        name={name}
        checked={checked}
        onChange={(e) => handleCheck(e.target.checked)}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}
