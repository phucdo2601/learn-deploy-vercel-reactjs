// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name: any) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'user card',
    path: '/dashboard/user-cards',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Admin-User',
    path: '/admin/user/listUsers',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'department',
    path: '/dashboard/department',
    icon: getIcon('openmoji:department-store'),
  },
  {
    title: 'Admin-department',
    path: '/admin/department',
    icon: getIcon('openmoji:department-store'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'product detail',
    path: '/dashboard/products/testSearch',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'product new form',
    path: '/dashboard/products/new',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'kanban board',
    path: '/dashboard/kanban-board',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
