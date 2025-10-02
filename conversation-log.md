# Conversation Log

## Message 1 — User
我想針對這個專案建立文件
一個是專案的大綱與使用說明文件
另外是規格文件
請用問答的方式一步一步幫我完成文件
我會不斷提供資訊，請幫我彙整或是及時修改相關的文件
首先這個專案是一個ant design 搭配vite的專案
有storybook
這是一個只有component跟story的專案
主要是為了幫別的系統專案建立元件使用規則以及元件樣式的專案
除了制定各種元件的基本樣式props等
還會在story中增加使用情境的example

## Message 2 — Assistant
了解，我們先把文件的大致輪廓想清楚，再逐步填資料。以下兩份文件我建議的初版結構，請你確認或補充：

**Project Overview / Usage**
- `目的與定位`：專案是做什麼、服務哪些團隊
- `技術堆疊`：Ant Design + Vite + Storybook、其他關鍵工具
- `資料夾與檔案結構`：主要目錄說明、元件與 stories 的放置規則
- `啟動與開發流程`：如何安裝、啟動 Storybook、開發新元件的步驟
- `協作指引`：命名規則、PR 流程、設計稿同步方式等等
- `版本與發佈`：若有發佈流程或套件版本策略

**Component Spec**
- `元件清單`：分類（表單、排版、導航…）
- `通用規範`：共用樣式、可用的 tokens、命名規範、可存放在哪些 props
- `個別元件規格`：每個元件的用途、主要 props、樣式約定、互動行為、Storybook 情境示例
- `測試與驗收`：Storybook 控制項、可視化驗收流程
- `延伸計畫`：未來元件/情境待補

接下來，我們可以一步一步蒐集資訊。第一步我想先釐清以下幾點：
1. 這個文檔主要給哪些角色閱讀？（例如前端、設計師、PM）
2. 專案的檔案結構目前是否有特別規範？（例如 `src/components` 與 `src/stories`？）
3. Storybook 使用上有沒有既定流程或指示（例如如何新增情境 example）？

你可以先回覆其中任何一題，我再幫你整理進文件。

## Message 3 — User
1.文檔(專案)會成為前端、設計師、PM之間溝通的橋樑
主要是把規範實作成可以輕鬆查看且嘗試改變試用的一個專案(所以才會選擇使用storybook)
2. src/components/xxx 會直接有component的資料夾 component本身跟story會在同一個資料夾 src/stories/examples 則會有將元件組成範例頁面 使用情境說明的story

## Message 4 — Assistant
收到，先把你提供的資訊整理進兩份文件的草稿。

**Project Overview / Usage**
- `目的與定位`：Storybook 形式的元件規範專案，提供前端、設計師、PM 一個能即時查看、調整參數的溝通橋樑。
- `資料夾與檔案結構`
  - `src/components/<ComponentName>/`：元件主檔與對應 Storybook story 同資料夾。
  - `src/stories/examples/`：跨元件情境頁面與使用案例的 stories。

**Component Spec**
- `通用規範`：會以 Storybook 呈現可調整的 props、樣式 tokens。
- `個別元件規格`：每個元件由 `src/components/<ComponentName>` 下的 story 定義基本樣式、props。
- `情境範例`：`src/stories/examples/` 裡描述元件組合的實際使用情境。

接下來我想再釐清一些細節，好讓文件更完整：
1. 目前的 Storybook 有既定命名與分類規則嗎？（例如 Component vs Example 的 story 類別、命名格式）
2. 前端、設計師、PM 互動時是否有既定流程？例如新需求要先在 Storybook 補 story 再開發？
3. 是否已經有設計 token 或主題設定（顏色、字體、間距等）？

提供任何你手上現有的資訊都可以，我會持續更新草稿。

## Message 5 — User
目前都沒有 可能在建立的過程中補上

## Message 6 — Assistant
已更新草稿，標註目前尚未建立的規範區塊為待補：

**Project Overview / Usage**
- `目的與定位`：Storybook 元件規範專案，作為前端、設計師、PM 共同檢視與調整元件行為的橋樑。
- `資料夾與檔案結構`：  
  - `src/components/<ComponentName>/`：元件與對應 story 同資料夾。  
  - `src/stories/examples/`：跨元件使用情境的 stories。  
- `命名與分類`：待建立。  
- `協作流程`：待建立。  

**Component Spec**
- `通用規範`：props 與樣式 tokens 目前待定。  
- `個別元件規格`：由各元件資料夾內的 story 描述，尚需整理列表。  
- `情境範例`：`src/stories/examples/` 提供實際組合情境。  
- `設計 tokens / 主題`：尚未定義。  

下一步建議把開發者如何啟動與使用專案補進去，例如常用的 npm/yarn 指令、啟動 Storybook 的方式。請問現在專案的 `package.json` 裡有哪些重要 scripts（像 `dev`、`storybook`、`build`）？你可以直接貼出相關部分，我會幫忙整理到文件。

## Message 7 — User
可以直接查看package.json

## Message 8 — Assistant
啟動流程整理好了，會放在 Overview 的 `啟動與開發流程` 裡：
- `npm run dev` 啟動 Vite 開發伺服器。
- `npm run storybook` 啟 Storybook (`http://localhost:6006`)。
- `npm run build`/`preview` 封裝並預覽 Vite。
- `npm run build-storybook` 輸出版 Storybook。
- `npm run lint` 執行 ESLint。

接下來想把 Component Spec 裏的實際元件清單補齊。現在專案有哪些既有元件（例如 Button、Card…）？或是有預計要優先完成的元件範圍？有了清單，我就能建議每個元件欄位需要的內容並開始寫。

## Message 9 — User
把目前這段對話完整記錄在一份.md裏面
我會接著使用其他ai工具或在這裡繼續完成
