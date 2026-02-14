export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  image: string;
  colSpan?: number; // 1 or 2 for grid layout
  dark?: boolean;
  href?: string; // 子页面链接
}

export interface ProductProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reversed?: boolean;
}