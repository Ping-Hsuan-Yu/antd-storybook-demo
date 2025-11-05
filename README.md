# antd-storybook-demo

## Overview
- 使用 React、TypeScript、Vite 與 Antd 建構的 UI 元件範例專案，Storybook 作為獨立設計系統 Playground。
- 內建 Chromatic 腳本，方便將 Storybook 發佈至雲端並執行 Visual Regression。
- 所有元件皆集中於 `src/components`，同一資料夾提供對應的 Storybook stories 以利維護。

## Quick Start
1. 安裝 Node.js `>= 20.18.0`。
2. 安裝相依：`npm install`
3. 本地開發：`npm run dev`（預設在 `http://localhost:5173`）。
4. Storybook：`npm run storybook`（預設在 `http://localhost:6006`）。

## Scripts
| Command | 說明 |
| --- | --- |
| `npm run dev` | 啟動 Vite 開發伺服器。 |
| `npm run build` | 執行 TypeScript `tsc -b` 並輸出 Vite production bundle 至 `dist/`。 |
| `npm run preview` | 以 Vite 預覽 production bundle。 |
| `npm run lint` | 使用 ESLint 檢查程式碼。 |
| `npm run storybook` | 啟動 Storybook dev server。 |
| `npm run build-storybook` | 產出靜態 Storybook 網站至 `storybook-static/`（預設輸出目錄）。 |
| `npm run chromatic` | 透過 Chromatic 上傳 Storybook（預設使用 `chpt_8008089f38ad192`）。 |

## Project Layout
```text
src/
  components/            // Antd 元件封裝與 Stories
    Button/
    DatePicker/
    ...
  stories/examples/      // Storybook 範例場景（CardWithTabs、QueryForm、ResultTable 等）
  App.tsx                // 應用入口（可於此組合元件）
  main.tsx               // React DOM 進入點
vite.config.ts           // Vite 設定
eslint.config.js         // ESLint 設定
```

## Storybook & Chromatic
- 新增元件時，同步建立 `.stories.tsx`，可直接使用 Antd component props 作為 Storybook `args`。
- `npm run build-storybook` 用於 CI 或靜態部署；輸出內容可放入任何靜態伺服器。
- `npm run chromatic` 會以專案內建 token 將 Storybook 發佈至 Chromatic，若需要以環境變數覆寫 token，設定 `CHROMATIC_PROJECT_TOKEN` 即可。

## 元件開發指引
- 將每個封裝元件與 Story 放在同一資料夾，維持 Story 與元件 API 同步。
- 使用 Antd `ConfigProvider` 或 `Theme` 進行主題調整時，可在 Storybook `preview.ts` 中設定，使所有 stories 共用。
- 放在 `src/stories/examples` 的場景 Story 可用於展示跨元件組合，建議搭配 `args` 控制多個互動狀態。
