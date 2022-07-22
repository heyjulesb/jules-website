import { Home } from './HomePage/HomePage';
import { Portfolio } from './PortfolioPage/PortfolioPage';
import { FC } from 'react';

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: 'home',
    title: 'Home',
    path: '/jules-website',
    enabled: true,
    component: Home,
  },
  {
    key: 'portfolio',
    title: 'Portfolio',
    path: '/jules-website/portfolio',
    enabled: true,
    component: Portfolio,
  },
];
