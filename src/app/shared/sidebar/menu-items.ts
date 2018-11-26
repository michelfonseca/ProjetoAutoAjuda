import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Dashboard',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '/component/carousel',
    title: 'Início',
    icon: 'mdi mdi-gauge',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Seu espaço',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '/component/accordion',
    title: 'Perguntas',
    icon: 'mdi mdi-equal',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/alert',
    title: 'Respostas',
    icon: 'mdi mdi-message-bulleted',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/modal',
    title: 'Depoimentos',
    icon: 'mdi mdi-heart-box',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  }
];
