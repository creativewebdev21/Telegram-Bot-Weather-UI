import { ChangeEventHandler, useEffect } from "react"
import { useFormContext } from "react-hook-form"
import React from 'react'

interface IInput {
  id?: string
  name?: string
  value?: any
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  hookToForm: boolean
  type: "text" | "password" | "url" | "number"
  clasNameError?: string
  disabled?: boolean
}

function Input({
  id,
  name,
  value,
  type = "text",
  placeholder,
  hookToForm,
  onChange,
  className,
  clasNameError,
  disabled,
}: IInput) {
  const formContext = useFormContext()
  const isFullyHooked = name && hookToForm && formContext

  const fieldError = isFullyHooked && formContext?.formState?.errors?.[name]

  useEffect(() => {
    if (name && hookToForm) {
      formContext.setValue(name, value)
    }
  }, [value, name, formContext, hookToForm])

  return (
    <label {...(id && { htmlFor: id })} className={"rounded-md text-sm w-full h-full"}>
      <div className="relative flex items-stretch">
        <input
          {...(id && { id: id })}
          type={type || "text"}
          value={value}
          placeholder={placeholder}
          className={`
          text-black
        w-full p-2 border-[1px] border-slate-300
        ${className ? className : ""} ${
            hookToForm && fieldError && fieldError?.message ? clasNameError : ""
          }`}
          {...(!hookToForm && {
            value: value,
            onChange: onChange,
          })}
          {...(isFullyHooked
            ? formContext.register(name, {
                onChange: (e) => onChange && onChange(e),
              })
            : {})}
          name={name}
          disabled={disabled}
        />
      </div>

      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="text-red-600 font-madeoutersans text-[10px]">
          {fieldError?.message as string}
        </p>
      )}
    </label>
  )
}

Input.defaultProps = {
  hookToForm: false,
  type: "text",
}

export default Input
