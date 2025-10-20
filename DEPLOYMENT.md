# 部署到 Vercel 指南

## 🚀 快速部署

### 方法一：通过 Vercel Dashboard

1. **准备代码**
   - 将代码推送到 GitHub 仓库
   - 确保所有文件都已提交

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择你的仓库

3. **配置项目**
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Install Command: `npm install`

4. **部署**
   - 点击 "Deploy"
   - 等待部署完成

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署项目
vercel

# 生产环境部署
vercel --prod
```

## ⚙️ 环境配置

### 推荐的环境变量

在 Vercel Dashboard 的 Project Settings > Environment Variables 中添加：

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=个人博客导航
```

### 自定义域名

1. 在 Vercel Dashboard 中进入项目
2. 点击 Settings > Domains
3. 添加你的自定义域名
4. 配置 DNS 记录

## 🔧 优化建议

### 性能优化

1. **图片优化**
   - 使用 Next.js Image 组件（已配置）
   - 考虑使用 Vercel 的图片优化服务

2. **静态生成**
   - 项目已配置为静态导出
   - 所有页面都会预渲染

3. **CDN 加速**
   - Vercel 自动提供全球 CDN
   - 无需额外配置

### SEO 优化

1. **元数据**
   - 已在 `layout.tsx` 中配置基础 SEO
   - 可根据需要添加更多元数据

2. **结构化数据**
   - 可添加 JSON-LD 结构化数据
   - 提升搜索引擎理解

## 📊 监控和分析

### Vercel Analytics

1. 在项目设置中启用 Vercel Analytics
2. 查看访问统计和性能指标

### 自定义分析

可集成 Google Analytics 或其他分析工具：

```typescript
// 在 layout.tsx 中添加
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🛠️ 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本（推荐 18.x）
   - 确保所有依赖都已安装

2. **图片不显示**
   - 检查图片 URL 是否有效
   - 确保图片域名在 next.config.js 中配置

3. **样式问题**
   - 确保 Tailwind CSS 配置正确
   - 检查 CSS 文件是否正确导入

### 调试技巧

1. **本地调试**
   ```bash
   npm run dev
   ```

2. **构建测试**
   ```bash
   npm run build
   npm run start
   ```

3. **查看构建日志**
   - 在 Vercel Dashboard 中查看构建日志
   - 检查是否有错误信息

## 📈 后续优化

1. **内容管理**
   - 考虑集成 CMS（如 Contentful、Strapi）
   - 实现动态内容更新

2. **功能扩展**
   - 添加搜索功能
   - 实现用户系统
   - 添加评论功能

3. **性能监控**
   - 设置性能预算
   - 监控 Core Web Vitals

---

🎉 恭喜！你的博客导航网站已成功部署到 Vercel！