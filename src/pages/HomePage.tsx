import { Link } from 'react-router-dom'
import { QrCode, Phone, Settings } from 'lucide-react'
import { usePageTitle } from '../hooks/usePageTitle'

export default function HomePage() {
  usePageTitle('停车联系系统')
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Logo和标题 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/10 rounded-xl mb-6">
            <QrCode className="w-12 h-12 text-primary-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            停车联系系统
          </h1>
          <p className="text-lg text-text-secondary">
            扫码联系车主
          </p>
        </div>

        {/* 功能卡片 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 访客拨号 */}
          <div className="card card-hover">
            <Phone className="w-10 h-10 text-success-500 mb-4" />
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              访客联系
            </h2>
            <p className="text-text-secondary mb-4">
              扫码拨打车主电话
            </p>
            <div className="text-sm text-text-tertiary">
              示例: <Link to="/call/ABC000001" className="text-primary-500 hover:underline">
                /call/ABC000001
              </Link>
            </div>
          </div>

          {/* 车主绑定 */}
          <div className="card card-hover">
            <QrCode className="w-10 h-10 text-primary-500 mb-4" />
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              车主设置
            </h2>
            <p className="text-text-secondary mb-4">
              绑定手机号
            </p>
            <div className="text-sm text-text-tertiary">
              示例: <Link to="/bind/ABC000001" className="text-primary-500 hover:underline">
                /bind/ABC000001
              </Link>
            </div>
          </div>
        </div>

        {/* 管理入口 */}
        <div className="mt-12 text-center">
          <Link to="/admin/login" className="inline-flex items-center gap-2 text-text-tertiary hover:text-primary-500 transition-colors">
            <Settings className="w-4 h-4" />
            管理员
          </Link>
        </div>

        {/* 统计信息 */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold font-mono text-primary-500 mb-1">
                10000
              </div>
              <div className="text-sm text-text-tertiary">
                二维码
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-success-500 mb-1">
                24/7
              </div>
              <div className="text-sm text-text-tertiary">
                24小时服务
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-info mb-1">
                快速
              </div>
              <div className="text-sm text-text-tertiary">
                一键联系
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
