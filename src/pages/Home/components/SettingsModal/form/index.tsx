import {
  BallVelocityIncreaseModeKey,
  ballVelocityIncreaseModesKeys,
  useSettings,
} from '@/contexts'
import './styles.css'

export function SettingsForm() {
  const { settings, setSettings } = useSettings()

  function handleSelect(checked: boolean, value: BallVelocityIncreaseModeKey) {
    if (!checked) return

    setSettings({
      ballVelocityIncrease: value,
    })
  }

  return (
    <div className='settings-form'>
      <fieldset>
        <h2>Ball Velocity Increase</h2>

        <div>
          <div>
            <input
              type='radio'
              name='ballVelocity'
              id={ballVelocityIncreaseModesKeys.SLOW}
              value={ballVelocityIncreaseModesKeys.SLOW}
              checked={
                settings.ballVelocityIncrease ===
                ballVelocityIncreaseModesKeys.SLOW
              }
              onChange={(e) =>
                handleSelect(
                  e.target.checked,
                  e.target.value as BallVelocityIncreaseModeKey
                )
              }
            />
            <label htmlFor='slow'>Slow</label>
          </div>

          <div>
            <input
              type='radio'
              name='ballVelocity'
              id={ballVelocityIncreaseModesKeys.MEDIUM}
              value={ballVelocityIncreaseModesKeys.MEDIUM}
              checked={
                settings.ballVelocityIncrease ===
                ballVelocityIncreaseModesKeys.MEDIUM
              }
              onChange={(e) =>
                handleSelect(
                  e.target.checked,
                  e.target.value as BallVelocityIncreaseModeKey
                )
              }
            />
            <label htmlFor='medium'>Medium</label>
          </div>

          <div>
            <input
              type='radio'
              name='ballVelocity'
              id={ballVelocityIncreaseModesKeys.FAST}
              value={ballVelocityIncreaseModesKeys.FAST}
              checked={
                settings.ballVelocityIncrease ===
                ballVelocityIncreaseModesKeys.FAST
              }
              onChange={(e) =>
                handleSelect(
                  e.target.checked,
                  e.target.value as BallVelocityIncreaseModeKey
                )
              }
            />
            <label htmlFor='fast'>Fast</label>
          </div>

          <div>
            <input
              type='radio'
              name='ballVelocity'
              id={ballVelocityIncreaseModesKeys.INSANE}
              value={ballVelocityIncreaseModesKeys.INSANE}
              checked={
                settings.ballVelocityIncrease ===
                ballVelocityIncreaseModesKeys.INSANE
              }
              onChange={(e) =>
                handleSelect(
                  e.target.checked,
                  e.target.value as BallVelocityIncreaseModeKey
                )
              }
            />
            <label htmlFor='insane'>Insane</label>
          </div>
        </div>
      </fieldset>
    </div>
  )
}
