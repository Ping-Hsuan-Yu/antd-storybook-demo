import type { Meta, StoryObj } from '@storybook/react'
import LabelWithTooltip from './LabelWithTooltip'

const meta: Meta<typeof LabelWithTooltip> = {
  title: 'Components/LabelWithTooltip',
  component: LabelWithTooltip,
  argTypes: {
    label: {
      control: 'text',
      description: '顯示於文字左側的主要標籤內容',
      type: 'string',
    },
    tooltip: {
      control: 'text',
      description: '滑鼠懸停在提示圖示時顯示的說明文字',
      type: 'string',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '欄位標籤',
    tooltip: '提供欄位的補充說明。',
  },
}

export const LongTooltip: Story = {
  args: {
    label: '欄位標籤',
    tooltip:
      '這段說明比較長，適合用來解釋複雜欄位，滑鼠移到圖示上會彈出完整內容。',
  },
  parameters: {
    docs: {
      description: {
        story: '展示 tooltip 內容較長時仍保持排版整齊。',
      },
    },
  },
}


