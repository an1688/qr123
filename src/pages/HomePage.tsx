import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { QrCode, Smartphone, Shield, Clock, Car, Building2, Home as HomeIcon, ChevronDown, ChevronUp, Zap, Eye, Users, ArrowRight, Check, Star } from 'lucide-react'

function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const howToSteps = [
    {
      icon: QrCode,
      title: "1. QR 코드 스캔",
      description: "스마트폰으로 주차 공간 QR 코드를 스캔하세요",
      detail: "각 주차 공간에는 고유한 QR 코드 식별자가 있습니다"
    },
    {
      icon: Smartphone,
      title: "2. 운전자 연락",
      description: "시스템이 자동으로 운전자 연락처 정보를 표시합니다",
      detail: "전화 또는 문자 메시지로 운전자에게 빠르게 연락하세요"
    },
    {
      icon: Shield,
      title: "3. 소통 및 이동",
      description: "주차 시간을 조정하고 충돌을 피하세요",
      detail: "의사 소통의 다리를 구축하고 주차 문제를 효율적으로 해결하세요"
    },
    {
      icon: Clock,
      title: "4. 서비스 완료",
      description: "서비스 로그를 기록하고 피드백을 제공하세요",
      detail: "시스템이 자동으로 기록하고 개선 사항을 제안합니다"
    }
  ]

  const scenarios = [
    {
      icon: Car,
      title: "상업 주차",
      description: "쇼핑 센터 및 사무실 건물을 위한 효율적인 주차 관리",
      features: ["24/7 모니터링", "실시간 공실 감지", "스마트 결제"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "주거 단지",
      description: "주민과 방문자를 위한 편리한 주차 서비스",
      features: ["주민 우선", "방문자 등록", "차량 추적"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: HomeIcon,
      title: "개인 주차",
      description: "개인 또는 소규모 장소를 위한 유연한 주차 솔루션",
      features: ["맞춤형 서비스", "전용 관리", "보안 보장"],
      color: "from-green-500 to-emerald-500"
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "초고속 대응",
      description: "3초 이내에 운전자와 연락, 대기 시간 없음"
    },
    {
      icon: Eye,
      title: "개인정보 보호",
      description: "임시 연락처 정보로 운전자 개인정보 안전 보장"
    },
    {
      icon: Users,
      title: "팀 협업",
      description: "다중 사용자 협업 지원으로 더 효율적인 관리"
    }
  ]

  const faqData = [
    {
      question: "QR 코드 주차 시스템은 어떻게 작동하나요?",
      answer: "시스템은 각 운전자에게 고유한 QR 코드를 생성합니다. 운전자에게 연락이 필요할 때 QR 코드를 스캔하여 임시 연락처 정보를 얻어 효율적인 의사 소통이 가능합니다."
    },
    {
      question: "운전자 정보는 어떻게 보호되나요?",
      answer: "숨겨진 연락 방식을 채택하여 운전자가 실제 전화번호를 공개할 필요가 없습니다. 모든 연락처 정보는 임시적이며, 시스템에서 가상 번호를 생성하여 개인정보를 보호합니다."
    },
    {
      question: "시스템은 어떤 시나리오에 적용할 수 있나요?",
      answer: "상가, 상업 주차장, 쇼핑센터, 사무실 건물 및 다양한 주차 구역에 적용 가능합니다. 특히 운전자와 빈번한 연락이 필요한 지역에 적합합니다."
    },
    {
      question: "비용은 어떻게 계산되나요?",
      answer: "일회성 결제 시스템으로, QR 코드 구매 후 평생 무료 사용이 가능합니다."
    },
    {
      question: "시스템 안정성은 어떻게 보장되나요?",
      answer: "99.9% 고가용성 아키텍처와 다중 백업 메커니즘을 통해 안정적인 서비스 운영을 보장합니다. 24/7 기술 지원으로 어떤 문제든 즉시 대응합니다."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="KR010 Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-white">KR010</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['hero', 'howto', 'scenarios', 'guide', 'faq'].map(section => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {section === 'hero' && '홈'}
                  {section === 'howto' && '사용 방법'}
                  {section === 'scenarios' && '시나리오'}
                  {section === 'guide' && '가이드'}
                  {section === 'faq' && 'FAQ'}
                </a>
              ))}
            </div>

            <div className="flex space-x-4">
              <Link
                to="/bind/demo123"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                시작하기
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main2025/pc_Loading_low.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-purple-900/80"></div>
        
        {/* Particle Background Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                KR010 스마트 주차 시스템
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              스마트 QR 코드 기술로 주차 관리를 간단하고 효율적으로
              <br />
              <span className="text-cyan-400">24/7 스마트 서비스 · 개인정보 보호 · 초고속 대응</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/bind/demo123"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 flex items-center space-x-2"
              >
                <span>사용 시작</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/bind/demo123"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
              >
                운전자 등록
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <feature.icon className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </section>

      {/* How to Use */}
      <section id="howto" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                사용 방법
              </span>
            </h2>
            <p className="text-xl text-gray-400">간단한 4단계로 스마트 주차 경험을 시작하세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < howToSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 z-0" />
                )}
                
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-400 mb-3">{step.description}</p>
                  <p className="text-cyan-400 text-sm">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                적용 시나리오
              </span>
            </h2>
            <p className="text-xl text-gray-400">다양한 주차 환경에 적용 가능하여 관리 효율성을 향상시킵니다</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${scenario.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <scenario.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{scenario.title}</h3>
                  <p className="text-gray-400 mb-6">{scenario.description}</p>
                  
                  <ul className="space-y-2">
                    {scenario.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Guide */}
      <section id="guide" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                KR010 QR 코드 주차 시스템 상세 가이드
              </span>
            </h2>
            <p className="text-xl text-gray-400">시스템 기능과 기술적 특성에 대해 자세히 알아보세요</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  핵심 기술
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>AI 기반 스마트 매칭 알고리즘으로 3초 내에 운전자 연락 완료</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>블록체인 기술로 금융 등급 개인정보 보호를 통한 데이터 보안 확보</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>클라우드 동기화 기술로 다중 장치 동시 사용 지원</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  성능 지표
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                    <div className="text-sm text-gray-400">시스템 가용성</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">&lt;3s</div>
                    <div className="text-sm text-gray-400">응답 시간</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">24/7</div>
                    <div className="text-sm text-gray-400">연중무휴 서비스</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">0</div>
                    <div className="text-sm text-gray-400">개인정보 유출</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
              <div className="text-center">
                <QrCode className="w-24 h-24 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">지금 경험하세요</h3>
                <p className="text-gray-400 mb-6">
                  지금 당신만의 주차 관리 시스템을 만들고 기술이 가져다주는 편리함을 누리세요
                </p>
                <Link
                  to="/bind/demo123"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  QR 코드 생성
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                자주 묻는 질문
              </span>
            </h2>
            <p className="text-xl text-gray-400">사용 과정에서의 질문에 답변해 드립니다</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/logo.png" alt="KR010 Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">KR010</span>
            </div>
            <p className="text-gray-400 mb-6">주차 관리를 더 스마트하고 간단하게</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/bind/demo123"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                사용 시작
              </Link>
              <Link
                to="/bind/demo123"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                운전자 등록
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-700 text-gray-500 text-sm">
              <p>&copy; 2025 KR010 스마트 주차 시스템. 모든 권리 보유.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage