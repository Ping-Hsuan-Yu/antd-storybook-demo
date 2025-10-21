import type { Meta, StoryObj } from '@storybook/react'
import DatePicker from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    allowClear: {
      control: 'boolean',
      description: '可否清空',
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
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '選擇日期',
  },
}

export const Required: Story = {
  args: {
    label: '選擇日期',
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
    label: '選擇日期',
    disabled: true,
  },
}

export const NoClear: Story = {
  args: {
    label: '選擇日期',
    allowClear: false,
  },
}
