import type { Meta, StoryObj } from '@storybook/react'

import { useState, useRef } from 'react'
import { Button, Flex, Space, Modal, Checkbox } from 'antd'
import type { ColumnType } from 'antd/es/table'
import { SettingOutlined, MenuOutlined } from '@ant-design/icons'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Card from '../../components/Card/Card'
import Link from '../../components/Typography/Link'
import SelectedCount from '../../components/SelectedCount/SelectedCount'
import Table from '../../components/Table/Table'

const meta: Meta<typeof Card> = {
  title: 'Examples/ResultTable',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

interface DataType {
  id: string
  plan: string
  type: string
  status: string
  assignee: string
  priority: string
  progress: number
  createTime: string
}

interface LogisticsOrderType {
  orderNo: string
  customerName: string
  productName: string
  totalAmount: number
  status: string
  createTime: string
}

interface LogisticsDetailType {
  orderNo: string
  trackingNo: string
  warehouse: string
  destination: string
  courier: string
  estimatedDelivery: string
  status: string
}

const data: DataType[] = [
  {
    id: 'PKG20231118001',
    plan: '包裹追蹤：台北至新北配送',
    type: '標準配送',
    status: '配送中',
    assignee: '張三',
    priority: '高',
    progress: 75,
    createTime: '2023-11-18 09:32:11',
  },
  {
    id: 'PKG20231117002',
    plan: '包裹處理：高雄倉庫入庫',
    type: '倉儲作業',
    status: '處理中',
    assignee: '李四',
    priority: '中',
    progress: 50,
    createTime: '2023-11-17 15:12:40',
  },
  {
    id: 'PKG20231115007',
    plan: '包裹配送：桃園至台北急件',
    type: '急件配送',
    status: '已完成',
    assignee: '王五',
    priority: '高',
    progress: 100,
    createTime: '2023-11-15 08:26:33',
  },
  {
    id: 'PKG20231114003',
    plan: '包裹分揀：台中轉運站',
    type: '分揀作業',
    status: '處理中',
    assignee: '趙六',
    priority: '中',
    progress: 60,
    createTime: '2023-11-14 13:45:22',
  },
  {
    id: 'PKG20231112008',
    plan: '包裹配送：新竹至苗栗標準件',
    type: '標準配送',
    status: '待配送',
    assignee: '孫七',
    priority: '低',
    progress: 20,
    createTime: '2023-11-12 10:28:56',
  },
]

const logisticsOrders: LogisticsOrderType[] = [
  {
    orderNo: 'LOG20241201001',
    customerName: '張志明',
    productName: '無線藍牙耳機 Pro',
    totalAmount: 2990,
    status: '已出貨',
    createTime: '2024-12-01 10:15:30',
  },
  {
    orderNo: 'LOG20241201002',
    customerName: '李雅雯',
    productName: '智慧手錶 Series 8',
    totalAmount: 8990,
    status: '配送中',
    createTime: '2024-12-01 11:22:45',
  },
  {
    orderNo: 'LOG20241201003',
    customerName: '王建國',
    productName: '行動電源 20000mAh',
    totalAmount: 990,
    status: '備貨中',
    createTime: '2024-12-01 14:35:12',
  },
]

const logisticsDetails: LogisticsDetailType[] = [
  {
    orderNo: 'LOG20241201001',
    trackingNo: 'TF123456789',
    warehouse: '台北物流中心',
    destination: '台北市信義區',
    courier: '黑貓宅急便',
    estimatedDelivery: '2024-12-03',
    status: '配送中',
  },
  {
    orderNo: 'LOG20241201001',
    trackingNo: 'EZ987654321',
    warehouse: '台北物流中心',
    destination: '台北市信義區',
    courier: 'EZship',
    estimatedDelivery: '2024-12-02',
    status: '已送達',
  },
  {
    orderNo: 'LOG20241201002',
    trackingNo: 'SF555888999',
    warehouse: '桃園轉運站',
    destination: '新北市板橋區',
    courier: '順豐速運',
    estimatedDelivery: '2024-12-04',
    status: '配送中',
  },
  {
    orderNo: 'LOG20241201003',
    trackingNo: 'FM777444111',
    warehouse: '台中倉庫',
    destination: '台中市西屯區',
    courier: '宅配通',
    estimatedDelivery: '2024-12-05',
    status: '待出庫',
  },
]

const columns: ColumnType<DataType>[] = [
  {
    title: '包裹編號',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '配送說明',
    dataIndex: 'plan',
    key: 'plan',
  },
  {
    title: '配送類型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '狀態',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '負責人員',
    dataIndex: 'assignee',
    key: 'assignee',
  },
  {
    title: '優先級',
    dataIndex: 'priority',
    key: 'priority',
  },
  {
    title: '處理進度',
    dataIndex: 'progress',
    key: 'progress',
    render: (progress: number) => `${progress}%`,
  },
  {
    title: '建立時間',
    dataIndex: 'createTime',
    key: 'createTime',
  },
]

const columnsWithActions: ColumnType<DataType>[] = [
  {
    title: '操作',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    render: () => (
      <Space size='small'>
        <Link>編輯</Link>
        <Link type='danger'>刪除</Link>
      </Space>
    ),
  },
  ...columns,
]

const logisticsColumns: ColumnType<LogisticsOrderType>[] = [
  {
    title: '訂單編號',
    dataIndex: 'orderNo',
    key: 'orderNo',
  },
  {
    title: '客戶姓名',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: '商品名稱',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: '訂單金額',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
    render: (amount: number) => `NT$ ${amount.toLocaleString()}`,
  },
  {
    title: '狀態',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '成立時間',
    dataIndex: 'createTime',
    key: 'createTime',
  },
]

const logisticsDetailColumns: ColumnType<LogisticsDetailType>[] = [
  {
    title: '追蹤編號',
    dataIndex: 'trackingNo',
    key: 'trackingNo',
  },
  {
    title: '出貨倉庫',
    dataIndex: 'warehouse',
    key: 'warehouse',
  },
  {
    title: '配送地址',
    dataIndex: 'destination',
    key: 'destination',
  },
  {
    title: '物流公司',
    dataIndex: 'courier',
    key: 'courier',
  },
  {
    title: '預估送達',
    dataIndex: 'estimatedDelivery',
    key: 'estimatedDelivery',
  },
  {
    title: '狀態',
    dataIndex: 'status',
    key: 'status',
  },
]

export const ResultTable: Story = {
  render: () => (
    <Card>
      <Table<DataType> dataSource={data} columns={columns} rowKey='id' />
    </Card>
  ),
}

export const ResultTableWithActions: Story = {
  render: () => (
    <Card>
      <Table<DataType>
        dataSource={data}
        columns={columnsWithActions}
        rowKey='id'
      />
    </Card>
  ),
}

export const ResultTableWithExpand: Story = {
  render: () => (
    <Card>
      <Table<LogisticsOrderType>
        dataSource={logisticsOrders}
        columns={logisticsColumns}
        rowKey='orderNo'
        expandable={{
          expandedRowRender: record => {
            const filteredDetails = logisticsDetails.filter(
              detail => detail.orderNo === record.orderNo
            )
            return (
              <Table<LogisticsDetailType>
                size='small'
                dataSource={filteredDetails}
                columns={logisticsDetailColumns}
                pagination={false}
                rowKey='trackingNo'
              />
            )
          },
        }}
      />
    </Card>
  ),
}

const ResultTableWithSelectionAndOperationWrapper = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }
  return (
    <Card>
      <Flex vertical gap='middle'>
        <Space size='small'>
          <SelectedCount
            selectedCount={selectedRowKeys.length}
            totalCount={data.length}
          />
          <Button>批次動作</Button>
          <Button danger>批次刪除</Button>
        </Space>
        <Table<DataType>
          dataSource={data}
          columns={columns}
          rowSelection={{
            selectedRowKeys,
            onChange: onSelectChange,
          }}
          rowKey='id'
        />
      </Flex>
    </Card>
  )
}

