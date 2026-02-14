import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { BarChart3, TrendingUp, DollarSign, Target } from 'lucide-react';

const DataEnginePage: React.FC = () => {
  const stats = [
    { value: '全球', label: '主流平台覆盖' },
    { value: '实时', label: '数据分析' },
    { value: 'AI', label: '选品定价辅助' },
  ];

  const features = [
    { icon: BarChart3, title: '全平台数据聚合', description: '覆盖 Amazon、eBay、Shopify、TikTok 等全球主流电商平台的实时销售数据，品类、品牌、竞品一目了然。' },
    { icon: TrendingUp, title: '趋势洞察', description: 'AI 驱动的市场趋势分析，识别增长品类与机会赛道，帮助品牌先人一步发现商机。' },
    { icon: DollarSign, title: '定价策略', description: '结合竞品价格、历史销量、促销节奏，智能建议最优定价区间与促销策略，提升转化与利润。' },
    { icon: Target, title: '目标市场定位', description: '基于消费者画像与市场偏好，精准定位目标市场与人群，为产品与营销策略提供数据支撑。' },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] sm:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2&random=111')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <FadeIn delay={0}>
              <p className="text-blue-400 text-sm md:text-base font-medium tracking-wide mb-4">解决方案</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">Market Insight Pro</h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                洞察趋势，打造爆款。覆盖全球主流电商平台的实时数据分析，AI 辅助选品与定价策略。
              </p>
            </FadeIn>
          </div>
        </section>

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

        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">核心能力</h2>
              <p className="text-gray-400 text-lg max-w-2xl">用数据驱动决策，先人一步发现商机。</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={index * 100} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
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

        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">体验数据引擎</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">联系我们，获取产品演示与试用申请。</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">联系销售</Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DataEnginePage;
