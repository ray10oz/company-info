import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { Shield, Lock, FileCheck, Globe } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const stats = [
    { value: 'GDPR', label: '欧盟数据合规' },
    { value: 'CCPA', label: '加州隐私合规' },
    { value: '100%', label: '数据加密传输' },
  ];

  const features = [
    { icon: Shield, title: '国际数据标准', description: '全面符合 GDPR、CCPA 等国际数据保护法规，助力品牌安心出海，规避合规风险。' },
    { icon: Lock, title: '数据安全加密', description: '端到端加密存储与传输，敏感信息脱敏处理，确保客户数据与商业机密安全无虞。' },
    { icon: FileCheck, title: '跨境贸易合规', description: '覆盖各国海关、税务、商标等法规要求，提供合规申报与申报材料自动化生成。' },
    { icon: Globe, title: '多国认证支持', description: '支持 CE、FCC、FDA 等产品认证要求追踪，助力商品合规进入目标市场。' },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] sm:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-800/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2&random=103')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <FadeIn delay={0}>
              <p className="text-emerald-400 text-sm md:text-base font-medium tracking-wide mb-4">出海引擎</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">合规安全</h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                符合 GDPR 等国际数据标准，保障跨境贸易合规无忧。
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 px-6 bg-zinc-950 border-y border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 100} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">{stat.value}</div>
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
              <p className="text-gray-400 text-lg max-w-2xl">合规不是负担，而是出海的通行证。</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={index * 100} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">合规出海，安心无忧</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">联系我们，获取合规咨询与解决方案。</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">联系销售</Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompliancePage;
