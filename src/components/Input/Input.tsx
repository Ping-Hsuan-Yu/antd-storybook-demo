import { Input as AntdInput, type FormItemProps, type InputProps } from 'antd'
import { Form } from 'antd'

const Input = ({
  label,
  name,
  rules,
  allowClear = true,
  disabled,
  required,
}: InputProps & FormItemProps) => (
  <Form.Item required={required} label={label} name={name} rules={rules}>
    <AntdInput
      allowClear={required ? false : allowClear}
      disabled={disabled}
      required={required}
    />
  </Form.Item>
)

export default Input
