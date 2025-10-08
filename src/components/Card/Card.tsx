import { Card as AntdCard, type CardProps } from 'antd'

const Card = ({ children }: CardProps) => {
  return <AntdCard variant="borderless">{children}</AntdCard>
}

export default Card
