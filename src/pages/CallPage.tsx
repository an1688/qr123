import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Phone, MessageSquare, AlertCircle, Settings } from 'lucide-react'
import { supabase } from '../lib/supabase'
import type { QRCode, PhoneBinding } from '../types'
import { usePageTitle } from '../hooks/usePageTitle'

export default function CallPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  usePageTitle('차주에게 연락')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [qrCode, setQRCode] = useState<QRCode | null>(null)
  const [binding, setBinding] = useState<PhoneBinding | null>(null)
  const [showSettings, setShowSettings] = useState(false)
  const [managementPassword, setManagementPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [identifier, setIdentifier] = useState('')

  useEffect(() => {
    if (!id) {
      navigate('/')
      return
    }
    loadData()
  }, [id])

  async function loadData() {
    try {
      setLoading(true)
      setError('')

      // 处理二维码标识符 - 如果id是完整URL，提取标识符部分
      let extractedIdentifier = id
      if (id && id.includes('/bind/')) {
        // 从完整URL中提取标识符
        extractedIdentifier = id.split('/bind/')[1]?.split('?')[0]?.split('#')[0] || id
        console.log('从URL中提取的标识符:', extractedIdentifier)
      } else if (id && id.includes('/call/')) {
        // 从完整URL中提取标识符
        extractedIdentifier = id.split('/call/')[1]?.split('?')[0]?.split('#')[0] || id
        console.log('从URL中提取的标识符:', extractedIdentifier)
      }
      
      setIdentifier(extractedIdentifier)

      // 获取二维码信息 - 首先尝试通过secure_code查找，然后通过code查找
      let { data: qrData, error: qrError } = await supabase
        .from('qr_codes')
        .select('*')
        .eq('secure_code', extractedIdentifier)
        .maybeSingle()

      // 如果通过secure_code没找到，尝试通过原始code查找（兼容旧URL）
      if (!qrData) {
        const { data: oldQrData, error: oldQrError } = await supabase
          .from('qr_codes')
          .select('*')
          .eq('code', extractedIdentifier)
          .maybeSingle()
        
        if (oldQrData && oldQrData.secure_code) {
          // 重定向到新的安全URL
          navigate(`/call/${oldQrData.secure_code}`, { replace: true })
          return
        }
        
        qrData = oldQrData
        qrError = oldQrError
      }

      if (qrError) throw qrError
      if (!qrData) {
        setError('QR 코드가 존재하지 않습니다')
        return
      }

      setQRCode(qrData)

      // 检查二维码状态 - 如果未分配，跳转到绑定页面
      if (qrData.status === 'unassigned') {
        console.log('二维码未分配，跳转到绑定页面')
        navigate(`/bind/${id}`, { replace: true })
        return
      }

      // 获取绑定信息
      const { data: bindingData, error: bindingError } = await supabase
        .from('phone_bindings')
        .select('*')
        .eq('qr_code_id', qrData.id)
        .maybeSingle()

      if (bindingError) throw bindingError
      setBinding(bindingData)

    } catch (err: any) {
      console.error('加载数据失败:', err)
      setError(err.message || '로딩 실패')
    } finally {
      setLoading(false)
    }
  }

  async function handleCall(phoneNumber: string) {
    try {
      // 记录通话日志
      if (qrCode) {
        await supabase.from('call_logs').insert({
          qr_code_id: qrCode.id,
          phone_number: phoneNumber
        })
      }

      // 使用tel协议拨号
      window.location.href = `tel:${phoneNumber}`
    } catch (err) {
      console.error('전화 걸기 실패:', err)
    }
  }

  async function handleSMS(phoneNumber: string) {
    try {
      // 使用sms协议发送短信
      window.location.href = `sms:${phoneNumber}`
    } catch (err) {
      console.error('문자 보내기 실패:', err)
    }
  }

  async function handlePasswordSubmit() {
    if (!binding || !managementPassword) {
      setPasswordError('관리 비밀번호를 입력하세요')
      return
    }

    try {
      // 验证管理密码
      const { data, error } = await supabase
        .from('phone_bindings')
        .select('management_password')
        .eq('id', binding.id)
        .single()

      if (error) throw error

      if (data.management_password === managementPassword) {
        // 密码正确，跳转到编辑页面（添加编辑模式标识）
        navigate(`/bind/${identifier}?mode=edit`)
        setShowSettings(false)
        setManagementPassword('')
        setPasswordError('')
      } else {
        setPasswordError('관리 비밀번호가 잘못되었습니다')
      }
    } catch (err) {
      console.error('비밀번호 검증 실패:', err)
      setPasswordError('검증 실패, 다시 시도해주세요')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-text-secondary text-lg">로딩 중...</div>
      </div>
    )
  }

  if (error || !qrCode) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="card max-w-md w-full text-center">
          <AlertCircle className="w-16 h-16 text-error mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-error mb-2">오류 발생</h2>
          <p className="text-text-secondary mb-6">{error || '로딩 실패'}</p>
          <button
            onClick={() => navigate('/')}
            className="btn btn-ghost"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    )
  }

  if (!binding) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="card max-w-md w-full text-center">
          <AlertCircle className="w-16 h-16 text-warning mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-text-primary mb-2">아직 연결되지 않음</h2>
          <p className="text-text-secondary mb-2">차주가 아직 연락처를 연결하지 않았습니다</p>
          <p className="text-sm text-text-tertiary mb-6">QR 코드: {id}</p>
          <button
            onClick={() => navigate(`/bind/${id}`)}
            className="btn btn-primary"
          >
            저는 차주입니다, 연결하러 가기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        {/* 右上角设置按钮 */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setShowSettings(true)}
            className="p-3 bg-surface-light-gray rounded-full hover:bg-surface-gray transition-colors"
          >
            <Settings className="w-6 h-6 text-text-secondary" />
          </button>
        </div>

        {/* 页面头部 */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Phone className="w-8 h-8 text-primary-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
              차주에게 연락
            </h1>
          </div>
          <p className="text-text-secondary">
            연락 방식을 선택하세요
          </p>
        </div>

        {/* 手机号1卡片 */}
        <div className="card space-y-3">
          <div className="text-lg font-bold text-text-primary">차주 연락처</div>
          
          <button
            onClick={() => handleCall(binding.phone1)}
            className="w-full h-16 btn btn-success text-xl font-bold animate-pulse-glow"
          >
            <Phone className="w-6 h-6" />
            전화 걸기
          </button>

          <button
            onClick={() => handleSMS(binding.phone1)}
            className="w-full h-12 btn btn-success text-lg font-bold"
          >
            <MessageSquare className="w-6 h-6" />
            문자 보내기
          </button>
        </div>

        {/* 手机号2卡片(如果有) */}
        {binding.phone2 && (
          <div className="card space-y-3">
            <div className="text-lg font-bold text-text-primary">차주 연락처 2</div>
            
            <button
              onClick={() => handleCall(binding.phone2!)}
              className="w-full h-16 btn btn-success text-xl font-bold animate-pulse-glow"
            >
              <Phone className="w-6 h-6" />
              전화 걸기
            </button>

            <button
              onClick={() => handleSMS(binding.phone2!)}
              className="w-full h-12 btn btn-success text-lg font-bold"
            >
              <MessageSquare className="w-6 h-6" />
              문자 보내기
            </button>
          </div>
        )}

        {/* 底部提示 */}
        <div className="text-center text-sm text-text-tertiary">
          QR 코드 번호: {id}
        </div>
      </div>

      {/* 设置弹窗 */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="card max-w-sm w-full">
            <h3 className="text-xl font-semibold text-text-primary mb-4">차주 설정</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  value={managementPassword}
                  onChange={(e) => {
                    setManagementPassword(e.target.value)
                    setPasswordError('')
                  }}
                  placeholder="관리 비밀번호를 입력하세요"
                  className="input"
                />
                {passwordError && (
                  <p className="text-xs text-error mt-2">{passwordError}</p>
                )}
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handlePasswordSubmit}
                  className="flex-1 btn btn-primary"
                >
                  확인
                </button>
                <button
                  onClick={() => {
                    setShowSettings(false)
                    setManagementPassword('')
                    setPasswordError('')
                  }}
                  className="flex-1 btn btn-ghost"
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
