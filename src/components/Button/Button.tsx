import { Button as AntdButton, type ButtonProps } from 'antd'

const Button = ({
  type,
  icon,
  disabled,
  loading,
  danger,
  children,
  href,
  ...props
}: ButtonProps) =>{
  return (
    <AntdButton
      type={type}
      icon={icon}
      disabled={disabled}
      loading={loading}
      danger={danger}
      href={href}
      {...props}
      >
      {children}
    </AntdButton>
  )
}

export default Button