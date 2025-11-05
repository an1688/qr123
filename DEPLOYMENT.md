# QR주차시스템 배포 가이드

## 🚀 Vercel 배포 방법

### 1. GitHub에 업로드
```bash
git init
git add .
git commit -m "Initial commit: QR주차시스템"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/qr-parking-system.git
git push -u origin main
```

### 2. Vercel에서 배포
1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 리포지토리 선택
4. 환경 변수 설정:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_ADMIN_USERNAME=admin
   VITE_ADMIN_PASSWORD=YourSecurePassword123!
   ```
5. "Deploy" 클릭

### 3. 환경 변수 설정
프로덕션 환경에서는 다음 환경 변수를 설정해야 합니다:

- `VITE_SUPABASE_URL`: Supabase 프로젝트 URL
- `VITE_SUPABASE_ANON_KEY`: Supabase Anonymous Key
- `VITE_ADMIN_USERNAME`: 관리자 사용자명
- `VITE_ADMIN_PASSWORD`: 관리자 비밀번호
- `VITE_SESSION_TIMEOUT`: 세션 타임아웃 (기본값: 1800000ms)
- `VITE_MAX_LOGIN_ATTEMPTS`: 최대 로그인 시도 횟수 (기본값: 5)
- `VITE_LOCKOUT_DURATION`: 계정 잠금 시간 (기본값: 900000ms)

## 🛠️ 로컬 개발

### 의존성 설치
```bash
npm install
# 또는
pnpm install
```

### 개발 서버 실행
```bash
npm run dev
# 또는
pnpm dev
```

### 프로덕션 빌드
```bash
npm run build
# 또는
pnpm build
```

## 📋 요구사항

- Node.js 18+ 
- npm 또는 pnpm
- Supabase 계정 및 프로젝트

## 🔧 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI**: Radix UI + Tailwind CSS
- **Backend**: Supabase
- **Routing**: React Router v6

## 📱 주요 기능

- QR코드를 통한 차주 즉시 연락
- 주차장阻塞 문제 해결
- 상가 주차 관리 솔루션
- 야광 QR코드로 24시간 서비스
- 개인정보 보호 및 안전 관리

## 📞 지원

배포过程中에 문제가 발생하면 GitHub Issues를 통해 문의해 주세요.
