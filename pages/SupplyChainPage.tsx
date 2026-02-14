import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { Package, Warehouse, Truck, Eye } from 'lucide-react';

const SupplyChainPage: React.FC = () => {
  const stats = [
    { value: '30%', label: '物流成本降低' },
    { value: '全程', label: '可视化追踪' },
    { value: '无缝', label: '仓储物流衔接' },
  ];

  const features = [
    { icon: Warehouse, title: '智能仓储网络', description: '国内 + 海外仓一体化布局，支持多地发货、就近履约，缩短交付时效，降低物流成本。' },
    { icon: Truck, title: '物流网络协同', description: '整合头程、清关、尾程全链路物流资源，一键选择最优方案，从工厂到消费者全程可控。' },
    { icon: Eye, title: '全程可视化', description: '从国内工厂到海外消费者手中，每一环节状态实时可见，异常自动预警，让履约像本地发货一样简单。' },
    { icon: Package, title: '库存智能调度', description: '基于销售预测与周转率，智能建议补货与调拨策略，避免断货与滞销。' },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] sm:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-800/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2&random=110')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <FadeIn delay={0}>
              <p className="text-orange-400 text-sm md:text-base font-medium tracking-wide mb-4">解决方案</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">端到端供应链</h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                从国内工厂到海外消费者手中，全程可视化追踪。智能仓储与物流网络无缝衔接，降低 30% 物流成本。
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-zinc-950 border-y border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 100} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.value}</div>
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
              <p className="text-gray-400 text-lg max-w-2xl">极致掌控，让跨境履约像本地发货一样简单。</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={index * 100} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-orange-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">获取专属供应链方案</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">联系我们，获取定制化方案与报价。</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">联系销售</Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupplyChainPage;
