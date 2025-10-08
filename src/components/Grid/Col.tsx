import { Col as AntdCol, type ColProps } from 'antd'

const Col = ({ children }: ColProps) => (
  <AntdCol xs={24} sm={12} md={12} lg={8} xl={6} xxl={4}>{children}</AntdCol>
)

export default Col

