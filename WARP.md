# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an Ant Design 5 component specification and demonstration project built with React 19, TypeScript, and Storybook 9. The project serves as a shared design language between frontend developers, designers, and product managers by providing interactive UI components with adjustable parameters.

**Technology Stack:**
- React 19 + TypeScript 5.9
- Vite 7 (development and build tooling)
- Ant Design 5 (component foundation)
- Storybook 9 with `@storybook/react-vite`
- ESLint with React Hooks, React Refresh, and Storybook plugins
- Day.js with Traditional Chinese (zh-tw) locale

## Development Commands

**Primary Development:**
```bash
npm run storybook        # Start Storybook development server (http://localhost:6006)
npm run dev              # Start Vite development server
npm run lint             # Run ESLint
```

**Build and Preview:**
```bash
npm run build            # TypeScript compilation + Vite build
npm run build-storybook  # Build Storybook static site
npm run preview          # Preview built Vite application
```

**Testing Components:**
- Use Storybook controls to test component variants and props interactively
- Navigate to specific stories via URL: `http://localhost:6006/?path=/story/components-button--primary`

## Architecture and Code Structure

### Component Organization
```
src/
├── components/
│   └── <ComponentName>/
│       ├── <ComponentName>.tsx        # Component implementation (wrapper around Ant Design)
│       └── <ComponentName>.stories.tsx # Storybook stories and documentation
└── stories/
    └── examples/
        └── <Scenario>.stories.tsx     # Cross-component usage scenarios
```

### Component Implementation Pattern
All components follow a consistent wrapper pattern around Ant Design components:

```typescript path=null start=null
import { ComponentName as AntdComponentName, type ComponentNameProps } from 'antd'

const ComponentName = ({ prop1, prop2, ...otherProps }: ComponentNameProps) => {
  return (
    <AntdComponentName
      prop1={prop1}
      prop2={prop2}
      {...otherProps}
    />
  )
}

export default ComponentName
```

### Storybook Configuration
- **Global Configuration:** Located in `.storybook/`
- **Preview Setup:** Configured with Ant Design's Traditional Chinese locale and ConfigProvider
- **Story Discovery:** Auto-discovers stories matching pattern `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- **Documentation:** Uses `@storybook/addon-docs` with auto-generated docs enabled

### Form and Layout Components
- **Forms:** Use `layout="vertical"` by default for consistent spacing
- **Grid System:** Based on Ant Design's Row/Col with responsive breakpoints
- **Spacing:** Managed through Ant Design's Space component and design tokens

## Development Guidelines

### Component Development
1. **Wrapper Pattern:** All components are thin wrappers around Ant Design components
2. **Props Documentation:** Use Storybook `argTypes` to document commonly used props, value ranges, and defaults
3. **Story Categories:**
   - `Components/<Category>/<Component>` for individual components
   - `Examples/<Scenario Name>` for cross-component scenarios

### Storybook Story Requirements

**Meta Configuration Pattern:**
```typescript path=null start=null
const meta: Meta<typeof Component> = {
  title: 'Components/<Category>/<Component>',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '元件的中文描述，說明功能與用途'
      },
    },
  },
  argTypes: {
    // 詳細的 props 文檔化
  },
}
```

**ArgTypes Documentation Standards:**
- 所有可調整的 props 需透過 `argTypes` 定義
- 每個 prop 需包含 `control`、`description`（繁體中文）、`type`
- Select 類型需提供完整的 `options` 陣列
- 描述應簡潔明確，說明 prop 的功能與影響

**Story Configuration Requirements:**
- 每個 Story 需包含 `args` 定義預設值
- 使用 `parameters.docs.description.story` 提供中文說明
- 說明應描述該變體的用途、使用時機與設計考量
- 特殊渲染需求使用 `render` 函數（如 IconOnly 配合 Tooltip）

**必要 Story 變體:**
- `Default`: 元件預設狀態
- 主要變體: 根據元件類型提供（如 Button 的 Primary、Text、Link）
- `Loading`: 載入狀態（如適用）
- `Disabled`: 禁用狀態
- 特殊狀態: 如 `Danger`、`WithIcon`、`IconOnly` 等
- 每個變體需有對應的中文描述說明使用情境

### Internationalization
- **Locale Configuration**: Project is configured for Traditional Chinese (zh-tw)
- **Day.js Setup**: Day.js locale is set to zh-tw in Storybook preview configuration
- **Documentation Language**: All Storybook documentation must use Traditional Chinese:
  - Component descriptions in `parameters.docs.description.component`
  - Story descriptions in `parameters.docs.description.story`
  - ArgTypes descriptions for all props
  - Story args content (button text, labels, placeholders)
- **Content Standards**:
  - Button text: Use meaningful Chinese labels (主要按鈕、預設按鈕、文字按鈕)
  - Form labels and placeholders in Traditional Chinese
  - Error messages and validation text in Chinese
- **Accessibility**: Provide Chinese `aria-label` and `title` attributes where needed

### Code Quality
- Node.js 20.18.0+ required (specified in package.json engines)
- ESLint configuration includes React Hooks, React Refresh, and Storybook-specific rules
- TypeScript strict mode enabled with separate configs for app and Node.js

## Component Categories

**Implemented Components:**
- **Form Controls:** Button, Input, Select, DatePicker/RangePicker
- **Typography:** Text, Title (with level 1-5 support)
- **Layout:** Form, Card, Grid (Row/Col)

**Story Examples:**
- `QueryForm.stories.tsx` demonstrates form layout with multiple input types, validation, and submission patterns

## Design System Integration

The project uses CSS custom properties (design tokens) for consistent styling:
- Colors: `var(--color-primary)`, `var(--color-text-default)`, etc.
- Spacing: `var(--space-xs)`, `var(--space-md)`, `var(--space-lg)`
- Shadows: `var(--shadow-sm)`

These tokens are referenced in the component specifications but not yet implemented - they should be defined in a future `theme.ts` or CSS variables file.

## Project Status

This is an active development project with comprehensive component specifications documented in `docs/component-spec.md`. The codebase currently implements basic component wrappers with full Storybook documentation, serving as a foundation for design system standardization.