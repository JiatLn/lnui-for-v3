# Lnui

> 基于 Vue 3.0 的桌面端组件库

## npm 安装

```
npm install @jiatln/lnui -S
```

## 引入 LnUI

### 完整引入

在 main.js 中写入以下内容：

```js
import { createApp } from 'vue';
import App from './App.vue';

import LnUI from '@jiatln/lnui';
import '@jiatln/lnui/lib/style.css';

createApp(App).use(LnUI).mount('#app');
```

## 如何使用

各个组件的使用方法请参阅它们各自的文档。

### TODO

- [x] 项目初始化
- [x] switch 组件
- [ ] 按钮组件
