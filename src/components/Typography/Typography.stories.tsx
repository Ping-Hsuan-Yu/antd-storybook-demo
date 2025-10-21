import type { Meta, StoryObj } from '@storybook/react'
import type { CSSProperties } from 'react'
import Typography from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Typography 元件整合了標題、文字與連結，並展示多種狀態與樣式。',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
}

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
}

export const Overview: Story = {
  render: () => (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <Typography.Text strong>Title Levels</Typography.Text>
        <Typography.Title level={1}>H1 一級標題</Typography.Title>
        <Typography.Title level={2}>H2 二級標題</Typography.Title>
        <Typography.Title level={3}>H3 三級標題</Typography.Title>
        <Typography.Title level={4}>H4 四級標題</Typography.Title>
        <Typography.Title level={5}>H5 五級標題</Typography.Title>
      </div>

      <div style={sectionStyle}>
        <Typography.Text strong>Text Status</Typography.Text>
        <Typography.Text>Default 預設文字</Typography.Text>
        <Typography.Text type="secondary">Secondary 次要文字</Typography.Text>
        <Typography.Text type="success">Success 成功狀態文字</Typography.Text>
        <Typography.Text type="warning">Warning 警告狀態文字</Typography.Text>
        <Typography.Text type="danger">Danger 錯誤狀態文字</Typography.Text>
        <Typography.Text disabled>Disabled 停用文字</Typography.Text>
      </div>

      <div style={sectionStyle}>
        <Typography.Text strong>Decorations</Typography.Text>
        <Typography.Text mark>Mark 標記文字</Typography.Text>
        <Typography.Text underline>Underline 底線文字</Typography.Text>
        <Typography.Text delete>Delete 刪除線文字</Typography.Text>
        <Typography.Text strong>Strong 強調文字</Typography.Text>
        <Typography.Text italic>Italic 斜體文字</Typography.Text>
      </div>

      <div style={sectionStyle}>
        <Typography.Text strong>Link and Copyable</Typography.Text>
        <Typography.Link href="https://ant.design" target="_blank">
          Link 文字連結
        </Typography.Link>
        <Typography.Text copyable>Copyable 可複製文字</Typography.Text>
      </div>
    </div>
  ),
}
