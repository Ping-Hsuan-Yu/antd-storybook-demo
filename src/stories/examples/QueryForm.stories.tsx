import type { Meta, StoryObj } from '@storybook/react'
import { Space } from 'antd'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import RangePicker from '../../components/DatePicker/RangePicker'
import Form from '../../components/Form/Form'
import Col from '../../components/Grid/Col'
import Row from '../../components/Grid/Row'
import Input from '../../components/Input/Input'
import Radio from '../../components/Radio/Radio'
import Select from '../../components/Select/Select'

const meta: Meta<typeof Card> = {
  title: 'Examples/QueryForm',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const QueryForm: Story = {
  render: () => (
    <Card>
      <Form>
        <Row>
          <Col>
            <Select
              label='倉庫名稱'
              options={[
                { label: '倉庫1', value: 'warehouse1' },
                { label: '倉庫2', value: 'warehouse2' },
                { label: '倉庫3', value: 'warehouse3' },
              ]}
              required
            />
          </Col>
          <Col>
            <Input label='訂單編號' />
          </Col>
          <Col>
            <RangePicker label='建立時間' />
          </Col>
          <Col>
            <Select
              label='任務狀態'
              mode='multiple'
              options={[
                { label: '啟用', value: 'active' },
                { label: '停用', value: 'inactive' },
                { label: '待審核', value: 'pending' },
              ]}
            />
          </Col>
          <Col>
            <Select
              label='類別'
              options={[
                { label: '一般', value: 'general' },
                { label: '優先', value: 'priority' },
                { label: '緊急', value: 'urgent' },
              ]}
            />
          </Col>
          <Col>
            <Radio
            label='是否啟用'
            options={[
              { label: '是', value: 'yes' },
              { label: '否', value: 'no' },
            ]} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Space size={8}>
              <Button type='primary' htmlType='submit'>
                查詢
              </Button>
              <Button>新增</Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Card>
  ),
}
