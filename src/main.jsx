import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './routes/route.jsx';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store.js';
// import { App } from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';
//CSS & Bootstrap
import './assets/css/style.css';
//  import "./assets/js/bootstrap.bundle.min.js";
import './assets/css/select2.min.css';
//Font Awesome
// import "./assets/plugins/fontawesome/css/fontawesome.min.css";
// import "./assets/plugins/fontawesome/css/all.min.css";
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
