import type { Meta, StoryObj } from '@storybook/react'
import { Space } from 'antd'
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import DatePicker from '../../components/DatePicker/DatePicker'
import Row from '../../components/Grid/Row'
import Col from '../../components/Grid/Col'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'

const meta: Meta<typeof Card> = {
  title: 'Examples/QueryForm',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

//TODO: 單選、多選、日期範圍、數字填入、Radio

export const Default: Story = {
  render: () => (
    <Card>
      <Form>
        <Row>
          <Col>
            <Input
              label='關鍵字'
              name='keyword'
              placeholder='請輸入關鍵字'
              allowClear
            />
          </Col>
          <Col>
            <Input
              label='關鍵字'
              name='keyword'
              placeholder='請輸入關鍵字'
              allowClear
            />
          </Col>
          <Col>
            <Input
              label='關鍵字'
              name='keyword'
              placeholder='請輸入關鍵字'
              allowClear
            />
          </Col>
          <Col>
            <Select
              label='狀態'
              name='status'
              placeholder='請選擇狀態'
              options={[
                { label: '啟用', value: 'active' },
                { label: '停用', value: 'inactive' },
                { label: '待審核', value: 'pending' },
              ]}
            />
          </Col>
          <Col>
            <DatePicker
              label='開始日期'
              name='startDate'
              placeholder='請選擇開始日期'
            />
          </Col>
        </Row>
        <Row>
          <Col>
              <Space size={8}>
                <Button type='primary' htmlType='submit'>
                  查詢
                </Button>
                <Button htmlType='reset'>重置</Button>
              </Space>
          </Col>
        </Row>
      </Form>
    </Card>
  ),
}

export const WithValidation: Story = {
  render: () => <Card></Card>,
}

export const WithExpand: Story = {
  render: () => <Card></Card>,
}
