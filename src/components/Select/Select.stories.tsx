import type { Meta, StoryObj } from '@storybook/react'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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
    showSearch: {
      control: 'boolean',
      description: '是否顯示搜尋功能',
      type: 'boolean',
    },
    mode: {
      control: 'select',
      description: '選擇模式',
      options: ['multiple', 'tags'],
      type: 'string',
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

const options = [
  { label: '選項一', value: 'option1' },
  { label: '選項二', value: 'option2' },
  { label: '選項三', value: 'option3' },
  { label: '選項四', value: 'option4' },
  { label: '選項五', value: 'option5' },
]

export const Default: Story = {
  args: {
    label: '選擇項目',
    placeholder: '請選擇選項',
    options,
  },
}

export const Required: Story = {
  args: {
    label: '選擇項目',
    placeholder: '請選擇選項',
    required: true,
    options,
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
    label: '選擇項目',
    placeholder: '請選擇選項',
    disabled: true,
    options,
  },
}

export const NoClear: Story = {
  args: {
    label: '選擇項目',
    placeholder: '請選擇選項',
    allowClear: false,
    options,
  },
}

export const NoSearch: Story = {
  args: {
    label: '選擇項目',
    placeholder: '請選擇選項',
    showSearch: false,
    options,
  },
}

export const Multiple: Story = {
  args: {
    label: '多選項目',
    placeholder: '請選擇多個選項',
    mode: 'multiple',
    options,
  },
}

export const Tags: Story = {
  args: {
    label: '標籤選擇器',
    placeholder: '請輸入或選擇標籤',
    mode: 'tags',
    options,
  },
}
