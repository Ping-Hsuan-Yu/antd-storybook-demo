import type { Meta, StoryObj } from '@storybook/react'
import Link from './Link'

const meta: Meta<typeof Link> = {
  title: 'Components/Typography/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
   
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Link 連結',
    href: 'https://ant.design/',
    target: '_blank',
  },
}
