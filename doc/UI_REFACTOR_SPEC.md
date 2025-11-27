# 專案規格書：ALP 數位產品生態系重構計畫
**ALP Digital Ecosystem Refactor: Unifying Design Language & Modularizing System Architecture**

---

## 1. 專案概述 (Executive Summary)

本計畫旨在將現有的單體架構（Monolith）轉型為產品生態系（Product Suite）。目標是在技術底層共用同一套 UI 規範（Design System）的前提下，透過參數化設定，達成不同產品線（如 TMS, WES, HR）與不同使用情境（辦公室、現場端、戰情室）的視覺差異化與操作最佳化。

### 核心目標
* **生態系感知 (Ecosystem Awareness)**：讓使用者感知到 ALP 擁有多元且專業的產品矩陣(Product Matrix)。
* **模組化拆分 (Modularization)**：定義清楚的系統邊界，但保留跨系統的設計一致性（Visual DNA）。
* **情境適應性 (Contextual Adaptation)**：一套程式碼，透過變數切換支援「辦公室高密度」與「現場大尺寸」模式。

---

## 2. 全域導航架構提案 (Global Navigation Architecture)

為了解決「功能混雜」並展現「產品多樣性」，目前保留兩個方案。

### 方案 A：九宮格 / 應用程式啟動器 (App Launcher)
* **概念**：類似 Google Workspace 或 Microsoft 365 的右上角/左上角點陣圖示。
* **優點**：
    * 收合時不佔用操作的螢幕空間。
    * 展開時可用大面積展示所有產品圖示。
* **適用對象**：專注單一系統，偶爾切換的使用者。
* **視覺重點**：需結合 ALP Logo 與統一配色展示。

### 方案 B：全域側邊欄 (Global Rail)
* **概念**：類似 Teams 或 Discord 最左側的常駐極窄欄位。
* **優點**：
    * 強烈的視覺提示，隨時提醒使用者「你身處於 ALP 生態系中」。
    * 跨系統切換效率最高。
* **適用對象**：管理職或營運人員，需頻繁跨系統操作。

---

## 3. 情境適應策略 (Contextual Adaptation)

針對非標準辦公室頁面，採用「骨架不同，血液相同」的策略。

| 情境 | 特性 | 統一規範 (Visual DNA) | 差異化處理 (Variables) |
| :--- | :--- | :--- | :--- |
| **標準後台 (Office)** | 資訊密度高、滑鼠操作 | 完整導航、標準字體 (14px) | 使用 `Default Theme` |
| **現場作業 (WES/Field)** | 觸控操作、遠距閱讀、全螢幕 | **相同的品牌色與語意色** | **變數覆寫**：字體 (16/18px)、按鈕高度 (48px+)、隱藏導航 |
| **數據看板 (Dashboard)** | 獨立開發、視覺強烈 | **共用 Design Tokens** (色彩/字體) | 不使用標準元件，但取用系統定義的 `Chart Palette` |

---

## 4. 設計變數需求清單 (Design Token Spec Sheet)

本節定義 ALP 生態系的核心設計變數（Design Tokens），基於 **Ant Design v5 Token System** 實作。為實現「骨架不同，血液相同」的策略，設計師僅需定義 **Seed Token（源頭變數）**，系統將自動衍生完整的視覺規範。

---

### 4.1 Token 設計策略

#### 為什麼聚焦在 Seed Token？
* **Seed Token** 是設計系統的「DNA 源頭」，修改它會自動影響衍生的所有 Map Token 和 Alias Token。
* 只需定義核心設計決策（品牌色、字級、圓角），Ant Design 會自動產生完整的色階、hover 狀態、陰影等。
* 支援情境覆寫：辦公室模式和現場模式只需覆寫少數 Seed Token 即可達成視覺差異化。

#### Token 衍生邏輯
```
Seed Token (設計師定義) 
    ↓ (Ant Design 算法自動計算)
Map Token (自動產生，如 colorPrimaryBg) 
    ↓ (語意化映射)
Alias Token (自動映射，如 colorLink)
    ↓ (元件層級套用)
元件樣式 (Button、Input、Card...)
```

---

### 4.2 核心 Seed Token 定義

以下變數為 **全生態系統一規範**，確保跨系統的視覺一致性（Visual DNA）。

