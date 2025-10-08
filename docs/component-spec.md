# 元件規格說明

> 所有元件以 Ant Design 5 為基礎，依專案需求統一樣式、語意標準與互動行為。若無特別說明，優先採用 AntD 預設屬性；遇到差異時需在 Storybook 中補充說明與範例。

## 全域規格
- **主題與設計 tokens**：顏色、字體、間距、陰影等仍待定；暫以 `var(--token-name)` 形式標註，日後可集中至 `theme.ts` 或 CSS 變數檔案。
- **Storybook 命名建議**：
  - `Components/<Category>/<Component>` 對應單一元件。
  - `Examples/<Scenario Name>` 對應跨元件情境。
- **Props 文件化**：每個 story 需透過 `argTypes` 釐清常用 props、支援的值域與預設值。
- **互動狀態**：提供至少 `default / hover / active / disabled / loading` 對應的視覺或行為描述。

---

## Buttons

### 使用情境
- 呼叫主要動作或次要動作，例如提交流程、表單送出、切換狀態。
- 優先使用 AntD `<Button />`，透過 `type`、`shape`、`icon` 等 props 調整樣式。

### 樣式與層級
- `Primary`：使用專案主色 `var(--color-primary)`，限定一頁內單一主要行為。
- `Default`：白底或透明底，邊框使用 `var(--color-border-default)`。
- `Dashed`：次要動作、建立新增流程等。
- `Text / Link`：頁面內部輕量操作，限制無邊框。

### 尺寸
~~- `size="large"`、`"middle"`、`"small"` 依 AntD 對應高度，若需自訂高度以 CSS 變數 `--btn-height-*` 定義。~~


~~### 狀態樣式~~
| 狀態 | 行為說明 | 視覺重點 |
| --- | --- | --- |
| Hover | 允許操作 | 背景/邊框色提高 10% 明度，指標變更為 pointer。 |
| Active | 點擊按下 | 加入 `box-shadow: inset 0 0 0 1px var(--color-primary-dark)`。 |
| Disabled | 禁止操作 | 文案 `var(--color-text-disabled)`、背景 `var(--color-fill-disabled)`，游標為 not-allowed。 |
| Loading | 執行中 | `loading` props 為 true，置換 icon 為旋轉動畫，保持按鈕寬度。 |

### Storybook 範例
- 分別建立 `Primary`, `Default`, `Text` 等故事。
- 使用 `controls` 讓使用者調整 `type`、`size`、`disabled`、`loading`。
- Story 名稱範例：`Components/Button/Default`。

#### Button with Icon
- `icon` 放於左側，預設使用 `@ant-design/icons` 套件。
- 若需要右側 icon，改用 `iconPosition="end"`（自訂 props）或 `<Button><Space>...</Space></Button>` 排版。
- 文字與 icon 間距採 `var(--space-xs)`。
- 可用於引導操作，例如「新增」、「匯出」。

#### Button Only Icon
- 使用 `shape="circle"` 或 `shape="default"` 搭配寬高等於 40px（依尺寸 token 調整）。
- 需提供 `aria-label` 以符合可及性。
- Hover/Active 狀態需保持 icon 對比足夠。

#### Button with Loading
- 使用 AntD `loading` props；story 中展示 loading 與 disabled 的組合情況。
- Loading 期間文字保持在原位，spinner 置於文字左側。

---

## Typography

### Title（`Typography.Title`）
- 使用 `level` 1–5 對應標題層級，對照頁面資訊階層。
- 標題顏色 `var(--color-text-heading)`，字重 `600`。
- Story 控制：`level`、`ellipsis`、`copyable`。

### Text（`Typography.Text`）
- 預設字體大小 14px，字色 `var(--color-text-default)`。
- `type` 支援 `secondary`、`success`、`warning`、`danger`，對應設計 tokens。
- Story 建議展示 `ellipsis`、`mark`、`code` 等常見樣式。

---

## Layout Components

### Divider
- 用於分隔段落或操作群組，高度 1px。
- 支援 `orientation="left|center|right"`。
- Story 顯示文字化 Divider 與垂直 Divider。

### Flex (`Flex` 元件)
- 包裝 AntD `Flex` API，自訂 gap 透過 tokens `--space-*` 控制。
- Story 展示水平/垂直排列、換行、對齊方式。

