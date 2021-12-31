import { ReactNode } from 'react'
import { CloseIcon } from '@/assets'
import './styles.css'

type ModalProps = {
  children: ReactNode
  title: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal({ children, title, isOpen, setIsOpen }: ModalProps) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
    >
      <div onClick={(e) => e.stopPropagation()} className='modal-content'>
        <CloseIcon className='close-button' onClick={() => setIsOpen(false)} />

        <h1>{title}</h1>

        {children}
      </div>
    </div>
  )
}
