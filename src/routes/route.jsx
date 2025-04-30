import React from 'react';
import { createBrowserRouter } from 'react-router';
import ProtectedRoute from './ProtectedRoute.jsx';

const pages = import.meta.glob('../pages/**/*.jsx', { eager: true });
console.log('pages', pages);

const routes = Object.keys(pages).map((file) => {
  const mod = pages[file];
  const path = file
    .replace('../pages', '')
    .replace('/index.jsx', '/')
    .replace('.jsx', '')
    .replace(/\[([^\]]+)\]/g, ':$1'); // [userId] -> :userId

  const PageComponent = mod.default;
  const requiredRoles = mod.requiredRoles || [];

  let element = PageComponent ? <PageComponent /> : undefined;

  // Wrap with ProtectedRoute if roles are specified
  if (PageComponent && requiredRoles.length > 0) {
    element = (
      <ProtectedRoute requiredRoles={requiredRoles}>
        <PageComponent />
      </ProtectedRoute>
    );
  }

  return {
    path: path === '/' ? '/' : path,
    element,
    loader: mod.loader,
    action: mod.action,
    errorElement: mod.errorElement
  };
});

export const router = createBrowserRouter(routes);
