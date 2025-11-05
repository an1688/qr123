import { Link } from 'react-router-dom'
import { QrCode, Phone, Shield, Zap, Moon, Users, ChevronRight, CheckCircle, Star, Clock, CreditCard, HelpCircle, ChevronDown, Play, Sparkles, ArrowRight } from 'lucide-react'
import { usePageTitle } from '../hooks/usePageTitle'
import { useState, useEffect } from 'react'

export default function HomePage() {
  usePageTitle('QR주차번호판 주차번호판')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23000a14;stop-opacity:1'/%3E%3Cstop offset='50%25' style='stop-color:%23001f3f;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23000a14;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad)'/%3E%3C/svg%3E"
          >
            <source src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main2025/pc_Loading_low.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Floating Logo */}
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-500/20 to-primary-600/30 rounded-3xl mb-8 backdrop-blur-sm border border-white/10 animate-pulse">
            <QrCode className="w-16 h-16 text-primary-400" />
          </div>
          
          {/* Main Title with Animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-primary-200 bg-clip-text text-transparent">
              QR주차
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              주차번호판
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            QR코드로 차주에게 연락하기
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/call/demo123" 
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                지금 시작하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              to="/bind/demo123" 
              className="group px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl font-semibold text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                차주 등록
                <Sparkles className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900">
        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  제품 특징
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                차량 주차 문제를 해결하는 혁신적인 솔루션
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">안전</h3>
                  <p className="text-gray-300 leading-relaxed">개인정보 보호 및 안전한 연락처 관리</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">간편</h3>
                  <p className="text-gray-300 leading-relaxed">간편한 QR코드 스캔으로 즉시 연락</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-2xl flex items-center justify-center mb-6">
                    <Moon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">야광</h3>
                  <p className="text-gray-300 leading-relaxed">야간에도 선명한 QR코드 인식</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">이중번호</h3>
                  <p className="text-gray-300 leading-relaxed">주차장 전용 번호로骚扰 방지</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  사용 방법
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                간단한 4단계로 시작하세요
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'QR코드 생성', desc: '차량번호판에 QR코드 부착', icon: '🔧', color: 'from-blue-500 to-cyan-500' },
                { step: '2', title: '연락처 등록', desc: '차주가 연락처 정보 등록', icon: '📱', color: 'from-purple-500 to-pink-500' },
                { step: '3', title: 'QR코드 스캔', desc: '방문객이 QR코드 스캔', icon: '📷', color: 'from-green-500 to-emerald-500' },
                { step: '4', title: '즉시 연락', desc: '전화 또는 메시지로 연락', icon: '📞', color: 'from-orange-500 to-red-500' }
              ].map((item, index) => (
                <div key={index} className="group relative text-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  활용 사례
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                다양한 상황에서 활용되는 QR주차시스템
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '주차장阻塞', desc: '차량이 주차되어 다른 차량을 막은 경우', icon: '🚗', color: 'from-red-500 to-pink-500' },
                { title: '상가 주차', desc: '상가 앞 주차구역에서 긴급 연락이 필요한 경우', icon: '🏢', color: 'from-blue-500 to-indigo-500' },
                { title: '주차장 관리', desc: '아파트, 오피스텔 주차장에서 차량 이동이 필요한 경우', icon: '🏠', color: 'from-green-500 to-teal-500' }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 text-center leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  요금제
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                모든 사용자에게 적합한 요금제
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: '기본',
                  price: '무료',
                  desc: '개인 사용자를 위한 기본 기능',
                  features: ['QR코드 생성', '연락처 등록', '기본 통계'],
                  color: 'from-gray-500 to-gray-600',
                  border: 'border-gray-600'
                },
                {
                  name: '프리미엄',
                  price: '월 9,900원',
                  desc: '비즈니스 사용자를 위한 고급 기능',
                  features: ['기본 기능 모두 포함', '고급 통계', '우선 고객 지원', '커스텀 QR코드'],
                  color: 'from-primary-500 to-primary-600',
                  border: 'border-primary-500',
                  popular: true
                },
                {
                  name: '엔터프라이즈',
                  price: '문의',
                  desc: '대규모 조직을 위한 맞춤형 솔루션',
                  features: ['프리미엄 기능 모두 포함', 'API 연동', '전담 고객 관리', '맞춤형 개발'],
                  color: 'from-purple-500 to-purple-600',
                  border: 'border-purple-600'
                }
              ].map((plan, index) => (
                <div key={index} className={`group relative ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        추천
                      </span>
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                  <div className={`relative bg-white/5 backdrop-blur-xl border-2 ${plan.border} rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                      <div className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-4`}>
                        {plan.price}
                      </div>
                      <p className="text-gray-300">{plan.desc}</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/25' 
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}>
                      {plan.name === '프리미엄' ? '구독하기' : plan.name === '엔터프라이즈' ? '문의하기' : '시작하기'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  자주 묻는 질문
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                고객들이 자주 묻는 질문들
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  question: 'QR코드는 어떻게 생성하나요?',
                  answer: '차량번호판에 부착할 QR코드는 웹사이트에서 무료로 생성하실 수 있습니다. 간단히 차량번호와 연락처를 입력하면 즉시 QR코드가 생성됩니다.'
                },
                {
                  question: '개인정보는 안전하게 보호되나요?',
                  answer: '네, 모든 개인정보는 SSL 암호화로 보호되며, 개인정보보호법에 따라 안전하게 관리됩니다. 연락처 정보는 QR코드를 스캔한 사람에게만 공개됩니다.'
                },
                {
                  question: '야간에도 QR코드가 잘 보이나요?',
                  answer: '네, 야광 코팅이施된 QR코드로 제작되어 야간이나 어두운 곳에서도 선명하게 인식됩니다. 또한 야간 모드에서는 더욱 밝게 표시됩니다.'
                },
                {
                  question: '요금제는 언제든 변경할 수 있나요?',
                  answer: '네, 언제든 요금제를 업그레이드하거나 다운그레이드하실 수 있습니다. 변경사항은 다음 결제 주기부터 적용됩니다.'
                }
              ].map((faq, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <button className="w-full text-left flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    </button>
                    <p className="text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold font-mono text-primary-400 mb-2">
                    10,000+
                  </div>
                  <div className="text-sm text-gray-300">활성 QR코드</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-success-500/20 to-success-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold font-mono text-success-400 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-300">24시간 서비스</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-info/20 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold font-mono text-info mb-2">
                    빠른
                  </div>
                  <div className="text-sm text-gray-300">원클릭 연락</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
