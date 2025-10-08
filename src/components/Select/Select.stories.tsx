import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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
    showSearch: {
      control: 'boolean',
      description: '是否顯示搜尋功能',
    },
    mode: {
      control: 'select',
      options: ['multiple', 'tags'],
      description: '選擇模式',
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

const options = [
  { label: '選項一', value: 'option1' },
  { label: '選項二', value: 'option2' },
  { label: '選項三', value: 'option3' },
  { label: '選項四', value: 'option4' },
  { label: '選項五', value: 'option5' },
]

// 基本使用
export const Default: Story = {
  args: {
    label: '選擇器',
    placeholder: '請選擇選項',
    options,
  },
  render: (args) => (
    <Form>
      <Select {...args} />
    </Form>
  ),
}

// 必填欄位
export const Required: Story = {
  args: {
    label: '選擇器',
    placeholder: '請選擇選項',
    required: true,
    options,
  },
  render: (args) => (
    <Form>
      <Select {...args} />
    </Form>
  ),
}

// 禁用狀態
export const Disabled: Story = {
  args: {
    label: '選擇器',
    placeholder: '請選擇選項',
    disabled: true,
    options,
  },
  render: (args) => (
    <Form>
      <Select {...args} />
    </Form>
  ),
}

// 不允許清除
export const NoClear: Story = {
  args: {
    label: '選擇器',
    placeholder: '請選擇選項',
    allowClear: false,
    options,
  },
  render: (args) => (
    <Form>
      <Select {...args} />
    </Form>
  ),
}

// 不顯示搜尋
export const NoSearch: Story = {
  args: {
    label: '選擇器',
    placeholder: '請選擇選項',
    showSearch: false,
    options,
  },
  render: (args) => (
    <Form>
      <Select {...args} />
    </Form>
  ),
}

// 多選模式
export const Multiple: Story = {
  args: {
    label: '多選器',
    placeholder: '請選擇多個選項',
    mode: 'multiple',
    options,
  },
  render: (args) => (
    <Form>
      <Select {...args} />
    </Form>
  ),
}

// 標籤模式
export const Tags: Story = {
  args: {
    label: '標籤選擇器',
    placeholder: '請輸入或選擇標籤',
    mode: 'tags',
    options,
  },
  render: (args) => (
    <Form>
      <Select {...args} />
    </Form>
  ),
}

// 帶驗證規則
export const WithValidation: Story = {
  args: {
    label: '選擇器',
    placeholder: '請選擇選項',
    required: true,
    options,
    rules: [
      { required: true, message: '請選擇選項' },
    ],
  },
  render: (args) => (
    <Form>
      <Select {...args} />
    </Form>
  ),
}
