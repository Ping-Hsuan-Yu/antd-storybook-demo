import type { Meta, StoryObj } from '@storybook/react'
import Title from './Title'

const meta: Meta<typeof Title> = {
  title: 'Components/Typography/Title',
  component: Title,
  argTypes: {
    level: {
      type: 'number',
      control: { type: 'number', min: 1, max: 5, step: 1 },
      description: '標題等級',
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    level: 1,
    children: 'H1 Title 標題',
  },
}

export const H2: Story = {
  args: {
    level: 2,
    children: 'H2 Title 標題',
  },
}

export const H3: Story = {
  args: {
    level: 3,
    children: 'H3 Title 標題',
  },
}

export const H4: Story = {
  args: {
    level: 4,
    children: 'H4 Title 標題',
  },
}

export const H5: Story = {
  args: {
    level: 2,
    children: 'H5 Title 標題',
  },
}