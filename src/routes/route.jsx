import React from 'react';
import { createBrowserRouter } from 'react-router';
import ProtectedRoute from './ProtectedRoute.jsx';

const pages = import.meta.glob('../pages/**/*.jsx', { eager: true });
console.log('pages', pages);

const routes = Object.keys(pages).map((file) => {
  const mod = pages[file];

  // ✅ Transform file path to route path
  let path = file
    .replace('../pages', '') // remove base folder
    .replace(/\(([^)]+)\)/g, '') // remove route group folders
    .replace(/\/index\.jsx$/, '/') // index route
    .replace(/\.jsx$/, '') // remove extension
    .replace(/\[([^\]]+)\]/g, ':$1'); // [id] → :id

  // Clean up extra trailing slashes except for root
  if (path !== '/' && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  const PageComponent = mod.default;
  const requiredRoles = mod.requiredRoles || [];

  let element = PageComponent ? <PageComponent /> : undefined;

  // ✅ Wrap with ProtectedRoute if roles are specified
  if (PageComponent && requiredRoles.length > 0) {
    element = (
      <ProtectedRoute requiredRoles={requiredRoles}>
        <PageComponent />
      </ProtectedRoute>
    );
  }

  return {
    path: path || '/',
    element,
    loader: mod.loader,
    action: mod.action,
    errorElement: mod.errorElement
  };
});

export const router = createBrowserRouter(routes);
