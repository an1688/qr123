# QR주차시스템

QR코드로 차주에게 연락하는 혁신적인 주차 솔루션입니다.

## 주요 기능

- 🚗 **주차 관리**: QR코드 생성, 차량 번호판 연결, 주차 기록
- 👥 **사용자 관리**: 관리자 로그인, 사용자 관리, 권한 제어
- 📞 **연락 기능**: 원클릭 연락, 녹음 기록, 통화 로그
- 🎨 **현대적 인터페이스**: 반응형 디자인, 보기 쉬운 UI
- ⚡ **고성능**: Vite 기반 구축, 빠른 로딩

## 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **UI组件**：Radix UI + Tailwind CSS
- **后端服务**：Supabase
- **路由管理**：React Router
- **状态管理**：React Hooks
- **代码规范**：ESLint + TypeScript

## 项目结构

```
src/
├── components/          # 可复用组件
├── pages/              # 页面组件
│   ├── AdminDashboardPage.tsx    # 管理员仪表板
│   ├── HomePage.tsx              # 首页
│   ├── CallPage.tsx              # 呼叫页面
│   ├── QRCodesManagePage.tsx     # 二维码管理
│   └── ...                      # 其他页面
├── hooks/              # 自定义Hooks
├── lib/                # 工具库和配置
├── types/              # TypeScript类型定义
└── utils/              # 工具函数
```

## 开发环境

### 安装依赖
```bash
npm install
# 或
pnpm install
```

### 启动开发服务器
```bash
npm run dev
# 或
pnpm dev
```

### 构建生产版本
```bash
npm run build
# 或
pnpm build
```

## 部署准备

本项目已准备好进行部署，支持多种部署平台：
- Vercel（推荐）
- Netlify
- GitHub Pages
- Cloudflare Pages

## 环境变量

项目需要以下环境变量：
- `VITE_SUPABASE_URL`：Supabase项目URL
- `VITE_SUPABASE_ANON_KEY`：Supabase匿名密钥

## 作者

MiniMax Agent

## 许可证

私有项目