import { useCallback, useEffect, useState } from 'react'

export function useHover(ref) {
  const [isHovering, setHovering] = useState(false)

  const on = useCallback(() => setHovering(true), [])
  const off = useCallback(() => setHovering(false), [])

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const node = ref.current

    node.addEventListener('mouseenter', on)
    node.addEventListener('mousemove', on)
    node.addEventListener('mouseleave', off)

    return function () {
      node.removeEventListener('mouseenter', on)
      node.removeEventListener('mousemove', on)
      node.removeEventListener('mouseleave', off)
    }
  }, [])

  return isHovering
}
