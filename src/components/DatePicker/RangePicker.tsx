import { DatePicker as AntdDatePicker, Form, type FormItemProps } from 'antd'
import type { RangePickerProps } from 'antd/es/date-picker'

const RangePicker = ({
  allowClear = true,
  disabled,
  required,
  showTime,
  label,
  name,
  rules,
  style,
}: RangePickerProps & FormItemProps) => {
  return (
    <Form.Item required={required} label={label} name={name} rules={rules}>
      <AntdDatePicker.RangePicker
        allowClear={required ? false : allowClear}
        disabled={disabled}
        showTime={showTime}
        format={showTime ? 'YYYY-MM-DD HH:mm' : 'YYYY-MM-DD'}
        style={{ width: '100%', ...style }}
      />
    </Form.Item>
  )
}

export default RangePicker
