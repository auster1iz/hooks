import { useCallback, useState } from 'react'

export function useTextInput() {
  const [value, setValue] = useState('')

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return { value, onChange }
}
