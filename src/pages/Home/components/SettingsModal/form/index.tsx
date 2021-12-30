import { Form } from '@/components'
import {
  BallVelocityIncreaseModeKey,
  ballVelocityIncreaseModesKeys,
  useSettings,
} from '@/contexts'
import './styles.css'

export function SettingsForm() {
  const { settings, setSettings } = useSettings()

  function handleCheck(checked: boolean, value: BallVelocityIncreaseModeKey) {
    if (!checked) return

    setSettings({
      ballVelocityIncrease: value,
    })
  }

  return (
    <div className='settings-form'>
      <div>
        <h2>Ball Velocity Increase</h2>

        <Form.Wrapper handleSubmit={() => {}}>
          <Form.Radio
            label='Slow'
            group='ballVelocityIncrease'
            name={ballVelocityIncreaseModesKeys.SLOW}
            handleCheck={handleCheck}
            checked={
              settings.ballVelocityIncrease ===
              ballVelocityIncreaseModesKeys.SLOW
            }
          />

          <Form.Radio
            label='Medium'
            group='ballVelocityIncrease'
            name={ballVelocityIncreaseModesKeys.MEDIUM}
            handleCheck={handleCheck}
            checked={
              settings.ballVelocityIncrease ===
              ballVelocityIncreaseModesKeys.MEDIUM
            }
          />

          <Form.Radio
            label='Fast'
            group='ballVelocityIncrease'
            name={ballVelocityIncreaseModesKeys.FAST}
            handleCheck={handleCheck}
            checked={
              settings.ballVelocityIncrease ===
              ballVelocityIncreaseModesKeys.FAST
            }
          />

          <Form.Radio
            label='Insane'
            group='ballVelocityIncrease'
            name={ballVelocityIncreaseModesKeys.INSANE}
            handleCheck={handleCheck}
            checked={
              settings.ballVelocityIncrease ===
              ballVelocityIncreaseModesKeys.INSANE
            }
          />
        </Form.Wrapper>
      </div>
    </div>
  )
}
