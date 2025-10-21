import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    allowClear: {
      control: 'boolean',
      description: '可否清空',
      table: { type: { summary: 'boolean' } },
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      type: 'boolean',
    },
    required: {
      control: 'boolean',
      description: '是否必填',
      type: 'boolean',
    },
    label: {
      control: 'text',
      description: '標籤文字',
      type: 'string',
    },
    placeholder: {
      control: 'text',
      description: '提示文字',
      type: 'string',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '輸入內容',
    placeholder: '請輸入內容',
  },
}

export const Required: Story = {
  args: {
    label: '輸入內容',
    placeholder: '請輸入內容',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: '必填時，不得清空',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    label: '輸入內容',
    placeholder: '請輸入內容',
    disabled: true,
  },
}

export const NoClear: Story = {
  args: {
    label: '輸入內容',
    placeholder: '請輸入內容',
    allowClear: false,
  },
}
