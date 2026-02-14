import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-zinc-950 text-gray-400 text-xs py-8 sm:py-10 px-4 sm:px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold mb-2">了解及购买</h3>
            <a href="#" className="hover:underline">Jingzhao Cloud</a>
            <a href="#" className="hover:underline">AI 解决方案</a>
            <a href="#" className="hover:underline">企业服务</a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold mb-2">公司</h3>
            <Link to="/about" className="hover:underline">关于景昭科技</Link>
            <a href="#" className="hover:underline">管理团队</a>
            <a href="#" className="hover:underline">加入我们</a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold mb-2">商务合作</h3>
            <Link to="/contact" className="hover:underline">联系销售</Link>
            <a href="#" className="hover:underline">合作伙伴计划</a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold mb-2">法律信息</h3>
            <a href="#" className="hover:underline">隐私政策</a>
            <a href="#" className="hover:underline">使用条款</a>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="leading-relaxed">Copyright © {new Date().getFullYear()} 广州景昭科技股份有限公司 (Guangzhou Jingzhao Technology Co., Ltd.) 保留所有权利。</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">粤ICP备00000000号</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;