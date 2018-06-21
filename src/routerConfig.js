// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BlankLayout from './layouts/BlankLayout';
import Home from './pages/Home';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Web from './pages/Web';
import Hardware from './pages/Hardware';
import Solution from './pages/Solution';
import Sim from './pages/Sim';
import Aboutus from './pages/Aboutus';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: BlankLayout,
    component: Home,
  },
  {
    path: '/page3',
    layout: BlankLayout,
    component: Page3,
  },
  {
    path: '/page4',
    layout: BlankLayout,
    component: Page4,
  },
  {
    path: '/page5',
    layout: BlankLayout,
    component: Page5,
  },
  {
    path: '/web',
    layout: BlankLayout,
    component: Web,
  },
  {
    path: '/hardware',
    layout: BlankLayout,
    component: Hardware,
  },
  {
    path: '/software',
    layout: BlankLayout,
    component: Solution,
  },
  {
    path: '/sim',
    layout: BlankLayout,
    component: Sim,
  },
  {
    path: '/aboutus',
    layout: BlankLayout,
    component: Aboutus,
  },
  {
    path: '*',
    layout: BlankLayout,
    component: NotFound,
  },
];

export default routerConfig;
