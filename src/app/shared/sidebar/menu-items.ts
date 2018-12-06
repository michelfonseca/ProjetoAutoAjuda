import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Início',
    icon: '',
    class: 'nav-small-cap ',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '/component/carousel',
    title: 'Home',
    icon: 'mdi mdi-home',
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
    title: 'Desabafos',
    icon: 'mdi mdi-voice',
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
    path: '',
    title: 'Para você',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: [],
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
