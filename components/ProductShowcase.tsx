import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="bg-black py-12 sm:py-20">
      
      {/* Product 1: Dark Mode Aesthetic - Supply Chain */}
      <div className="w-full bg-zinc-900 py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <FadeIn className="order-2 md:order-1">
            <h4 className="text-orange-500 font-semibold mb-2 text-base sm:text-lg">Jingzhao Supply Chain</h4>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              端到端供应链，<br />极致掌控。
            </h2>
            <p className="text-gray-400 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8">
               从国内工厂到海外消费者手中，全程可视化追踪。智能仓储与物流网络无缝衔接，降低 30% 物流成本，让跨境履约像本地发货一样简单。
            </p>
             <Link to="/supply-chain" className="inline-block bg-white text-black px-6 sm:px-8 py-3.5 sm:py-3 rounded-full font-medium hover:bg-gray-200 transition-colors min-h-[44px] flex items-center justify-center">
               了解供应链方案
             </Link>
          </FadeIn>
          <FadeIn delay={200} className="order-1 md:order-2">
             <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
                <img src="https://picsum.photos/800/800?random=110" alt="Supply Chain" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
             </div>
          </FadeIn>
        </div>
      </div>

      {/* Product 2: Light Mode Contrast - Market Intelligence */}
      <div className="w-full bg-white py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
           <FadeIn className="order-1">
             <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/800/800?random=111" alt="Market Intelligence" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
             </div>
          </FadeIn>
          <FadeIn delay={200} className="order-2">
            <h4 className="text-blue-600 font-semibold mb-2 text-base sm:text-lg">Market Insight Pro</h4>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black mb-4 sm:mb-6 tracking-tight leading-tight">
              洞察趋势，<br />打造爆款。
            </h2>
            <p className="text-gray-600 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8">
               覆盖全球主流电商平台的实时数据分析。AI 辅助选品与定价策略，帮助品牌精准定位目标市场，先人一步发现商机。
            </p>
            <Link to="/data-engine" className="inline-block border border-black text-black px-6 sm:px-8 py-3.5 sm:py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors min-h-[44px] flex items-center justify-center">
               体验数据引擎
             </Link>
          </FadeIn>
        </div>
      </div>

      {/* Product 3: Centered Video/Image Style - Global Ecology */}
      <div className="w-full bg-zinc-950 py-16 sm:py-24 md:py-32 text-center px-4 sm:px-6">
        <FadeIn>
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-bold text-white mb-6 sm:mb-8">全球生态</h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto">
            连接 50+ 海外仓，500+ 物流服务商，为您的品牌出海保驾护航。
          </p>
          <div className="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-white/5">
             <img src="https://picsum.photos/1600/900?random=112" alt="Global Ecology" className="w-full h-auto opacity-80" />
          </div>
        </FadeIn>
      </div>

    </section>
  );
};

export default ProductShowcase;