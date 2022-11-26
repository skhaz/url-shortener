import type { FormEventHandler, FunctionComponent } from 'react'

export type FormProps = {
  children: JSX.Element
  onSubmit: FormEventHandler
}

export const Form: FunctionComponent<FormProps> = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {children}
    <input type="submit" />
  </form>
)
