import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

export function useNavigateTo(route) {
  const navigate = useNavigate()

  return useCallback(() => {
    navigate(route)
  }, [])
}
