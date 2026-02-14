import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <ProductShowcase />
        <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-zinc-900 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">关于景昭科技</h2>
                <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
                    广州景昭科技股份有限公司成立于中国广州，是一家专注于跨境电商与数字化供应链的高新技术企业。
                    我们致力于搭建中国智造与全球消费者之间的桥梁。通过大数据、人工智能与物联网技术，
                    我们为企业提供从选品、营销到物流履约的一站式出海解决方案，让中国品牌在世界舞台上熠熠生辉。
                </p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
