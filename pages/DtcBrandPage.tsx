import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { Sparkles, Globe, Target, Rocket } from 'lucide-react';

const DtcBrandPage: React.FC = () => {
  const stats = [
    { value: '0→1', label: '品牌从零孵化' },
    { value: '50+', label: '成功品牌案例' },
    { value: '全链路', label: '一站式服务' },
  ];

  const features = [
    { icon: Sparkles, title: '品牌定位与策略', description: '基于市场洞察与竞品分析，帮助品牌找准差异化定位，制定清晰的出海战略与品牌故事。' },
    { icon: Globe, title: '全球渠道搭建', description: '从独立站到主流平台，从社媒到 KOL 合作，全方位搭建品牌触达消费者的渠道矩阵。' },
    { icon: Target, title: '用户增长与留存', description: 'AI 驱动的获客与复购策略，精准圈选目标人群，提升 LTV 与品牌忠诚度。' },
    { icon: Rocket, title: '增长加速', description: '从 0 到 1 的冷启动，到 1 到 10 的规模化增长，配套资金、供应链与运营支持。' },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] sm:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-800/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2&random=105')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <FadeIn delay={0}>
              <p className="text-rose-400 text-sm md:text-base font-medium tracking-wide mb-4">出海引擎</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">DTC 品牌孵化</h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                从 0 到 1，构建具备全球影响力的中国消费品牌。
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-zinc-950 border-y border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 100} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-rose-400 mb-2">{stat.value}</div>
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
              <p className="text-gray-400 text-lg max-w-2xl">让中国品牌在世界舞台上熠熠生辉。</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={index * 100} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-rose-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">打造下一个全球品牌</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">联系我们，开启品牌孵化之旅。</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">联系销售</Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DtcBrandPage;
