/* eslint-disable */
import React, { useState } from "react"
import useClickOutside from "./useClickOutside"

interface IPopoverFucChild {
  toggleModal?: () => void
  openModal?: boolean
}

interface PopoverProps {
  id: string
  children?: [(props: IPopoverFucChild) => any, (props: IPopoverFucChild) => any]
  className?: string
  open?: boolean
}

export default function Popover({ id, children, className }: PopoverProps) {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = (e: any) => {
    e.stopPropagation()
    if (openModal) return setOpenModal(false)
    setOpenModal((prev) => !prev)
  }

  const { ref: modalRef } = useClickOutside({
    shouldRegister: openModal,
    onOutsideClick: () => setOpenModal(false),
  })

  return (
    <div className="relative" ref={modalRef}>
      <div onClick={toggleModal} className="cursor-pointer">
        {children && typeof children[0] !== "function" && children[0]}
        {children &&
          typeof children[0] === "function" &&
          (children[0] as any)({
            openModal,
          })}
      </div>
      {openModal && (
        <div className={`absolute top-[calc(100%+5px)] min-w-full z-10 ${className || ""}`} id={id}>
          {children && typeof children[1] !== "function" && children[1]}
          {children &&
            typeof children[1] === "function" &&
            (children[1] as any)({
              toggleModal,
            })}
        </div>
      )}
    </div>
  )
}
