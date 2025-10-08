import type { Meta, StoryObj } from '@storybook/react'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'text', 'link'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    danger: {
      control: { type: 'boolean' },
    },
    href: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
}

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
}

export const Text: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
  },
}

export const Link: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
  },
}

export const WithIcon: Story = {
  args: {
    type: 'primary',
    icon: <HomeOutlined />,
    children: 'Home',
  },
}

export const Loading: Story = {
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}

export const Danger: Story = {
  args: {
    type: 'primary',
    danger: true,
    children: 'Danger Button',
  },
}

export const IconOnly: Story = {
  args: {
    type: 'primary',
    icon: <UserOutlined />,
    children: '',
  },
}
