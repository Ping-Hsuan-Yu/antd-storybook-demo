import type { Meta, StoryObj } from '@storybook/react'
import type { CSSProperties } from 'react'
import { Flex, Grid, type RowProps } from 'antd'
import Row from './Row'
import Col from './Col'

const cellStyle: CSSProperties = {
  background: 'var(--ant-color-primary-bg)',
  border: '1px dashed var(--ant-color-primary)',
  borderRadius: 'var(--ant-border-radius)',
  color: 'var(--ant-color-primary)',
  padding: 'var(--ant-padding)',
  textAlign: 'center',
}

const helperTextStyle: CSSProperties = {
  color: 'var(--ant-color-text-secondary)',
  fontSize: 'var(--ant-font-size-sm)',
  marginTop: 'var(--ant-margin-sm)',
}

type GridArgs = RowProps & {
  colCount?: number
  rowCount?: number
  colPerRow?: number
}

const GUTTER_MAP = {
  xs: 8,
  sm: 8,
  md: 16,
  lg: 16,
  xl: 36,
  xxl: 36,
} as const

const BREAKPOINT_ORDER: Array<keyof typeof GUTTER_MAP> = [
  'xxl',
  'xl',
  'lg',
  'md',
  'sm',
  'xs',
]

const resolveFlexGap = (
  breakpoints: Partial<Record<keyof typeof GUTTER_MAP, boolean>>,
) => {
  const activeKey = BREAKPOINT_ORDER.find((key) => breakpoints[key])
  return activeKey ? GUTTER_MAP[activeKey] : GUTTER_MAP.md
}

const meta: Meta<GridArgs> = {
  title: 'Layout/Grid',
  component: Row,
}

export default meta
type Story = StoryObj<GridArgs>

export const Default: Story = {
  args: {
    colCount: 6,
  },
  argTypes: {
    colCount: {
      control: { type: 'number', min: 1, max: 24, step: 1 },
      description: '查看單一 Row 中顯示不同 Col 數量的效果。',
    },
  },
  render: ({ colCount = 6 }) => {
    const safeColCount = Math.max(1, Math.floor(colCount))

    return (
      <Row>
        {Array.from({ length: safeColCount }).map((_, index) => (
          <Col key={index}>
            <div style={cellStyle}>Col {index + 1}</div>
          </Col>
        ))}
      </Row>
    )
  },
  parameters: {
    docs: {
      description: {
        story: '查看單一 Row 的排列效果。',
      },
    },
  },
}

export const MultipleRows: Story = {
  args: {
    rowCount: 2,
    colPerRow: 3,
  },
  argTypes: {
    rowCount: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: '要渲染的 Row 數量。',
      table: { type: { summary: 'number' } },
    },
    colPerRow: {
      control: { type: 'number', min: 1, max: 12, step: 1 },
      description: '每個 Row 要放幾個 Col。',
      table: { type: { summary: 'number' } },
    },
  },
  render: ({ rowCount = 2, colPerRow = 3 }) => {
    const Demo = () => {
      const breakpoints = Grid.useBreakpoint()
      const safeRowCount = Math.max(1, Math.floor(rowCount))
      const safeColPerRow = Math.max(1, Math.floor(colPerRow))
      const flexGap = resolveFlexGap(breakpoints)

      return (
        <Flex vertical gap={flexGap}>
          {Array.from({ length: safeRowCount }).map((_, rowIndex) => (
            <Row key={rowIndex}>
              {Array.from({ length: safeColPerRow }).map((_, colIndex) => (
                <Col key={colIndex}>
                  <div style={cellStyle}>
                    Row {rowIndex + 1} - Col {colIndex + 1}
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </Flex>
      )
    }

    return <Demo />
  },
  parameters: {
    docs: {
      description: {
        story: '可自由調整 Row 與 Col 的數量，用於模擬更複雜的布局需求。',
      },
    },
  },
}

export const ResponsiveBreakpoints: Story = {
  render: () => (
    <Row>
      {['Desktop ≥1200px', 'Tablet ≥768px', 'Mobile <768px'].map((label) => (
        <Col key={label}>
          <div style={{ ...cellStyle, minHeight: 96 }}>
            <strong>{label}</strong>
            <div style={helperTextStyle}>
              xs:24 sm:12 md:12 lg:8 xl:6 xxl:4
            </div>
            <div style={helperTextStyle}>
              調整 Storybook viewport 觀察欄位如何自動換行。
            </div>
          </div>
        </Col>
      ))}
      <Col>
        <div style={{...cellStyle, minHeight: 96}}>Col 1</div>
      </Col>
      <Col>
        <div style={{...cellStyle, minHeight: 96}}>Col 2</div>
      </Col>
      <Col>
        <div style={{...cellStyle, minHeight: 96}}>Col 3</div>
      </Col>
    </Row>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '範例提示預設斷點設定，透過 Storybook viewport 工具切換不同裝置寬度即可觀察欄位堆疊變化。',
      },
    },
  },
}

