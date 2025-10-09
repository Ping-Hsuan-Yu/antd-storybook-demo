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
- Ant Design 按鈕包裝元件，支援預設、主要、文字、連結、警示、載入、停用與圖示等多種狀態
- 用於呼叫主要動作或次要動作，例如提交流程、表單送出、切換狀態
- 優先使用 AntD `<Button />` 包裝，透過 `type`、`danger`、`loading`、`disabled` 等 props 調整樣式與行為

### 支援的 Props (ArgTypes)

| Props | 類型 | 說明 | 可選值 |
| --- | --- | --- | --- |
| `children` | `string` | 內容 | 任何字串 |
| `type` | `string` | 按鈕類型 | `'default'`, `'primary'`, `'text'`, `'link'` |
| `disabled` | `boolean` | 禁用 | `true`, `false` |
| `loading` | `boolean` | 加載中 | `true`, `false` |
| `danger` | `boolean` | 警示 | `true`, `false` |
| `href` | `string` | 連結 | 任何有效 URL |
| `icon` | `ReactNode` | 圖示 | Ant Design Icons 或自訂圖示 |

### Storybook Story 變體

#### Default 故事
- **用途**: 預設按鈕，用於任何沒有主次之分的操作
- **設定**: `children: '預設按鈕'`
- **說明**: 展示按鈕的基本外觀與互動行為

#### Primary 故事
- **用途**: 主要操作按鈕，建議每個區域僅保留一個以集中使用者焦點
- **設定**: `type: 'primary', children: '主要按鈕'`
- **說明**: 使用主色調突出重要操作，如提交表單、確認動作

#### Text 故事
- **用途**: 次要操作文字按鈕，外觀平實以降低權重
- **設定**: `type: 'text', children: '文字按鈕'`
- **說明**: 適合輔助性操作，不干擾主要介面流程

#### Link 故事
- **用途**: 連結型按鈕，模擬文字超連結樣式以導向外部或新頁面
- **設定**: `type: 'link', children: '連結'`
- **說明**: 視覺上與文字連結一致，適合導航性操作

#### WithIcon 故事
- **用途**: 主要按鈕搭配圖示，強化辨識度並凸顯操作意圖
- **設定**: `type: 'primary', icon: <HomeOutlined />, children: '首頁'`
- **說明**: 圖示位於文字左側，提升按鈕的視覺辨識度

#### Loading 故事
- **用途**: 載入中按鈕，提供操作處理時的即時回饋並避免重複提交
- **設定**: `type: 'primary', loading: true, children: 'Loading'`
- **說明**: 顯示旋轉動畫，按鈕保持原尺寸且無法點擊

#### Disabled 故事
- **用途**: 禁用狀態的按鈕，提示操作暫不可用或需要額外條件
- **設定**: `disabled: true, children: '禁用按鈕'`
- **說明**: 視覺上顯示為灰色且無法互動，提示使用者操作不可用

#### Danger 故事
- **用途**: 警示用的危險按鈕，適合刪除或不可逆的操作並提醒使用者謹慎
- **設定**: `type: 'primary', danger: true, children: '警示按鈕'`
- **說明**: 使用紅色系配色，警示使用者操作的風險性

#### IconOnly 故事
- **用途**: 僅以圖示呈現的按鈕，適合工具列或空間受限的情境，建議搭配提示(Tooltip)
- **設定**: `type: 'text', icon: <UserOutlined />`
- **特殊渲染**: 使用 Tooltip 包裝提供說明文字
- **說明**: 節省空間的設計，需確保圖示語意明確

### 實作範例程式碼

```typescript
// Button.stories.tsx Meta 配置
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Ant Design 按鈕包裝元件，支援預設、主要、文字、連結、警示、載入、停用與圖示等多種狀態。',
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: '內容',
      type: 'string',
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'text', 'link'],
      description: '按鈕類型',
      type: 'string',
    },
    // ... 其他 argTypes
  },
}
```

### 設計考量
- **主要按鈕**: 每個頁面或區塊建議僅有一個，避免分散使用者注意力
- **圖示使用**: 選用語意明確的圖示，與操作意圖相符
- **載入狀態**: 提供即時回饋，防止重複提交
- **無障礙設計**: IconOnly 按鈕需搭配 Tooltip 或 aria-label 提供說明
- **危險操作**: Danger 按鈕應謹慎使用，僅用於不可逆或高風險操作

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
