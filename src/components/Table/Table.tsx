import { Table as AntdTable, type TableProps } from "antd"
import type { AnyObject } from "antd/es/_util/type"

const InternalTable = <RecordType extends AnyObject = AnyObject>(props: TableProps<RecordType>) => {
  return (
    <AntdTable<RecordType> scroll={{ x: "max-content" }} {...props}>
      {props.children}
    </AntdTable>
  )
}

const Table = Object.assign(InternalTable, {
  Column: AntdTable.Column,
  ColumnGroup: AntdTable.ColumnGroup,
  Summary: AntdTable.Summary,
}) as typeof AntdTable

export default Table