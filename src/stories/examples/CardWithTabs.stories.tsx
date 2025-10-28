import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Card from '../../components/Card/Card'
import { Divider, Flex, Space, Table } from 'antd'
import Col from '../../components/Grid/Col'
import Row from '../../components/Grid/Row'
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Select from '../../components/Select/Select'

const meta: Meta<typeof Card> = {
  title: 'Examples/CardWithTabs',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

const CardWithTabsWrapper = () => {
  const [activeTabKey, setActiveTabKey] = useState('tab1')

  const onTabChange = (key: string) => {
    setActiveTabKey(key)
  }

  const tabList = [
    {
      key: 'tab1',
      label: '客戶查詢',
    },
    {
      key: 'tab2',
      label: '批次維護',
    },
  ]

  type Customer = {
    id: string
    name: string
    email: string
    status: 'Active' | 'Inactive'
    createdAt: string
  }

  const customerColumns = [
    { title: '客戶名稱', dataIndex: 'name', key: 'name' },
    { title: '電子郵件', dataIndex: 'email', key: 'email' },
    {
      title: '狀態',
      dataIndex: 'status',
      key: 'status',
      render: (value: Customer['status']) => (value === 'Active' ? '啟用' : '停用'),
    },
    { title: '建立日期', dataIndex: 'createdAt', key: 'createdAt' },
  ]

  const customerData: Customer[] = [
    {
      id: 'c_1001',
      name: 'Acme Corp.',
      email: 'ops@acme.com',
      status: 'Active',
      createdAt: '2024-07-12',
    },
    {
      id: 'c_1002',
      name: 'Blue Ocean Ltd.',
      email: 'it@blueocean.io',
      status: 'Inactive',
      createdAt: '2023-11-03',
    },
    {
      id: 'c_1003',
      name: 'Skyline Ventures',
      email: 'admin@skyline.vc',
      status: 'Active',
      createdAt: '2025-02-18',
    },
  ]

  type UploadLog = {
    id: string
    filename: string
    result: 'Success' | 'Partial' | 'Failed'
    count: number
    uploader: string
    uploadedAt: string
    note?: string
  }

  const uploadColumns = [
    { title: '檔名', dataIndex: 'filename', key: 'filename' },
    {
      title: '處理結果',
      dataIndex: 'result',
      key: 'result',
      render: (v: UploadLog['result']) =>
        v === 'Success' ? '成功' : v === 'Partial' ? '部分成功' : '失敗',
    },
    { title: '筆數', dataIndex: 'count', key: 'count' },
    { title: '上傳者', dataIndex: 'uploader', key: 'uploader' },
    { title: '上傳時間', dataIndex: 'uploadedAt', key: 'uploadedAt' },
    { title: '備註', dataIndex: 'note', key: 'note' },
  ]

  const uploadData: UploadLog[] = [
    {
      id: 'u_2001',
      filename: 'customers_2025-10-01.csv',
      result: 'Success',
      count: 350,
      uploader: 'jerry.chen',
      uploadedAt: '2025-10-01 09:21',
      note: '新增與更新皆完成',
    },
    {
      id: 'u_2002',
      filename: 'customers_2025-09-20.xlsx',
      result: 'Partial',
      count: 120,
      uploader: 'vivian.liu',
      uploadedAt: '2025-09-20 14:07',
      note: '10 筆格式錯誤已忽略',
    },
    {
      id: 'u_2003',
      filename: 'customers_2025-09-15.csv',
      result: 'Failed',
      count: 0,
      uploader: 'ops.bot',
      uploadedAt: '2025-09-15 02:33',
      note: '欄位對應設定缺失',
    },
  ]

  const contentList: Record<string, React.ReactNode> = {
    tab1: (
      <Flex gap='small' vertical>
        <Form>
          <Row>
            <Col>
              <Input label='客戶名稱' placeholder='輸入關鍵字，例如 Acme' />
            </Col>
            <Col>
              <Select
                label='狀態'
                options={[
                  { label: '全部', value: '' },
                  { label: '啟用', value: 'Active' },
                  { label: '停用', value: 'Inactive' },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Space size='small'>
                <Button type='primary'>查詢</Button>
                <Button>新增客戶</Button>
              </Space>
            </Col>
          </Row>
        </Form>
        <Divider />
        <Table
          columns={customerColumns}
          dataSource={customerData}
          rowKey='id'
        />
      </Flex>
    ),
    tab2: (
      <Flex gap='small' vertical>
        <Form>
          <Row>
            <Col>
              <Input label='批次任務名稱' placeholder='例如 客戶資料更新' />
            </Col>
            <Col>
              <Select
                label='檔案類型'
                options={[
                  { label: 'CSV', value: 'csv' },
                  { label: 'Excel (XLSX)', value: 'xlsx' },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Space size='small'>
                <Button type='primary'>查詢</Button>
                <Button>上傳檔案</Button>
              </Space>
            </Col>
          </Row>
        </Form>
        <Divider />
        <Table
          columns={uploadColumns}
          dataSource={uploadData}
          rowKey='id'
        />
      </Flex>
    ),
  }

  return (
    <Card
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={onTabChange}>
      {contentList[activeTabKey]}
    </Card>
  )
}

export const WithTabs: Story = {
  render: () => <CardWithTabsWrapper />,
}
