# 專案大綱與使用說明

## 目的與定位
- 以 Storybook 呈現的 Ant Design 元件規範專案，提供前端、設計師、PM 的共同語言。
- 將設計規範與互動行為具象化為可調整的 UI，便於跨團隊討論與決策。

## 技術堆疊
- **React 19 + TypeScript 5.9**: 核心框架與類型系統
- **Vite 7**: 開發與建置工具
- **Ant Design 5**: 元件基礎庫，提供設計系統基礎
- **Storybook 9**: 搭配 `@storybook/react-vite`，用於元件文檔與互動展示
- **ESLint**: 含 React Hooks、React Refresh、Storybook 專用外掛
- **Day.js**: 日期處理庫，配置繁體中文 (zh-tw) 本地化

### Storybook 配置特色
- **全域配置**: ConfigProvider 設定繁體中文環境
- **自動文檔生成**: `@storybook/addon-docs` 搭配 `tags: ['autodocs']`
- **Story 發現模式**: `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- **互動控制**: 透過 `argTypes` 定義可調整參數

## 資料夾結構
```
src/
├── components/
│   └── <ComponentName>/
│       ├── <ComponentName>.tsx
│       └── <ComponentName>.stories.tsx
├── stories/
│   └── examples/
│       └── <Scenario>.stories.tsx
│
```
- 單一元件的原始碼與 Storybook story 放在 `src/components/<ComponentName>/`。
- 跨元件的使用情境與流程展示集中在 `src/stories/examples/`。

## 開發與啟動流程
| 指令 | 說明 |
| --- | --- |
| `npm run dev` | 啟動 Vite 開發伺服器。 |
| `npm run storybook` | 啟動 Storybook（預設 http://localhost:6006）。 |
| `npm run build` | 執行 TypeScript 編譯並產出 Vite build。 |
| `npm run preview` | 以本地伺服器預覽 build 結果。 |
| `npm run build-storybook` | 建置 Storybook 靜態站點。 |
| `npm run lint` | 執行 ESLint。 |

## Storybook 命名與分類規則

### 元件分類架構
- **單一元件故事**: `Components/<Category>/<Component>`
  - 例如: `Components/Button`, `Components/Form/Input`, `Components/Layout/Card`
- **跨元件使用情境**: `Examples/<Scenario Name>`
  - 例如: `Examples/QueryForm`, `Examples/Dashboard`, `Examples/UserProfile`

### Story 命名標準
- **必要變體故事**:
  - `Default`: 元件預設狀態，展示基本用法
  - `Primary`: 主要變體（如按鈕類型）
  - `Loading`: 載入狀態
  - `Disabled`: 禁用狀態
- **功能性變體**:
  - `WithIcon`: 搭配圖示的使用方式
  - `IconOnly`: 僅圖示的緊湊版本
  - `Danger`: 危險或警示操作
- **尺寸與布局變體**:
  - `Large`, `Small`: 不同尺寸規格
  - `Vertical`, `Horizontal`: 布局方向變化

### 文檔語言規範
- **所有文檔必須使用繁體中文**
- **Component 描述**: 簡潔說明元件功能與適用情境
- **Story 描述**: 詳細說明該變體的用途、使用時機與設計考量
- **ArgTypes 描述**: 每個 prop 的功能說明，使用簡潔中文描述

## 元件開發標準

### 包裝模式 (Wrapper Pattern)
所有元件遵循一致的 Ant Design 包裝模式:

```typescript
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

### Story 檔案結構要求
1. **Meta 配置**: 必須包含 `title`, `component`, `tags: ['autodocs']`, `parameters.docs.description.component`
2. **ArgTypes 文檔**: 所有可調整 props 需定義 `control`, `description`, `type`
3. **Story 變體**: 提供 `Default` 及主要功能變體
4. **繁體中文**: 所有文檔與內容均使用繁體中文

### 質量保證
- **TypeScript 嚴格模式**: 確保類型安全
- **ESLint 規則**: React Hooks, React Refresh, Storybook 專用規則
- **Node.js 20.18.0+**: 指定運行環境版本

## 版本與發佈（待補）
- 元件版本管控策略
- Storybook 上線與發佈作業流程

## 待辦
- 制定 Storybook 分類層級與命名規則
- 定義協作與審核流程
- 規劃版本管理與發佈策略
