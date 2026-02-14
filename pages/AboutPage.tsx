import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { Target, Award, Users, Globe, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { value: '广州', label: '总部所在地' },
    { value: '高新技术', label: '企业资质' },
    { value: '200+', label: '服务国家与地区' },
  ];

  const values = [
    { icon: Target, title: '客户至上', description: '以客户需求为导向，持续创造价值，助力每一位合作伙伴成功出海。' },
    { icon: Award, title: '科技创新', description: '深耕大数据、AI、物联网技术，用科技赋能跨境贸易，驱动行业升级。' },
    { icon: Users, title: '开放协作', description: '与全球生态伙伴携手共建，打造开放、共赢的跨境电商服务体系。' },
    { icon: Heart, title: '长期主义', description: '专注长期价值，稳健经营，与客户、员工、社会共同成长。' },
  ];

  const milestones = [
    { year: '成立', text: '广州景昭科技股份有限公司成立，开启跨境电商服务征程。' },
    { year: '技术', text: '组建技术团队，推出智能选品与供应链管理系统。' },
    { year: '出海', text: '服务数百家品牌出海，覆盖欧美、东南亚等主要市场。' },
    { year: '今天', text: '构建覆盖选品、营销、物流、合规的全链路出海平台。' },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] sm:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')] opacity-20 bg-cover bg-center" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <FadeIn delay={0}>
              <p className="text-blue-400 text-sm md:text-base font-medium tracking-wide mb-4">关于我们</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
                关于景昭科技
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                国货出海 · 智连全球
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">公司介绍</h2>
              <p className="text-base sm:text-xl text-gray-400 leading-relaxed mb-6">
                广州景昭科技股份有限公司成立于中国广州，是一家专注于跨境电商与数字化供应链的高新技术企业。
              </p>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                我们致力于搭建中国智造与全球消费者之间的桥梁。通过大数据、人工智能与物联网技术，
                我们为企业提供从选品、营销到物流履约的一站式出海解决方案，让中国品牌在世界舞台上熠熠生辉。
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                景昭科技以「赋能中国智造，通达世界每一个角落」为使命，以科技重构跨境供应链，
                让交易无国界，助力更多中国企业走向全球。
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 border-y border-zinc-800">
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

        {/* Vision & Mission */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">愿景与使命</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                成为全球领先的跨境电商与数字化供应链服务商，让中国品牌畅行世界。
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <FadeIn delay={0} className="p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">我们的愿景</h3>
                <p className="text-gray-400 leading-relaxed">
                  以科技赋能跨境贸易，构建连接中国制造与全球消费者的数字化高速公路，
                  让每一个中国品牌都有机会在世界舞台上绽放光芒。
                </p>
              </FadeIn>
              <FadeIn delay={100} className="p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">我们的使命</h3>
                <p className="text-gray-400 leading-relaxed">
                  赋能中国智造，通达世界每一个角落。以科技重构跨境供应链，
                  让交易无国界，助力中国企业高效、合规、可持续地走向全球。
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">核心价值观</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                我们以坚定的价值观为指引，与客户、伙伴共同成长。
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <FadeIn
                  key={index}
                  delay={index * 100}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">发展历程</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                从诞生到成长，景昭科技始终与客户同行。
              </p>
            </FadeIn>

            <div className="space-y-8">
              {milestones.map((item, index) => (
                <FadeIn key={index} delay={index * 100} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.year}</h3>
                    <p className="text-gray-400">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">与景昭携手，共创出海未来</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                如有合作意向或咨询需求，欢迎与我们联系。
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all"
              >
                联系我们
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
