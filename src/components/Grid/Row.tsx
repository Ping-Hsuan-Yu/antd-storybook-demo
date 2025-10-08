import { Row as AntdRow, type RowProps } from 'antd'

const Row = ({ children }: RowProps) => (
  <AntdRow gutter={{ xs: 8, sm: 8, md: 16, lg:16, xl: 36 }}>{children}</AntdRow>
)

export default Row
