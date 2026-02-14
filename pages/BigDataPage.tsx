import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { BarChart3, TrendingUp, Target, Database } from 'lucide-react';

const BigDataPage: React.FC = () => {
  const stats = [
    { value: '100万+', label: '品类产品数据覆盖' },
    { value: '95%', label: '选品准确率' },
    { value: '实时', label: '趋势洞察' },
  ];

  const features = [
    { icon: Database, title: '海量数据采集', description: '聚合亚马逊、eBay、TikTok 等主流平台销售数据，覆盖 1000 万+ SKU，为选品决策提供坚实基础。' },
    { icon: TrendingUp, title: '消费趋势洞察', description: '基于深度学习的市场分析，精准捕捉海外消费者偏好变化，先人一步发现爆款潜力品类。' },
    { icon: Target, title: '精准选品推荐', description: '结合品类竞争度、利润率、增长趋势等多维指标，AI 智能推荐最优选品方向。' },
    { icon: BarChart3, title: '定价策略优化', description: '动态监测竞品价格与促销策略，智能建议最优定价区间，提升转化与利润。' },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] sm:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2&random=102')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <FadeIn delay={0}>
              <p className="text-purple-400 text-sm md:text-base font-medium tracking-wide mb-4">出海引擎</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">大数据选品</h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                基于深度学习的市场洞察，精准捕捉海外消费趋势。
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-zinc-950 border-y border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 100} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{stat.value}</div>
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
              <p className="text-gray-400 text-lg max-w-2xl">用数据驱动选品，让每一次决策都有据可依。</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={index * 100} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">用数据发现下一个爆款</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">联系我们，获取选品洞察与市场分析方案。</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">联系销售</Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BigDataPage;
