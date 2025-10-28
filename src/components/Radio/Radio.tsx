import {
  Radio as AntdRadio,
  Form,
  type RadioGroupProps,
  type FormItemProps,
} from 'antd'

const Radio = ({
  options,
  label,
  required,
}: RadioGroupProps & FormItemProps) => {
  return (
    <Form.Item required={required} label={label}>
      <AntdRadio.Group optionType='button' block options={options} />
    </Form.Item>
  )
}

export default Radio
