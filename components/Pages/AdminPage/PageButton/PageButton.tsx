import React, { FC, ReactNode } from "react"

interface ButtonProps {
  id: string
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: (e: any) => void
  disabled?: boolean
  hasDoubleAnimation?: boolean
}

const PageButton: FC<ButtonProps> = ({ children, className, ...rest }) => (
  <button
    type="button"
    className={`relative inline-flex items-center px-2 py-2 
      border border-gray-300 
      bg-white text-sm font-medium text-gray-500 hover:bg-gray-50
       ${className}`}
    {...rest}
  >
    {children}
  </button>
)

export default PageButton