### Grid (`Row` + `Col`)
- 預設 gutter 使用 `var(--space-md)`。
- Story 需說明響應式 props，如 `xs`、`sm`、`md`。
- 若有自訂中斷點，以 `grid.ts` 或 theme 檔案統一。

### Space
- 用於控制元件間距，預設 `size="middle"`。
- Story 示範水平與垂直的 Space、混合排版。

### Tabs
- 頂部導覽，Default type。
- 建議 `size="large"` 為頁面主導航，`small` 用於內嵌分頁。
- Story 顯示 `items`、`tabBarExtraContent`、`tabPosition`。

---

## DatePicker

### 單一 DatePicker
- 格式預設 `YYYY/MM/DD`，可藉 `format` props 調整。
- Story 控制：`disabledDate`、`showTime`、`status`。
- 輸入框寬度對齊一般輸入欄位。

### Range Picker（含時間）
- 使用 `DatePicker.RangePicker` 並設定 `showTime`。
- 起訖時間需顯示 placeholder `開始時間 / 結束時間`。
- Story 示範禁用區間、快速選擇（`presets`）。

---

## Form
- 採用 AntD `Form` + `Form.Item`。
- 統一 `labelCol`、`wrapperCol`，建議使用 6/18 栅格。
- 驗證訊息字體顏色 `var(--color-text-danger)`。
- Story 建議：基本表單、垂直表單、即時驗證。

---

## Inputs

### Input
- 預設長度填滿容器，支援 `allowClear`。
- Story 展示基本、帶前綴/後綴 icon、禁用。

### InputNumber
- 精度需求以 `precision` 控制，預設 0。
- Story 示範 `min`/`max`、formatter/parser。

### Radio
- 優先使用 `Radio.Group` 搭配 `options`。
- Story 顯示水平、垂直、按鈕樣式（`buttonStyle="solid"`）。

### Select
- 預設 `showSearch` true；選單寬度不小於觸發器寬度。
- 多選 (`mode="multiple"`) 需展示 Tags 樣式，建議限定最多顯示 N 個 tag，超出顯示 `+n`。
- Story 控制：`mode`、`disabled`、`maxTagCount`、`labelInValue`。

### Upload
- 採用 `Upload.Dragger` 或 `Upload` 依需求。
- 限制檔案大小、型態於 `beforeUpload`。
- Story 展示單檔、多檔、拖拉區塊。

---

## Display Components

### Card
- 預設使用陰影 `var(--shadow-sm)`，內距 `var(--space-lg)`。
- Story 展示基本卡片、含操作區、網格卡片。

### Collapse
- 一次可開啟多個 (`accordion` 控制)。
- Panel 標題使用 `Typography.Text`，文字顏色 `var(--color-text-heading)`。
- Story 示範受控/非受控狀態。

### Popover
- 用於補充說明；內容不超過 240px 寬。
- Story 控制：`placement`、`trigger`、`showArrow`。

### Tooltip
- 提供簡短說明；最長 2 行文字。
- Story 顯示不同方向與禁用元素包裝技巧。

---

## Feedback Components

### Drawer
- 預設寬度 480px，使用 `placement="right"`。
- Story 展示基本抽屜、表單抽屜、全螢幕模式。

### Notification
- 使用 `notification` API；集中統一樣式在封裝函式內。
- Story 在 `Examples/Notifications` 提供互動按鈕觸發。

### Modal
- 標題置中，footer 包含主要與次要按鈕。
- Story 呈現確認對話框、自訂 footer。

### Popconfirm
- 包裝危險行為；按鈕採用 `danger` 樣式。
- Story 示範基本用法與 async 確認流程。

### Spin
- 作為 loading 遮罩，搭配 `tip` 顯示文字。
- Story 顯示 `size` 變化與內容遮罩範例。

---

## Storybook 情境範例（Examples）
- 建議建立以下情境故事，以串接多個元件：
  - `Examples/Form/BasicSubmitFlow`
  - `Examples/Dashboard/Overview`（Card + Tabs + Popover）
  - `Examples/Scheduler/DateRange`
- 情境故事需說明：使用元件組合原因、互動步驟、可調整參數。

## 待補事項
- 定義設計 tokens 與 CSS 變數來源。
- 建立 Storybook controls 預設值與說明文字。
- 審視實際元件實作並補充差異化 props。
