import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] sm:min-h-[50vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2&random=2')] opacity-20 bg-cover bg-center" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <FadeIn delay={0}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
                联系我们
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                欢迎与我们取得联系，期待与您合作
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">公司地址与联系方式</h2>

              <div className="space-y-6 sm:space-y-10">
                {/* Address */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">公司地址</h3>
                      <p className="text-gray-400 text-base sm:text-lg leading-relaxed break-words">{CONTACT_INFO.companyName}</p>
                      <p className="text-gray-300 text-base sm:text-lg mt-2 break-words">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">联系电话</h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                      className="text-gray-300 text-base sm:text-lg hover:text-blue-400 transition-colors break-all"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">电子邮箱</h3>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-gray-300 text-base sm:text-lg hover:text-blue-400 transition-colors break-all"
                      >
                      {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
