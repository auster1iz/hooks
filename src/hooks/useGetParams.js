import { useLocation } from 'react-router-dom'

export function useGetParams(name) {
  const { search } = useLocation()
  const query = new URLSearchParams(search)
  return query.get(name)
}
