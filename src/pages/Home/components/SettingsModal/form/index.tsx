import { useState } from 'react'
import { Form } from '@/components'
import { getHueColor, setHueColor } from '@/utils'
import {
  BallVelocityIncreaseModeKey,
  ballVelocityIncreaseModesKeys,
  useSettings,
} from '@/contexts'
import './styles.css'

export function SettingsForm() {
  const {
    settings,
    setSettings,
    handleRainbowBackground,
    cancelRainbowBackground,
  } = useSettings()
  const [isRainbowColorsChecked, setIsRainbowColorsChecked] = useState(
    settings.colorScheme.isRainbow
  )

  function handleBallVelocityIncreaseCheck(value: BallVelocityIncreaseModeKey) {
    setSettings((prevSettings) => ({
      ...prevSettings,
      ballVelocityIncrease: value,
    }))
  }

  function handlePaddleSize(value: string) {
    setSettings((prevSettings) => ({
      ...prevSettings,
      paddleSize: parseFloat(value),
    }))
  }

  function handleRainbowColors(checked: boolean) {
    checked ? handleRainbowBackground() : cancelRainbowBackground()
    setIsRainbowColorsChecked(checked)
    setSettings((prevSettings) => ({
      ...prevSettings,
      colorScheme: {
        ...prevSettings.colorScheme,
        isRainbow: checked,
      },
    }))
  }

  function handleChangeColor(value: string) {
    setHueColor(value)
    setSettings((prevSettings) => ({
      ...prevSettings,
      colorScheme: {
        isRainbow: false,
        hueColor: value,
      },
    }))
  }

  return (
    <div className='settings-form'>
      <Form.Wrapper>
        <section>
          <h2>Ball Velocity Increase</h2>

          <div className='radio-container'>
            <Form.Radio
              label='Slow'
              group='ballVelocityIncrease'
              name={ballVelocityIncreaseModesKeys.SLOW}
              handleCheck={handleBallVelocityIncreaseCheck}
              checked={
                settings.ballVelocityIncrease ===
                ballVelocityIncreaseModesKeys.SLOW
              }
            />

            <Form.Radio
              label='Medium'
              group='ballVelocityIncrease'
              name={ballVelocityIncreaseModesKeys.MEDIUM}
              handleCheck={handleBallVelocityIncreaseCheck}
              checked={
                settings.ballVelocityIncrease ===
                ballVelocityIncreaseModesKeys.MEDIUM
              }
            />

            <Form.Radio
              label='Fast'
              group='ballVelocityIncrease'
              name={ballVelocityIncreaseModesKeys.FAST}
              handleCheck={handleBallVelocityIncreaseCheck}
              checked={
                settings.ballVelocityIncrease ===
                ballVelocityIncreaseModesKeys.FAST
              }
            />

            <Form.Radio
              label='Insane'
              group='ballVelocityIncrease'
              name={ballVelocityIncreaseModesKeys.INSANE}
              handleCheck={handleBallVelocityIncreaseCheck}
              checked={
                settings.ballVelocityIncrease ===
                ballVelocityIncreaseModesKeys.INSANE
              }
            />
          </div>
        </section>

        <section>
          <h2>Paddle Size</h2>

          <div>
            <Form.Range
              min={1}
              max={70}
              name='paddleSize'
              defaultValue={String(settings.paddleSize)}
              handleChange={handlePaddleSize}
            />
          </div>
        </section>

        <section>
          <h2>Color Scheme</h2>

          <div>
            <Form.Checkbox
              name='rainbow'
              label='Rainbow'
              checked={isRainbowColorsChecked}
              handleCheck={(checked: boolean) => handleRainbowColors(checked)}
            />

            <Form.Range
              max={360}
              name='colorScheme'
              defaultValue={getHueColor()}
              disabled={isRainbowColorsChecked}
              handleChange={handleChangeColor}
            />
          </div>
        </section>
      </Form.Wrapper>
    </div>
  )
}
