import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { Globe, Zap, Shield, BarChart3, Package } from 'lucide-react';

const LogisticsPage: React.FC = () => {
  const stats = [
    { value: '200+', label: '覆盖国家与地区' },
    { value: '40%', label: '时效提升' },
    { value: '24/7', label: '智能路由监控' },
  ];

  const features = [
    {
      icon: Zap,
      title: 'AI 路由算法',
      description: '基于机器学习的智能路由引擎，实时分析全球运力、清关政策与天气，自动选择最优路径，降低延迟与成本。',
    },
    {
      icon: Globe,
      title: '全球网络覆盖',
      description: '整合 DHL、FedEx、顺丰国际等顶级物流商，构建覆盖六大洲的履约网络，让中国商品直达全球消费者。',
    },
    {
      icon: Shield,
      title: '合规与安全',
      description: '全程可追溯，符合各国海关与跨境电商监管要求，保障每一单都合规清关、安全送达。',
    },
    {
      icon: BarChart3,
      title: '履约可视化',
      description: '实时追踪货件状态，智能预测交付时间，异常自动预警，让您与客户心中有数。',
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] sm:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2&random=101')] opacity-20 bg-cover bg-center" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <FadeIn delay={0}>
              <p className="text-blue-400 text-sm md:text-base font-medium tracking-wide mb-4">出海引擎</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
                全球智能物流网
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                通过 AI 路由算法优化跨境链路，触达全球 200+ 国家与地区，时效提升 40%。
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-zinc-950 border-y border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 100} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">核心能力</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                我们打造的智能物流网络，让跨境履约从「不确定」变得「可预期」。
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <FadeIn
                  key={index}
                  delay={index * 100}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">运作流程</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                从下单到签收，全链路数字化、智能化。
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { step: '01', title: '接入系统', desc: 'API 或平台对接，一键同步订单' },
                { step: '02', title: '智能分单', desc: 'AI 自动匹配最优物流方案' },
                { step: '03', title: '履约执行', desc: '全球仓配网络协同发货' },
                { step: '04', title: '全程追踪', desc: '实时状态更新，异常预警' },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <span className="text-4xl font-bold text-blue-500/30">{item.step}</span>
                    <h3 className="text-lg font-semibold mt-2 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-zinc-700" />
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">准备好智连全球？</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                联系我们，获取专属物流方案与报价。景昭科技，让中国智造通达世界每一个角落。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-8 py-3.5 sm:py-3 rounded-full font-medium hover:bg-gray-100 transition-all min-h-[44px]"
                >
                  联系销售
                  <Package className="w-4 h-4" />
                </Link>
                <Link
                  to="/#features"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-3 rounded-full font-medium text-blue-400 hover:text-blue-300 border border-blue-500/50 hover:border-blue-400 transition-all min-h-[44px]"
                >
                  了解更多方案
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LogisticsPage;
