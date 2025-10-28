import { Card as AntdCard, type CardProps } from 'antd'

const Card = (props: CardProps) => {
  return <AntdCard variant="borderless" {...props} />
}

export default Card
