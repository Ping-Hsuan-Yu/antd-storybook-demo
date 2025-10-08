import { Form as AntdForm, type FormProps } from 'antd'
import type { ReactNode } from 'react'

const Form = ({ layout = 'vertical', children }: FormProps) => (
  <AntdForm layout={layout}>
    {children as ReactNode}
  </AntdForm>
)

export default Form
