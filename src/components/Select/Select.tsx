import {
  Select as AntdSelect,
  Form,
  type FormItemProps,
  type SelectProps,
} from 'antd'

const Select = ({
  allowClear = true,
  disabled,
  required,
  showSearch = true,
  label,
  name,
  rules,
  mode,
  options,
  placeholder,
}: SelectProps & FormItemProps) => (
  <Form.Item required={required} label={label} name={name} rules={rules}>
    <AntdSelect
      allowClear={required ? false : allowClear}
      disabled={disabled}
      showSearch={showSearch}
      mode={mode}
      options={options}
      placeholder={placeholder}
    />
  </Form.Item>
)

export default Select