export const ResultTableWithSelectionAndOperation: Story = {
  render: () => <ResultTableWithSelectionAndOperationWrapper />,
}

const COL_TYPE = 'draggable-col-item'

const DraggableBodyRow = ({
  index,
  moveRow,
  ...restProps
}: {
  index: number
  moveRow: (dragIndex: number, hoverIndex: number) => void
} & React.HTMLAttributes<HTMLTableRowElement>) => {
  const ref = useRef<HTMLTableRowElement>(null)

  const [{ handlerId }, drop] = useDrop({
    accept: COL_TYPE,
    collect: monitor => ({
      isOver: monitor.isOver(),
      handlerId: monitor.getHandlerId(),
    }),
    drop: (item: { index: number }) => moveRow(item.index, index),
    hover: (item: { index: number }, monitor) => {
      const dragIndex = item.index
      const hoverIndex = index
      const canDrop = monitor.canDrop()

      if (ref.current && dragIndex !== hoverIndex && canDrop) {
        moveRow(dragIndex, hoverIndex)
        item.index = hoverIndex
      }
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: COL_TYPE,
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drop(drag(ref))

  return (
    <tr
      ref={ref}
      style={{ cursor: 'move', opacity: isDragging ? 0.5 : 1 }}
      data-handler-id={handlerId}
      {...restProps}
    />
  )
}

const ResultTableWithEditableColumnsWrapper = () => {
  const [open, setOpen] = useState(false)
  const [selectedColumns, setSelectedColumns] =
    useState<ColumnType<DataType>[]>(columns)
  const moveRow = (dragIndex: number, hoverIndex: number) => {
    const newColList = [...selectedColumns]
    const draggedRow = selectedColumns[dragIndex]
    newColList.splice(dragIndex, 1)
    newColList.splice(hoverIndex, 0, draggedRow)
    setSelectedColumns(newColList)
  }
  return (
    <>
      <Modal
        open={open}
        title='欄位設定'
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}>
        <Flex gap='middle'>
          <DndProvider backend={HTML5Backend}>
            <Table
              bordered
              size='small'
              pagination={false}
              style={{ flex: 1 }}
              dataSource={selectedColumns}
              rowKey={record => selectedColumns.indexOf(record)}
              components={{
                body: {
                  row: props => {
                    const idx = props['data-row-index'] as number
                    return (
                      <DraggableBodyRow
                        index={idx}
                        moveRow={moveRow}
                        {...props}
                      />
                    )
                  },
                },
              }}
              onRow={(_, index) =>
                ({
                  'data-row-index': index,
                } as React.HTMLAttributes<HTMLTableRowElement>)
              }>
              <Table.Column
                title='已選擇'
                dataIndex='title'
                render={(_, record) => {
                  const { title } = record
                  return (
                    <Checkbox
                      checked={
                        selectedColumns.find(item => item.title === title)
                          ? true
                          : false
                      }
                      onChange={e => {
                        const checked = e.target.checked
                        if (checked) {
                          setSelectedColumns([...selectedColumns, record])
                        } else {
                          setSelectedColumns(
                            selectedColumns.filter(item => item.title !== title)
                          )
                        }
                      }}>
                      {title}
                    </Checkbox>
                  )
                }}
              />
              <Table.Column
                title='排序'
                align='center'
                render={() => <MenuOutlined />}
              />
            </Table>
          </DndProvider>
          <Table
            bordered
            size='small'
            pagination={false}
            style={{ flex: 1 }}
            dataSource={columns.filter(item => !selectedColumns.includes(item))}
            rowKey={record => columns.indexOf(record)}>
            <Table.Column
              title='未選擇'
              dataIndex='title'
              render={(_, record) => {
                const { title } = record
                return (
                  <Checkbox
                    checked={
                      selectedColumns.find(item => item.title === title)
                        ? false
                        : true
                    }
                    onChange={e => {
                      const checked = e.target.checked
                      if (checked) {
                        setSelectedColumns(
                          selectedColumns.filter(item => item.title !== title)
                        )
                      } else {
                        setSelectedColumns([...selectedColumns, record])
                      }
                    }}>
                    {title}
                  </Checkbox>
                )
              }}
            />
          </Table>
        </Flex>
      </Modal>
      <Card>
        <Flex vertical gap='middle'>
          <Flex justify='end'>
            <Button icon={<SettingOutlined />} onClick={() => setOpen(true)}>
              欄位設定
            </Button>
          </Flex>
          <Table<DataType> dataSource={data} columns={columns} rowKey='id' />
        </Flex>
      </Card>
    </>
  )
}

export const ResultTableWithEditableColumns: Story = {
  render: () => <ResultTableWithEditableColumnsWrapper />,
}
