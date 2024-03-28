import React, { FC, ReactNode } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from 'react-router-dom';

import Paths from './utils/paths';
import Content from './components/ui/layout/Content/Content';
import { MainPage } from './pages/MainPage/MainPage';
import { ErrorBoundaryPage } from './pages/ErrorBoundaryPage/ErrorBoundaryPage';
import Header from './components/ui/layout/Header/Header';
import Footer from './components/ui/layout/Footer/Footer';
import CartPage from './pages/CartPage/CartPage';

export interface IRoute {
  path: string;
  element: ReactNode;
}

export const routes: IRoute[] = [
  {
    path: Paths.MAIN,
    element: <MainPage />,
  },
  {
    path: Paths.FAVOURITES,
    element: <MainPage />,
  },
  {
    path: Paths.CART,
    element: <CartPage />,
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
];

const MainLayout: FC = () => (
  <>
    <Header />
    <Content>
      <Outlet />
    </Content>
    <Footer />
  </>
);

const RouteEnableWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <>{children ? <>{children}</> : <Navigate to='/' replace />}</>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<MainLayout />}
      errorElement={<ErrorBoundaryPage />}
    >
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<RouteEnableWrapper>{route.element}</RouteEnableWrapper>}
        />
      ))}
    </Route>,
  ),
);
