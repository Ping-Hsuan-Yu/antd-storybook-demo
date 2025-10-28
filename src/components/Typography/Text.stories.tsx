import type { Meta, StoryObj } from '@storybook/react'
import  Text from './Text'

const meta: Meta<typeof Text> = {
  title: 'Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: 'string',
      control: { type: 'select' , defaultValue: 'default'},
      options: ['default', 'secondary', 'success', 'warning', 'danger'],
      description: '文字類型',
    },
    disabled: {
      type: 'boolean',
      description: '禁用樣式',
    },
    mark: {
      type: 'boolean',
      description: '標記樣式',
    },
    underline: {
      type: 'boolean',
      description: '底線樣式',
    },
    delete: {
      type: 'boolean',
      description: '刪除線樣式',
    },
    strong: {
      type: 'boolean',
      description: '強調樣式',
    },
    italic: {
      type: 'boolean',
      description: '斜體樣式',
    },
    copyable: {
      type: 'boolean',
      description: '可複製文字',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default 預設文字',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary 次要文字',
    type: 'secondary',
  },
}

export const Success: Story = {
  args: {
    children: 'Success 成功狀態文字',
    type: 'success',
  },
}

export const Warning: Story = {
  args: {
    children: 'Warning 警告狀態文字',
    type: 'warning',
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger 錯誤狀態文字',
    type: 'danger',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled 停用文字',
    disabled: true,
  },
}

export const Mark: Story = {
  args: {
    children: 'Mark 標記文字',
    mark: true,
  },
}

export const Underline: Story = {
  args: {
    children: 'Underline 底線文字',
    underline: true,
  },
}