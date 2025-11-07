import type { Meta, StoryObj } from '@storybook/react'
import SelectedCount from './SelectedCount'

const meta: Meta<typeof SelectedCount> = {
  title: 'Components/SelectedCount',
  component: SelectedCount,
  argTypes: {
    selectedCount: {
      control: { type: 'number', min: 0 },
      description: '目前已選取的資料筆數',
      type: 'number',
    },
    totalCount: {
      control: { type: 'number', min: 0 },
      description: '可供選取的資料總筆數',
      type: 'number',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    selectedCount: 12,
    totalCount: 48,
  },
}

export const AllSelected: Story = {
  args: {
    selectedCount: 20,
    totalCount: 20,
  },
  parameters: {
    docs: {
      description: {
        story: '當全部資料都被選取時的顯示狀態。',
      },
    },
  },
}

export const Empty: Story = {
  args: {
    selectedCount: 0,
    totalCount: 50,
  },
  parameters: {
    docs: {
      description: {
        story: '尚未選取任何資料時，仍顯示總筆數。',
      },
    },
  },
}

