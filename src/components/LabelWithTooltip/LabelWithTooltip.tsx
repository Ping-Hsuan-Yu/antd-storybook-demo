import { Space } from "antd"
import InfoIconTooltip from "../InfoIconTooltip/InfoIconTooltip"

const LabelWithTooltip = ({label, tooltip}:{label:string, tooltip:string}) => {
  return <Space size={4}>
    {label}
    <InfoIconTooltip title={tooltip} />
  </Space>
}

export default LabelWithTooltip