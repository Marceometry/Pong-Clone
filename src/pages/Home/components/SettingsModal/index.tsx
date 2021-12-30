import { SettingsForm } from './form'
import './styles.css'

type ModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function SettingsModal({ isOpen, setIsOpen }: ModalProps) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`settings-modal-overlay ${isOpen ? 'open' : ''}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='settings-modal-content'
      >
        <h1>Settings</h1>

        <SettingsForm />
      </div>
    </div>
  )
}
