import type { Meta, StoryObj } from '@storybook/react'
import RangePicker from './RangePicker'

const meta: Meta<typeof RangePicker> = {
  title: 'Components/RangePicker',
  component: RangePicker,
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
    showTime: {
      control: 'boolean',
      description: '是否顯示時間選擇',
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
    label: '選擇日期範圍',
  },
}

export const Required: Story = {
  args: {
    label: '選擇日期範圍',
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
    label: '選擇日期範圍',
    disabled: true,
  },
}

export const NoClear: Story = {
  args: {
    label: '選擇日期範圍',
    allowClear: false,
  },
}

export const WithTime: Story = {
  args: {
    label: '選擇日期時間範圍',
    showTime: true,
  },
}
