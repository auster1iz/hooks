import { useCallback, useState } from 'react'

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return {
    isOpen,
    closeModal,
    openModal,
    toggleModal,
  }
}
