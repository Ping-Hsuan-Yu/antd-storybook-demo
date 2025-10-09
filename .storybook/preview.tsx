import React from 'react'
import dayjs from 'dayjs';
import { ConfigProvider } from 'antd'
import locale from 'antd/locale/zh_TW'
import type { Preview } from '@storybook/react'

import 'dayjs/locale/zh-tw';

dayjs.locale('zh-tw');

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ConfigProvider locale={locale}>
        {Story()}
      </ConfigProvider>
    ),
  ],
}

export default preview
