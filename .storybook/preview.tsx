import React, { useEffect, useMemo } from 'react'

import type { Decorator, Preview } from '@storybook/react'

import { ConfigProvider, theme as antdTheme, type ThemeConfig } from 'antd'
import dayjs from 'dayjs'
import locale from 'antd/locale/zh_TW'
import 'dayjs/locale/zh-tw'

dayjs.locale('zh-tw')

const applyRootTheme = (isDark: boolean, backgroundColor: string) => {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  const body = document.body

  root.dataset.theme = isDark ? 'dark' : 'light'
  root.style.backgroundColor = backgroundColor
  root.style.colorScheme = isDark ? 'dark' : 'light'

  if (body) {
    body.style.backgroundColor = backgroundColor
  }

  const mainAreas = document.querySelectorAll<HTMLElement>(
    '.sb-show-main, #storybook-root, .docs-story'
  )

  mainAreas.forEach(node => {
    node.style.backgroundColor = backgroundColor
  })
}

// eslint-disable-next-line react-refresh/only-export-components
const WithAntdTheme: Decorator = (Story, context) => {
  const isDark = context.globals.theme === 'dark'
  const themeConfig = useMemo<ThemeConfig>(
    () => ({
      algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      token: {
        colorSuccess: '#22c55e',
        colorWarning: '#f59e0b',
        colorError: '#dc2626',
        colorLink: '#0ea5e9',
        colorInfo: '#0284c7',
        colorPrimary: '#0284c7',
        wireframe: true,
        boxShadowSecondary: '0px 4px 4px #00000030, 0px 12px 12px #00000015'
      },
      cssVar: true
    }),
    [isDark]
  )
  const colorBgLayout = antdTheme.getDesignToken(themeConfig).colorBgLayout
  
  useEffect(() => {
    applyRootTheme(isDark, colorBgLayout)
  }, [isDark, colorBgLayout])

  return (
    <ConfigProvider locale={locale} theme={themeConfig}>
      <Story />
    </ConfigProvider>
  )
}

const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Light or Dark Theme',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      dynamic: true,
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark', title: 'Dark', icon: 'moon' }
      ]
    }
  }
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: { disable: true }
  },
  globalTypes,
  tags: ['autodocs'],
  decorators: [WithAntdTheme]
}

export default preview
