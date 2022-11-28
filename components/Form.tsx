import type { FormEventHandler, FunctionComponent } from 'react'

type FormProps = {
  children: JSX.Element
  onSubmit: FormEventHandler
}

const Form: FunctionComponent<FormProps> = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {children}
    <input type="submit" />
  </form>
)

Form.displayName = 'Form'

export default Form
