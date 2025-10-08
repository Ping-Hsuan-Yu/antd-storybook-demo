import type { Meta, StoryObj } from '@storybook/react'
import Title from './Title'

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: '標題級別',
    },
    children: {
      control: 'text',
      description: '標題內容',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 一級標題
export const H1: Story = {
  args: {
    level: 1,
    children: '一級標題',
  },
}

// 二級標題
export const H2: Story = {
  args: {
    level: 2,
    children: '二級標題',
  },
}

// 三級標題
export const H3: Story = {
  args: {
    level: 3,
    children: '三級標題',
  },
}

// 四級標題
export const H4: Story = {
  args: {
    level: 4,
    children: '四級標題',
  },
}

// 五級標題
export const H5: Story = {
  args: {
    level: 5,
    children: '五級標題',
  },
}

// 長標題內容
export const LongTitle: Story = {
  args: {
    level: 2,
    children: '這是一個很長的標題內容，用來測試標題元件的顯示效果',
  },
}

// 特殊字符標題
export const SpecialCharacters: Story = {
  args: {
    level: 2,
    children: '特殊標題：!@#$%^&*()_+-=[]{}|;:,.<>?',
  },
}

// 數字標題
export const NumberTitle: Story = {
  args: {
    level: 2,
    children: '2024年度報告',
  },
}

// 混合內容標題
export const MixedContent: Story = {
  args: {
    level: 2,
    children: '混合標題：文字123 + 符號!@# + 中文',
  },
}

// 所有級別對比
export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Title level={1}>一級標題</Title>
      <Title level={2}>二級標題</Title>
      <Title level={3}>三級標題</Title>
      <Title level={4}>四級標題</Title>
      <Title level={5}>五級標題</Title>
    </div>
  ),
}
