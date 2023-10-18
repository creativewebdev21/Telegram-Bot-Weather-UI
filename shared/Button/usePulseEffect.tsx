/* eslint-disable-next-line no-param-reassign */
import { useEffect } from "react"
import styles from "./Button.module.css"

interface Props {
  ref?: any
  pulseRef?: any
  pulseColor?: string
}

const usePulseEffect = ({ ref, pulseRef, pulseColor }: Props) => {
  useEffect(() => {
    const handleMouseClick = async (event: any) => {
      if(pulseRef?.current && ref?.current) {
        pulseRef.current.classList.remove(styles.pulse__effect)
        const posX = event?.clientX
        const posY = event?.clientY
  
        const topY = ref.current.getBoundingClientRect().top
        const leftX = ref.current.getBoundingClientRect().left
  
        const offsetX = posX - leftX
        const offsetY = posY - topY
  
        pulseRef.current.style.left = `${offsetX}px`
        pulseRef.current.style.top = `${offsetY}px`
        pulseRef.current.style.backgroundColor = pulseColor || "white"
  
        pulseRef.current.classList.add(styles.pulse__effect)
      }
    }

    if (ref?.current && pulseRef?.current) {
      ref.current.removeEventListener("click", handleMouseClick)
      ref.current.addEventListener("click", handleMouseClick)
    }
  }, [ref, pulseRef, pulseColor])
}

export default usePulseEffect