#### 4.2.1 品牌與功能色 (Brand & Functional Colors)

| Seed Token | 語意說明 | Light Mode | Dark Mode | 備註 |
| :--- | :--- | :--- | :--- | :--- |
| `colorPrimary` | **品牌主色 (Primary Action)** | | | 控制按鈕、連結、選中狀態 |
| `colorSuccess` | 成功 / 完成 / 正常狀態 | | | |
| `colorWarning` | 警告 / 需注意狀態 | | | |
| `colorError` | 錯誤 / 刪除 / 危險操作 | | | |
| `colorInfo` | 一般資訊 / 提示 | | | |

**設計規範**：
* 色彩對比度必須符合 **WCAG 2.0 AA 標準（4.5:1）**

---

#### 4.2.2 中性色基礎 (Neutral Foundation)

| Seed Token | 語意說明 | Light Mode | Dark Mode | 備註 |
| :--- | :--- | :--- | :--- | :--- |
| `colorTextBase` | **文字基準色** | | | 定義最深的文字顏色<br>自動衍生所有文字色階 |
| `colorBgBase` | **背景基準色** | | | 定義最底層的背景顏色<br>自動衍生容器背景、邊框色等 |

---

#### 4.2.3 字體系統 (Typography System)

| Seed Token | 語意說明 | 辦公室模式 | 現場模式 | 備註 |
| :--- | :--- | :--- | :--- | :--- |
| `fontFamily` | **主要字體家族** | | | 跨系統統一 |
| `fontFamilyCode` | 等寬字體 (代碼/數據) | | | 用於訂單編號、料號、程式碼顯示 |
| `fontSize` | **基準字級** | | | 現場模式需遠距可讀 |
| `lineHeight` | 基準行高 | | | |

---

#### 4.2.4 尺寸與間距 (Size & Spacing)

| Seed Token | 語意說明 | 辦公室模式 | 現場模式 | 備註 |
| :--- | :--- | :--- | :--- | :--- |
| `sizeUnit` | 間距基準單位 | | | 所有間距的最小單位 |
| `sizeStep` | 間距步長 | | | 控制 padding/margin 的增長幅度 |
| `controlHeight` | **標準元件高度** | | | 影響按鈕、輸入框、選單項目高度<br>現場模式需符合觸控標準 |

---

#### 4.2.5 形狀與圓角 (Shape & Border Radius)

| Seed Token | 語意說明 | 預設值 | 備註 |
| :--- | :--- | :--- | :--- |
| `borderRadius` | **基準圓角** | | 影響按鈕、卡片、輸入框等所有元件 |

---

### 4.3 擴展 Token (Extended Tokens)

#### 4.3.1 圖表色板 (Chart Palette) - 自定義擴展

數據視覺化專用色彩，**獨立於功能色**，用於 Dashboard、Report 等數據看板。

| Token 名稱 | 語意說明 | Light Mode | Dark Mode | 備註 |
| :--- | :--- | :--- | :--- | :--- |
| `chartColors[0]` | 數據視覺化色彩 #1 | | | 需提供 10 色 |
| `chartColors[1]` | 數據視覺化色彩 #2 | | | 需確保色彩可區分性 |
| `chartColors[2]` | 數據視覺化色彩 #3 | | | |
| `chartColors[3]` | 數據視覺化色彩 #4 | | | |
| `chartColors[4]` | 數據視覺化色彩 #5 | | | |
| `chartColors[5]` | 數據視覺化色彩 #6 | | | |
| `chartColors[6]` | 數據視覺化色彩 #7 | | | |
| `chartColors[7]` | 數據視覺化色彩 #8 | | | |
| `chartColors[8]` | 數據視覺化色彩 #9 | | | |
| `chartColors[9]` | 數據視覺化色彩 #10 | | | |

**設計規範**：
* 圖表色板需獨立設計，避免與 Success/Warning/Error 衝突
* 必須通過色盲模擬測試

---

### 4.4 實作範例 (Implementation Example)

以下為前端工程實作的參考程式碼（基於 React + Ant Design v5）。

#### 4.4.1 辦公室模式（預設主題）

