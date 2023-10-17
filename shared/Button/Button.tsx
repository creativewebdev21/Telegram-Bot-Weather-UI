import React, { FC, LegacyRef, ReactNode, useRef } from "react"
import usePulseEffect from "./usePulseEffect"

interface ButtonProps {
  id: string
  refP?: Element
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  pulseColor?: string
  onClick?: (e: any) => void
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  id,
  refP,
  children,
  pulseColor,
  className,
  onClick,
  ...rest
}) => {
  const elementRef = useRef() as any
  const ref = useRef() as any
  const pulseRef = useRef() as any

  usePulseEffect({
    ref,
    pulseRef,
    pulseColor,
  })

  return (
    <button
      ref={ref}
      id={id}
      type="button"
      className={`transition duration-[300ms] 
          rounded-[30px] text-[white]
          relative
          overflow-hidden
          ${className || ""}`}
      onClick={onClick}
      {...rest}
    >
      <div
        className={`absolute
        z-[0] left-[-5px] top-[-5px]
        rounded-[50%]
        translate-x-[-50%]
        translate-y-[-50%]
        w-[0px] h-[0px]`}
        ref={pulseRef}
      />
      <div
        ref={(refP as unknown as LegacyRef<HTMLDivElement>) || elementRef}
        className="
      z-[3] w-full
      flex items-center justify-center
      gap-[10px]"
      >
        {children}
      </div>
    </button>
  )
}

export default Button
