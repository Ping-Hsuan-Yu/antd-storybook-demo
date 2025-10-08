import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 基本使用
export const Default: Story = {
  args: {
    label: '輸入框',
    placeholder: '請輸入內容',
  },
  render: (args) => (
    <Form>
      <Input {...args} />
    </Form>
  ),
}

// 必填欄位
export const Required: Story = {
  args: {
    label: '輸入框',
    placeholder: '請輸入內容',
    required: true,
  },
  render: (args) => (
    <Form>
      <Input {...args} />
    </Form>
  ),
}

// 禁用狀態
export const Disabled: Story = {
  args: {
    label: '輸入框',
    placeholder: '請輸入內容',
    disabled: true,
  },
  render: (args) => (
    <Form>
      <Input {...args} />
    </Form>
  ),
}

// 不允許清除
export const NoClear: Story = {
  args: {
    label: '輸入框',
    placeholder: '請輸入內容',
    allowClear: false,
  },
  render: (args) => (
    <Form>
      <Input {...args} />
    </Form>
  ),
}

// 帶驗證規則
export const WithValidation: Story = {
  args: {
    label: '輸入框',
    placeholder: '請輸入內容',
    required: true,
    rules: [
      { required: true, message: '請輸入內容' },
      { min: 3, message: '至少需要3個字符' },
      { max: 20, message: '最多20個字符' },
    ],
  },
  render: (args) => (
    <Form>
      <Input {...args} />
    </Form>
  ),
}

// 密碼輸入
export const Password: Story = {
  args: {
    label: '密碼',
    placeholder: '請輸入密碼',
    type: 'password',
    required: true,
  },
  render: (args) => (
    <Form>
      <Input {...args} />
    </Form>
  ),
}
