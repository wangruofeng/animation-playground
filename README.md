<div align="center">

# 🎨 Animation Playground

**140+ 个纯 CSS / SVG / Canvas 网页动画特效合集**

一次集齐演讲、产品落地页、个人主页用得上的所有 Web 动效——浏览器本地实时运行,零重型依赖。

[![Made with HTML](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FSVG%2FCanvas-ff6b9d?style=flat-square)]()
[![No Framework Tax](https://img.shields.io/badge/Animation-Pure%20Web%20Tech-00f5ff?style=flat-square)]()
[![Bilingual](https://img.shields.io/badge/i18n-中文%20%2F%20English-7c3aed?style=flat-square)]()
[![Runs Locally](https://img.shields.io/badge/Runs-Locally%20in%20Browser-22c55e?style=flat-square)]()

🔗 **在线预览**:[https://playground.wangruofeng007.com](https://playground.wangruofeng007.com)

</div>

---

## ✨ 项目亮点

- **140+ 个动画 demo**,覆盖文字、过渡、3D、数据可视化、物理效果等常见场景
- **9 大分类** 系统化组织,左侧导航直达任意效果
- **纯原生 Web 技术** 实现——不依赖 GSAP / Three.js / Framer Motion 等重型动画库,拷贝即用
- **浏览器本地实时运行**,无需后端、无需构建即可直接预览
- **中英双语** 界面,一键切换
- **响应式设计**,桌面与移动端皆可浏览

## 📂 特效分类

| 分类 | 内容 |
|------|------|
| 📝 **Text Effects** 文字效果 | 打字机、渐变描边、故障毛刺、逐字浮现…… |
| 🔀 **Page Transitions** 页面过渡 | 进出场动画、视图切换、遮罩转场 |
| 🖱️ **Mouse Effects** 光标 & 悬停 | 自定义光标、磁吸悬停、跟随特效 |
| 🌌 **Backgrounds** 背景特效 | 粒子、噪点、渐变流动、网格动效 |
| 🧊 **3D Transforms** 3D 变换 | 卡片翻转、立体视差、空间旋转 |
| 📊 **Charts & Counters** 图表 & 计数器 | 数字滚动、动态图表、进度可视化 |
| 🖼️ **Image Effects** 图片效果 | 悬停滤镜、视差、视窗揭示 |
| ⚡ **UI Feedback** 微交互 | 按钮反馈、加载状态、交互响应 |
| 🌀 **Physics & More** 物理 & 高级 | 弹簧、惯性、流体与更多实验性效果 |

## 🚀 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 运行测试
npm test
```

> 💡 核心 demo 全部集中在 [`index.html`](./index.html) 中,也可直接用浏览器打开预览,无需任何构建步骤。

## 🛠 技术栈

| 层级 | 技术 |
|------|------|
| 动效实现 | **HTML · CSS · SVG · Canvas · 原生 JavaScript** |
| 构建工具 | [Vite](https://vite.dev) · [vinext](https://www.npmjs.com/package/vinext) |
| 样式 | [Tailwind CSS 4](https://tailwindcss.com) |
| 部署 | [Cloudflare Pages](https://pages.cloudflare.com) |

## 📁 项目结构

```
animation-playground/
├── index.html          # 全部 140+ 动画 demo(单文件)
├── public/             # 静态资源(favicon、二维码等)
├── vite.config.ts      # 构建配置
├── worker/             # Cloudflare Worker 入口
└── package.json
```

## 🌐 部署

项目通过 Cloudflare Pages 部署。Fork 本仓库后:

```bash
npm run build      # 产物输出至 dist/client
```

将 `dist/client` 部署至任意静态托管平台(Cloudflare Pages / Vercel / Netlify / GitHub Pages)即可。

## 👤 关于作者

**王若风** — 前端 / 动效 / Web 实验爱好者

- 🐦 X:[@oneruofeng](https://x.com/oneruofeng)
- 💻 GitHub:[@wangruofeng](https://github.com/wangruofeng)
- 🌐 个人站点:[wangruofeng007.com](https://wangruofeng007.com/)

如果这个项目对你有帮助,欢迎 ⭐ Star 支持,或扫码请作者喝杯咖啡 ☕

## 📄 License

本项目代码暂未指定开源协议,仅供学习参考。如需商用请先联系作者。

---

<div align="center">

_所有演示均在浏览器本地实时运行 · Made with ❤️ by 王若风_

</div>
