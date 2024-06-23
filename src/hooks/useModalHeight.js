import { useEffect, useState } from 'react'

export function useModalHeight() {
  const [modalHeight, setModalHeight] = useState('520px')

  const handleMarginTop = () => {
    const windowHeight = window.innerHeight
    if (windowHeight > 900) {
      setModalHeight('530px')
    } else if (windowHeight < 900 && windowHeight > 750) {
      setModalHeight('450px')
    } else if (windowHeight < 750 && windowHeight > 600) {
      setModalHeight('400px')
    } else {
      setModalHeight('400px')
    }
  }

  useEffect(() => {
    handleMarginTop()
  }, [])

  return modalHeight
}
