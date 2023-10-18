import { joiResolver } from "@hookform/resolvers/joi"
import React, { FormEvent, ReactNode } from "react"
import { FormProvider, SubmitErrorHandler, useForm } from "react-hook-form"

interface IForm {
  id?: string
  onSubmit: (values: any) => any
  onError?: SubmitErrorHandler<Object>
  children: ReactNode
  className?: string
  initialValues?: Object
  validationSchema: any
}

function Form({
  id,
  onSubmit,
  validationSchema,
  children,
  onError,
  className,
  initialValues,
}: IForm) {
  const formMethods = useForm({
    resolver: joiResolver(validationSchema),
    defaultValues: initialValues,
  })

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    await formMethods.handleSubmit(onSubmit, onError)(event)
  }

  return (
    <FormProvider {...formMethods}>
      <form {...(id && { id: id })} onSubmit={handleFormSubmit} className={className}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.defaultProps = {
  onSubmit: () => {},
  children: "",
  className: "",
  initialValues: {},
}

export default Form
