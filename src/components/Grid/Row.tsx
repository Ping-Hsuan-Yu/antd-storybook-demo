import { Row as AntdRow, type RowProps } from 'antd'

const gutter = {  xs: 8,  sm: 8,  md: 16,  lg: 16,  xl: 36, xxl: 36}

const Row = ({ children }: RowProps) => (
  <AntdRow gutter={[gutter, gutter]}>{children}</AntdRow>
)

export default Row
