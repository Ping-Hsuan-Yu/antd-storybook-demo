import {
  DatePicker as AntdDatePicker,
  Form,
  type DatePickerProps,
  type FormItemProps,
} from 'antd'

const DatePicker = ({
  allowClear = true,
  disabled,
  required,
  label,
  name,
  rules,
  placeholder,
  style,
}: DatePickerProps & FormItemProps) => {
  return (
    <Form.Item required={required} label={label} name={name} rules={rules}>
      <AntdDatePicker
        allowClear={required ? false : allowClear}
        disabled={disabled}
        placeholder={placeholder}
        style={{ width: '100%', ...style }}
      />
    </Form.Item>
  )
}

export default DatePicker
