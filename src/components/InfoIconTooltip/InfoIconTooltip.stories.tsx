import type { Meta, StoryObj } from '@storybook/react'
import InfoIconTooltip from './InfoIconTooltip'

const meta: Meta<typeof InfoIconTooltip> = {
  title: 'Components/InfoIconTooltip',
  component: InfoIconTooltip,
  argTypes: {
    title: {
      control: 'text',
      description: '滑鼠懸停時顯示的 tooltip 內容',
      type: 'string',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '提供額外說明的 tooltip。',
  },
}

export const LongText: Story = {
  args: {
    title:
      '這段訊息比較長，展示 tooltip 在資訊多時依然能完整呈現且不會破壞整體排版。',
  },
}

export const RichContentHint: Story = {
  args: {
    title: 'tooltip 支援基本的換行與 HTML 字串，可依需求擴充。',
  },
  parameters: {
    docs: {
      description: {
        story: 'Antd Tooltip 本身支援傳入 ReactNode，必要時可以改為提供自訂樣式內容。',
      },
    },
  },
}

