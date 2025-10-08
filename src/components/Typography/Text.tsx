import { Typography } from 'antd'
import type { TextProps } from 'antd/es/typography/Text'

const AntdText = Typography.Text

const Text = ({ copyable, children }: TextProps) => (
  <AntdText copyable={copyable}>{children}</AntdText>
)

export default Text
