import { useCallback, useState } from 'react'

export const useToggle = (visible = false) => {
  const [isVisible, setIsVisible] = useState(visible)

  const onToggleVisibility = useCallback(() => {
    setIsVisible(prevValue => !prevValue)
  }, [])

  return [isVisible, onToggleVisibility]
}

export default useToggle
