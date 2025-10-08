import { Typography } from 'antd'
import type { TitleProps } from 'antd/es/typography/Title'

const AntdTitle = Typography.Title

const Title = ({ level, children }: TitleProps) => (
  <AntdTitle level={level}>{children}</AntdTitle>
)

export default Title
