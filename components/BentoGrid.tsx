import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURES } from '../constants';
import FadeIn from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 bg-zinc-950 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">出海引擎核心技术</h2>
            <p className="text-gray-400 text-base sm:text-xl max-w-2xl">
              我们不仅提供产品，更提供通往全球市场的数字化高速公路。每一项技术，都只为更高效的连接。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {FEATURES.map((feature, index) => (
            <FadeIn
              key={index}
              delay={index * 100}
              className={`relative group overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between transition-transform duration-500 hover:scale-[1.01] active:scale-[0.99] ${
                feature.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'
              } ${feature.dark ? 'bg-zinc-900 text-white' : 'bg-gray-100 text-black'} ${feature.href ? 'cursor-pointer' : ''}`}
            >
              {feature.href && <Link to={feature.href} className="absolute inset-0 z-20" aria-label={`查看${feature.title}详情`} />}
              {/* Image Background for some cards */}
               <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={`w-full h-full object-cover ${feature.dark ? 'opacity-50' : 'opacity-80'}`}
                  />
                  {feature.dark && <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>}
               </div>

              <div className="relative z-10 flex flex-col h-full justify-between min-h-[240px] sm:min-h-[300px] md:min-h-[400px]">
                <div className="flex justify-between items-start">
                   <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${feature.dark ? 'text-white' : 'text-zinc-900'}`}>
                    {feature.title}
                  </h3>
                  <ArrowUpRight className={`w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${feature.dark ? 'text-white' : 'text-black'}`} />
                </div>
                
                <p className={`text-base sm:text-lg md:text-xl font-medium mt-auto ${feature.dark ? 'text-gray-200' : 'text-zinc-700'}`}>
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;