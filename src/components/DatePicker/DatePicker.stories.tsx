import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import DatePicker from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
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
    label: {
      control: 'text',
      description: '標籤文字',
    },
    placeholder: {
      control: 'text',
      description: '佔位符文字',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 基本使用
export const Default: Story = {
  args: {
    label: '選擇日期',
    placeholder: '請選擇日期',
  },
  render: (args) => (
    <Form>
      <DatePicker {...args} />
    </Form>
  ),
}

// 必填欄位
export const Required: Story = {
  args: {
    label: '選擇日期',
    placeholder: '請選擇日期',
    required: true,
  },
  render: (args) => (
    <Form>
      <DatePicker {...args} />
    </Form>
  ),
}

// 禁用狀態
export const Disabled: Story = {
  args: {
    label: '選擇日期',
    placeholder: '請選擇日期',
    disabled: true,
  },
  render: (args) => (
    <Form>
      <DatePicker {...args} />
    </Form>
  ),
}

// 不允許清除
export const NoClear: Story = {
  args: {
    label: '選擇日期',
    placeholder: '請選擇日期',
    allowClear: false,
  },
  render: (args) => (
    <Form>
      <DatePicker {...args} />
    </Form>
  ),
}

// 帶驗證規則
export const WithValidation: Story = {
  args: {
    label: '選擇日期',
    placeholder: '請選擇日期',
    required: true,
    rules: [
      { required: true, message: '請選擇日期' },
      {
        validator: (_, value) => {
          if (value && value.isAfter(new Date())) {
            return Promise.reject(new Error('不能選擇未來日期'))
          }
          return Promise.resolve()
        },
      },
    ],
  },
  render: (args) => (
    <Form>
      <DatePicker {...args} />
    </Form>
  ),
}
