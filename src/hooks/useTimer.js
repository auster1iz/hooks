import { useCallback, useEffect, useState } from 'react'

export function useTimer(initialTime = 59) {
  const [time, setTime] = useState(initialTime)

  const resetTimer = useCallback(() => {
    setTime(initialTime)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1)
    }, 1000)

    if (time === 0) {
      clearInterval(timer)
    }

    return () => {
      clearInterval(timer)
    }
  }, [time])

  return {
    time,
    resetTimer,
  }
}
