import { SettingsIcon } from '@/assets'
import { Modal } from '@/components'
import { SettingsForm } from './form'

type ModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Settings({ isOpen, setIsOpen }: ModalProps) {
  return (
    <>
      <SettingsIcon onClick={() => setIsOpen(true)} />

      <Modal title='Settings' isOpen={isOpen} setIsOpen={setIsOpen}>
        <SettingsForm />
      </Modal>
    </>
  )
}
