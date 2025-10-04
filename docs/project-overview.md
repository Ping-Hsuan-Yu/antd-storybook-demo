# 專案大綱與使用說明

## 目的與定位
- 以 Storybook 呈現的 Ant Design 元件規範專案，提供前端、設計師、PM 的共同語言。
- 將設計規範與互動行為具象化為可調整的 UI，便於跨團隊討論與決策。

## 技術堆疊
- React 19 + TypeScript
- Vite 7 作為開發與建置工具
- Ant Design 5 作為元件基礎
- Storybook 9 搭配 `@storybook/react-vite`
- ESLint（含 React Hooks、React Refresh、Storybook 外掛）

## 資料夾結構
```
src/
  components/
    <ComponentName>/
      index.tsx
      <ComponentName>.stories.tsx
  stories/
    examples/
      <Scenario>.stories.tsx
    (Storybook 範例初始化檔案)
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

## 命名與分類（待補）
- Storybook 元件分類規則
- 範例情境命名原則

## 協作流程（待補）
- 新需求由誰建立 issue / story
- Storybook 情境更新流程
- 評審 / 驗收對齊方式

## 版本與發佈（待補）
- 元件版本管控策略
- Storybook 上線與發佈作業流程

## 待辦
- 制定 Storybook 分類層級與命名規則
- 定義協作與審核流程
- 規劃版本管理與發佈策略