```javascript
// theme/officeTheme.js
const officeTheme = {
  token: {
    colorPrimary: '',  // 由設計師填寫
    colorSuccess: '',
    colorWarning: '',
    colorError: '',
    colorInfo: '',
    
    colorTextBase: '',
    colorBgBase: '',
    
    fontFamily: '',
    fontSize: '',      // 單位: px
    lineHeight: '',
    
    controlHeight: '', // 單位: px
    sizeUnit: '',      // 單位: px
    sizeStep: '',      // 單位: px
    
    borderRadius: '',  // 單位: px
  },
};

export default officeTheme;
```

#### 4.4.2 現場模式（覆寫主題）

```javascript
// theme/fieldTheme.js
import officeTheme from './officeTheme';

const fieldTheme = {
  token: {
    ...officeTheme.token,
    
    // 僅覆寫情境相關的 Token
    fontSize: '',        // 放大字體（遠距可讀）
    controlHeight: '',   // 放大按鈕（觸控友善）
    sizeStep: '',        // 加大間距（防止誤觸）
  },
};

export default fieldTheme;
```

#### 4.4.3 全域注入與 Dark Mode 支援

```javascript
// App.jsx
import { ConfigProvider, theme } from 'antd';
import officeTheme from './theme/officeTheme';
import fieldTheme from './theme/fieldTheme';

function App() {
  const isFieldMode = detectFieldMode(); // 根據 URL 或 User Role 判斷
  const isDarkMode = useUserPreference('darkMode');

  return (
    <ConfigProvider
      theme={{
        token: isFieldMode ? fieldTheme.token : officeTheme.token,
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {/* 你的應用程式 */}
    </ConfigProvider>
  );
}
```

**⚠️ 重要提醒**：
* `algorithm: theme.darkAlgorithm` 會自動處理 Dark Mode 的色彩轉換
* 需實際測試 Dark Mode 下的對比度和可讀性

---

### 4.5 驗證要求 (Validation Requirements)

#### 必測項目
* **色彩對比度**: 符合 WCAG 2.0 AA 標準（4.5:1）
* **Dark Mode**: 實際測試低光環境的可讀性
* **色盲友善**: 圖表色板通過色盲模擬測試

---

### 4.6 參考資料

* **主題編輯器**: [Ant Design Theme Editor](https://ant.design/theme-editor)
* **官方文件**: [Customize Theme - Ant Design](https://ant.design/docs/react/customize-theme)
* **Token 完整列表**: [Design Token - Ant Design](https://ant.design/docs/react/customize-theme#seedtoken)


---

## 5. UX 規範化 / 通用交互規則

### 5.1 Action / Button / Danger / Loading
- Primary / Default / Text Button 的使用情境定義
- Danger Button 的觸發條件為何：不可逆、破壞資料、高風險流程進入點
- Danger 的等級分級
- 刪除 => 直接刪除 / Popconfirm / Modal confirm
- Loading 狀態全域遮罩？元件內 loading(自動禁用按鈕)

### 5.2 Feedback
現行狀態過分仰賴Modal
- Modal / Drawer 使用時機
- Message / Notification 使用時機

### 5.3 Form Patterns
- 必填欄位樣式
- Label、Hint、Validation Message 樣式
- 是否要統一定義錯誤訊息句型(中 / 英)

### 5.4 Table Patterns
- 文字對齊
- `extendTable`形式
- checkbox / action button 欄位位置
- 選擇筆數樣式
- 總筆數顯示位置
- Pagination 顯示方式

---

## 6. 系統頁面抽樣

### [請見Excel](https://alpglobal-my.sharepoint.com/:x:/g/personal/ping_yu_alp_global/IQBTzDPaf2PMRaQti6JnDT9ZAWWV_qSiIOrsvKOztsSWslQ)

### 跳脫頁面

- Dashboard
  - DSA001
  - DSA002
  - DSA003
  - DSMP10
  - DSN001
  - DSN002
  - DSN003
  - DSN004
  - DSN005
- 現場使用
  - WEA208
  - WEA209
  - WEA230
  - WEA510
  - WEA511
  - WEA512
  - WEA513
  - WEA630
  - WEA831
  - WEC231
  - WEC638
  - WEC650
- 其他
  - ebook
  - GIA001

---


### 💅🏻品牌感加分小細節
- **Loading / Empty 客製化元件**