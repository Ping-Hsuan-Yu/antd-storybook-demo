import { Space } from 'antd'
import Text from '../Typography/Text'

interface SelectedCountProps {
  selectedCount: number
  totalCount: number
}

const SelectedCount = ({ selectedCount, totalCount }: SelectedCountProps) => (
  <Space size={4}>
    <Text>選取數</Text>
    <div>
      <Text strong>{selectedCount}</Text>
      <Text>/</Text>
      <Text>{totalCount}</Text>
    </div>
  </Space>
)

export default SelectedCount
