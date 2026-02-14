import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white pt-20">
      
      {/* Background Ambience - Globe/Network feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-800/20 rounded-full blur-[100px] pointer-events-none" />
      {/* A darker, more logistic/tech background image */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2&random=99')] opacity-30 bg-cover bg-center" />

      <div className="z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn delay={0}>
          <h2 className="text-base sm:text-xl md:text-2xl font-medium text-blue-400 mb-3 sm:mb-4 tracking-wide">
            广州景昭科技
          </h2>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 leading-tight">
            国货出海 · 智连全球
          </h1>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-base sm:text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            赋能中国智造，通达世界每一个角落。<br className="hidden sm:block"/> 
            以科技重构跨境供应链，让交易无国界。
          </p>
        </FadeIn>

        <FadeIn delay={600} className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
           <a href="#about" className="group flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-8 py-3.5 sm:py-3 rounded-full font-medium hover:bg-gray-100 transition-all min-h-[44px] sm:min-h-0">
             探索业务
             <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </a>
           <Link to="/contact" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-3 rounded-full font-medium text-blue-400 hover:text-blue-300 transition-all min-h-[44px] sm:min-h-0">
             合作咨询
             <ChevronRight className="w-4 h-4" />
           </Link>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce opacity-50">
        <span className="text-xs text-gray-500">向下滑动探索</span>
      </div>
    </section>
  );
};

export default Hero;