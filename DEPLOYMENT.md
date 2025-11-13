# KR010 QR停车系统部署说明

## 项目简介
KR010是一个智能QR停车系统，支持通过QR码快速联系车主。

## 部署到Vercel步骤

### 1. 上传到GitHub
1. 在GitHub创建新仓库
2. 将此文件夹内容上传到GitHub仓库

### 2. 部署到Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击"New Project"
4. 选择您的GitHub仓库
5. 点击"Deploy"

### 3. 环境变量配置
在Vercel项目设置中配置以下环境变量：

```env
VITE_SUPABASE_URL=您的Supabase项目URL
VITE_SUPABASE_ANON_KEY=您的Supabase匿名密钥
```

### 4. 构建命令
Vercel会自动检测到这是一个Vite项目，会使用以下构建配置：
- Build Command: `pnpm install --prefer-offline && rm -rf node_modules/.vite-temp && tsc -b && vite build`
- Output Directory: `dist`
- Install Command: `pnpm install --prefer-offline`

## 项目特点
- 基于React + TypeScript + Vite
- 使用Tailwind CSS进行样式设计
- 集成Supabase作为后端服务
- 支持响应式设计
- 支持路由导航

## 技术栈
- 前端：React 18, TypeScript, Vite
- 样式：Tailwind CSS
- 后端：Supabase
- 图标：Lucide React
- 路由：React Router v6

## 注意事项
1. 确保在部署前配置好Supabase环境变量
2. 检查所有外部服务依赖
3. 确保网站可以在本地正常运行