import type { Meta, StoryObj } from '@storybook/react'
import Text from './Text'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'Text 組件用於顯示文字內容，支援複製功能。',
      },
    },
  },
  argTypes: {
    copyable: {
      control: 'boolean',
      description: '是否可複製',
    },
    children: {
      control: 'text',
      description: '文字內容',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 基本使用
export const Default: Story = {
  args: {
    children: '這是一段基本文字',
  },
}

// 可複製文字
export const Copyable: Story = {
  args: {
    children: '這是一段可複製的文字',
    copyable: true,
  },
  parameters: {
    docs: {
      description: {
        story: '範例：啟用 copyable 後會顯示複製按鈕。',
      },
    },
  },
}

// 長文字內容
export const LongText: Story = {
  args: {
    children: '這是一段很長的文字內容，用來測試文字元件的顯示效果。這段文字包含了多個句子，可以更好地展示文字元件的排版和顯示效果。',
  },
}

// 可複製的長文字
export const CopyableLongText: Story = {
  args: {
    children: '這是一段很長的可複製文字內容，用來測試文字元件的顯示效果。這段文字包含了多個句子，可以更好地展示文字元件的排版和顯示效果。',
    copyable: true,
  },
}

// 特殊字符
export const SpecialCharacters: Story = {
  args: {
    children: '特殊字符：!@#$%^&*()_+-=[]{}|;:,.<>?',
    copyable: true,
  },
}

// 數字內容
export const NumberContent: Story = {
  args: {
    children: '1234567890',
    copyable: true,
  },
}

// 混合內容
export const MixedContent: Story = {
  args: {
    children: '混合內容：文字123 + 符號!@# + 中文',
    copyable: true,
  },
}
