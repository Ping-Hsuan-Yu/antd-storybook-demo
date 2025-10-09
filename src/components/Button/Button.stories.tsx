import type { Meta, StoryObj } from '@storybook/react'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import Button from './Button'
import { Tooltip } from 'antd'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Ant Design 按鈕包裝元件，支援預設、主要、文字、連結、警示、載入、停用與圖示等多種狀態。',
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: '內容',
      type: 'string',
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'text', 'link'],
      description: '按鈕類型',
      type: 'string',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '禁用',
      type: 'boolean',
    },
    loading: {
      control: { type: 'boolean' },
      description: '加載中',
      type: 'boolean',
    },
    danger: {
      control: { type: 'boolean' },
      description: '警示',
      type: 'boolean',
    },
    href: {
      control: { type: 'text' },
      description: '連結',
      type: 'string',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '預設按鈕',
  },
  parameters: {
    docs: {
      description: {
        story: '預設按鈕，用於任何沒有主次之分的操作。',
      },
    },
  },
}

export const Primary: Story = {
  args: {
    type: 'primary',
    children: '主要按鈕',
  },
  parameters: {
    docs: {
      description: {
        story: '主要操作按鈕，建議每個區域僅保留一個以集中使用者焦點。',
      },
    },
  },
}

export const Text: Story = {
  args: {
    type: 'text',
    children: '文字按鈕',
  },
  parameters: {
    docs: {
      description: {
        story: '次要操作文字按鈕，外觀平實以降低權重。',
      },
    },
  },
}

export const Link: Story = {
  args: {
    type: 'link',
    children: '連結',
  },
  parameters: {
    docs: {
      description: {
        story: '連結型按鈕，模擬文字超連結樣式以導向外部或新頁面。',
      },
    },
  },
}

export const WithIcon: Story = {
  args: {
    type: 'primary',
    icon: <HomeOutlined />,
    children: '首頁',
  },
  parameters: {
    docs: {
      description: {
        story: '主要按鈕搭配圖示，強化辨識度並凸顯操作意圖。',
      },
    },
  },
}

export const Loading: Story = {
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading',
  },
  parameters: {
    docs: {
      description: {
        story: '載入中按鈕，提供操作處理時的即時回饋並避免重複提交。',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '禁用按鈕',
  },
  parameters: {
    docs: {
      description: {
        story: '禁用狀態的按鈕，提示操作暫不可用或需要額外條件。',
      },
    },
  },
}

export const Danger: Story = {
  args: {
    type: 'primary',
    danger: true,
    children: '警示按鈕',
  },
  parameters: {
    docs: {
      description: {
        story: '警示用的危險按鈕，適合刪除或不可逆的操作並提醒使用者謹慎。',
      },
    },
  },
}

export const IconOnly: Story = {
  args: {
    type: 'text',
    icon: <UserOutlined />,
  },
  render:(args)=>(
    <Tooltip title="會員">
      <Button {...args}/>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '僅以圖示呈現的按鈕，適合工具列或空間受限的情境，建議搭配提示(Tooltip)。',
      },
    },
  },
}
