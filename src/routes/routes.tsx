import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
//
import Blog from '../pages/Blog';
import User from '../pages/User';
import Login from '../pages/Login';
import NotFound from '../pages/Page404';
import Register from '../pages/Register';
import Products from '../pages/Products';
import DashboardApp from '../pages/DashboardApp';
import AdDepartmentPage from '../pages/admin/department/AdDepartmentPage';
import UserProfile from '../pages/UserProfile';
import UserAccount from '../pages/UserAccount';
import UserNewForm from '../sections/@dashboard/user/UserNewForm';
import ProductNewForm from '../sections/@dashboard/products/ProductNewForm';
import EcommerceProductCreate from '../sections/@dashboard/products/EcommerceProductCreate';
import EcommerceProductDetails from '../pages/EcommerceProductDetails';
import UserCardPage from '../pages/UserCardPage';
import KanbanPage from '../pages/KanbanPage';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/admin',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/admin/user/listUsers" replace />, index: true },
            { path: 'listUsers', element: <User /> },

            { path: 'new', element: <UserNewForm /> },
          ],
        },
        {
          path: 'department',
          children: [
            { element: <Navigate to="/admin/department/listDeps" replace />, index: true },
            { path: 'listDeps', element: <AdDepartmentPage /> },
          ],
        },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'user-cards', element: <UserCardPage /> },
        { path: 'department', element: <AdDepartmentPage /> },
        {
          path: 'products',
          children: [
            { element: <Navigate to="/dashboard/products/listProducts" replace />, index: true },
            { path: 'listProducts', element: <Products /> },
            { path: 'testSearch', element: <EcommerceProductDetails /> },
            { path: 'new', element: <EcommerceProductCreate /> },
          ],
        },
        // { path: 'products/new', element: <ProductNewForm /> },
        { path: 'blog', element: <Blog /> },
        { path: 'user-profile', element: <UserProfile /> },
        { path: 'user-account', element: <UserAccount /> },
        { path: 'kanban-board', element: <KanbanPage /> },
      ],
    },
    // {
    //   path: '/user-profile',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: '/', element: <Navigate to="/user-profile/profile" /> },
    //     { path: 'profile', element: <UserProfile /> },
    //   ],
    // },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
