import './styles.css'

export function SettingsForm() {
  return (
    <div className='settings-form'>
      <fieldset>
        <h2>Ball Velocity Increase</h2>

        <div>
          <div>
            <input type='radio' name='ballVelocity' id='slow' value='slow' />
            <label htmlFor='slow'>Slow</label>
          </div>

          <div>
            <input
              type='radio'
              name='ballVelocity'
              id='medium'
              value='medium'
            />
            <label htmlFor='medium'>Medium</label>
          </div>

          <div>
            <input type='radio' name='ballVelocity' id='fast' value='fast' />
            <label htmlFor='fast'>Fast</label>
          </div>

          <div>
            <input
              type='radio'
              name='ballVelocity'
              id='insane'
              value='insane'
            />
            <label htmlFor='insane'>Insane</label>
          </div>
        </div>
      </fieldset>
    </div>
  )
}
