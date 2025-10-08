import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import RangePicker from './RangePicker'

const meta: Meta<typeof RangePicker> = {
  title: 'Components/RangePicker',
  component: RangePicker,
  argTypes: {
    allowClear: {
      control: 'boolean',
      description: '是否顯示清除按鈕',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    required: {
      control: 'boolean',
      description: '是否必填',
    },
    showTime: {
      control: 'boolean',
      description: '是否顯示時間選擇',
    },
    label: {
      control: 'text',
      description: '標籤文字',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 基本使用
export const Default: Story = {
  args: {
    label: '日期範圍',
  },
  render: (args) => (
    <Form>
      <RangePicker {...args} />
    </Form>
  ),
}

// 必填欄位
export const Required: Story = {
  args: {
    label: '日期範圍',
    required: true,
  },
  render: (args) => (
    <Form>
      <RangePicker {...args} />
    </Form>
  ),
}

// 禁用狀態
export const Disabled: Story = {
  args: {
    label: '日期範圍',
    disabled: true,
  },
  render: (args) => (
    <Form>
      <RangePicker {...args} />
    </Form>
  ),
}

// 不允許清除
export const NoClear: Story = {
  args: {
    label: '日期範圍',
    allowClear: false,
  },
  render: (args) => (
    <Form>
      <RangePicker {...args} />
    </Form>
  ),
}

// 顯示時間選擇
export const WithTime: Story = {
  args: {
    label: '日期時間範圍',
    showTime: true,
  },
  render: (args) => (
    <Form>
      <RangePicker {...args} />
    </Form>
  ),
}

// 帶時間的必填欄位
export const RequiredWithTime: Story = {
  args: {
    label: '日期時間範圍',
    showTime: true,
    required: true,
  },
  render: (args) => (
    <Form>
      <RangePicker {...args} />
    </Form>
  ),
}

// 帶驗證規則
export const WithValidation: Story = {
  args: {
    label: '日期範圍',
    required: true,
    rules: [
      { required: true, message: '請選擇日期範圍' },
      {
        validator: (_, value) => {
          if (value && value[0] && value[1]) {
            const start = value[0]
            const end = value[1]
            if (start.isAfter(end)) {
              return Promise.reject(new Error('開始日期不能晚於結束日期'))
            }
            if (end.diff(start, 'days') > 30) {
              return Promise.reject(new Error('日期範圍不能超過30天'))
            }
          }
          return Promise.resolve()
        },
      },
    ],
  },
  render: (args) => (
    <Form>
      <RangePicker {...args} />
    </Form>
  ),
}

// 帶時間的驗證規則
export const WithTimeValidation: Story = {
  args: {
    label: '日期時間範圍',
    showTime: true,
    required: true,
    rules: [
      { required: true, message: '請選擇日期時間範圍' },
      {
        validator: (_, value) => {
          if (value && value[0] && value[1]) {
            const start = value[0]
            const end = value[1]
            if (start.isAfter(end)) {
              return Promise.reject(new Error('開始時間不能晚於結束時間'))
            }
            if (end.diff(start, 'hours') > 72) {
              return Promise.reject(new Error('時間範圍不能超過72小時'))
            }
          }
          return Promise.resolve()
        },
      },
    ],
  },
  render: (args) => (
    <Form>
      <RangePicker {...args} />
    </Form>
  ),
}
