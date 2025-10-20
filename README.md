# 个人博客导航网站

一个现代化、美观的个人博客导航网站，使用 Next.js + React + Tailwind CSS 构建，专为 Vercel 部署优化。

## ✨ 特性

- 🎨 **现代化设计** - 采用渐变背景、玻璃拟态效果和流畅动画
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **性能优化** - 静态生成，快速加载
- 🎯 **分类导航** - 8个主要分类，涵盖技术、设计、生活等
- 📝 **精选文章** - 展示优质博客内容
- 🔍 **搜索功能** - 快速找到感兴趣的内容
- 🌙 **暗色主题** - 护眼的深色设计

## 🚀 技术栈

- **框架**: Next.js 15.5.6
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: Vercel

## 📦 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 🚀 部署到 Vercel

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. 选择 Next.js 框架
4. 点击部署

或者使用 Vercel CLI：
```bash
npm i -g vercel
vercel
```

## 📁 项目结构

```
src/
├── app/
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 首页
├── components/
│   ├── Header.tsx       # 头部导航
│   ├── Hero.tsx         # 英雄区域
│   ├── CategoryGrid.tsx # 分类网格
│   ├── FeaturedPosts.tsx # 精选文章
│   └── Footer.tsx       # 页脚
└── lib/                 # 工具函数
```

## 🎨 自定义

### 修改颜色主题
在 `tailwind.config.ts` 中修改 `primary` 和 `dark` 颜色配置。

### 添加新的分类
在 `CategoryGrid.tsx` 中的 `categories` 数组中添加新项目。

### 更新精选文章
在 `FeaturedPosts.tsx` 中的 `featuredPosts` 数组中修改文章信息。

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

⭐ 如果这个项目对你有帮助，请给个 Star！