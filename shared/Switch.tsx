import React, { FC, ReactNode, useState, useEffect } from "react"

interface SwitchProps {
  id: string
  onClick?: () => void
  children?: ReactNode
  value?: boolean
}

const Switch: FC<SwitchProps> = ({ onClick, value }) => {
  const [isToggle, setIsToggle] = useState<any>(false)

  useEffect(() => {
    setIsToggle(value)
  }, [value])

  return (
    <div className="flex justify-center w-[45px] h-6 cursor-pointer">
      <div
        className="flex items-center bg-[#A3A3AE] rounded-full w-full h-6 pl-2"
        onClick={onClick}
      >
        <div
          className={`${isToggle ? "translate-x-[calc(100%-6px)]" : "translate-x-[-5px]"} 
              bg-[white] w-5 h-5 rounded-full 
              transition duration-[300ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]`}
        />
      </div>
    </div>
  )
}

export default Switch
