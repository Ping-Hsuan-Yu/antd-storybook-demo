import type { Meta, StoryObj } from '@storybook/react'

import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import LabelWithTooltip from '../../components/LabelWithTooltip/LabelWithTooltip'

const meta: Meta<typeof Form> = {
  title: 'Examples/InputFieldWithTooltip',
  component: Form
}

export default meta
type Story = StoryObj<typeof Form>

export const InputFieldWithTooltip: Story = {
  render: () => (
    <Form>
      <Input label={<LabelWithTooltip label='需要說明的標籤' tooltip='說明文字' />} />
    </Form>
  )
}
