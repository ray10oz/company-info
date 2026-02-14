import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { LayoutGrid, Zap, RefreshCw, Plug } from 'lucide-react';

const PlatformIntegrationPage: React.FC = () => {
  const stats = [
    { value: '20+', label: '主流平台对接' },
    { value: '1 键', label: '订单同步' },
    { value: '分钟级', label: '数据更新' },
  ];

  const features = [
    { icon: LayoutGrid, title: '多平台统一管理', description: '一站式对接 Amazon、eBay、Shopify、TikTok Shop、Lazada 等主流电商平台，订单、库存、物流统一视图。' },
    { icon: Zap, title: '秒级同步', description: '订单、库存、价格实时双向同步，避免超卖与断货，提升运营效率。' },
    { icon: RefreshCw, title: '自动 reconciliation', description: '跨平台数据自动对账，异常自动预警，财务对账从小时级缩短到分钟级。' },
    { icon: Plug, title: '开放 API', description: '提供标准化 REST API，支持自定义集成与系统对接，满足企业个性化需求。' },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] sm:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-800/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2&random=104')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <FadeIn delay={0}>
              <p className="text-amber-400 text-sm md:text-base font-medium tracking-wide mb-4">出海引擎</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">多平台互联</h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                一键对接 Amazon, Shopify, TikTok 等主流电商平台。
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-zinc-950 border-y border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 100} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">核心能力</h2>
              <p className="text-gray-400 text-lg max-w-2xl">一个后台，管理全球所有店铺。</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={index * 100} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-amber-400" />
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

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">一站式多平台运营</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">联系我们，获取平台对接方案与技术支持。</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">联系销售</Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlatformIntegrationPage;
