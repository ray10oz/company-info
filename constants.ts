import { NavItem, FeatureItem } from './types';

export const CONTACT_INFO = {
  companyName: '广州景昭科技股份有限公司',
  address: '广州市天河区林和西路 9 号耀中广场',
  phone: '020-8888 8888',
  email: 'contact@jingzhaotech.com',
};

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '全球智能物流网', href: '/logistics' },
  { label: '大数据选品', href: '/big-data' },
  { label: '合规安全', href: '/compliance' },
  { label: '多平台互联', href: '/platform-integration' },
  { label: 'DTC品牌孵化', href: '/dtc-brand' },
  { label: '供应链方案', href: '/supply-chain' },
  { label: '数据引擎', href: '/data-engine' },
  { label: '关于景昭', href: '/about' },
  { label: '联系我们', href: '/contact' },
];

export const FEATURES: FeatureItem[] = [
  {
    title: '全球智能物流网',
    description: '通过 AI 路由算法优化跨境链路，触达全球 200+ 国家与地区，时效提升 40%。',
    image: 'https://picsum.photos/800/600?random=101',
    colSpan: 2,
    dark: true,
    href: '/logistics'
  },
  {
    title: '大数据选品',
    description: '基于深度学习的市场洞察，精准捕捉海外消费趋势。',
    image: 'https://picsum.photos/400/600?random=102',
    colSpan: 1,
    dark: true,
    href: '/big-data'
  },
  {
    title: '合规安全',
    description: '符合 GDPR 等国际数据标准，保障跨境贸易合规无忧。',
    image: 'https://picsum.photos/400/400?random=103',
    colSpan: 1,
    dark: false,
    href: '/compliance'
  },
  {
    title: '多平台互联',
    description: '一键对接 Amazon, Shopify, TikTok 等主流电商平台。',
    image: 'https://picsum.photos/400/400?random=104',
    colSpan: 1,
    dark: false,
    href: '/platform-integration'
  },
  {
    title: 'DTC 品牌孵化',
    description: '从 0 到 1，构建具备全球影响力的中国消费品牌。',
    image: 'https://picsum.photos/400/400?random=105',
    colSpan: 1,
    dark: true,
    href: '/dtc-brand'
  },
];