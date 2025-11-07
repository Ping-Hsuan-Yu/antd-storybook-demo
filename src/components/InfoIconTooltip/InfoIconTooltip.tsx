import { Tooltip } from "antd"
import { InfoCircleOutlined } from "@ant-design/icons"

const InfoIconTooltip = ({title}:{title:string}) => {
  return <Tooltip title={title}><InfoCircleOutlined style={{color:'var(--ant-color-info)'}} /></Tooltip>
}

export default InfoIconTooltip