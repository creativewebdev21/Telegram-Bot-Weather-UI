import { useEffect, useRef } from "react"

interface IClickOutsideHook {
  shouldRegister: boolean
  onOutsideClick: () => any
}

function useClickOutside({ shouldRegister, onOutsideClick }: IClickOutsideHook) {
  const ref = useRef<HTMLDivElement | any | null>(null)

  const handleMouseClick = async (e: MouseEvent) => {
    const node = e.target as Node

    if (ref?.current?.contains(node)) return

    await onOutsideClick()
  }

  useEffect(() => {
    if (!shouldRegister) {
      document.removeEventListener("mousedown", handleMouseClick)
      return
    }

    document.addEventListener("mousedown", handleMouseClick)

    return () => {
      document.removeEventListener("mousedown", handleMouseClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRegister])

  return { ref }
}

export default useClickOutside
