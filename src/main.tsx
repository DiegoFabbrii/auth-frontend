import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/globalStyles.css';
import { Signup } from './pages/signup';
import { User } from './pages/user';
import { MainContextProvider } from './contexts/mainContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },

  {
    path: '/user/:id',
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainContextProvider>
      <RouterProvider router={router} />
    </MainContextProvider>
  </React.StrictMode>
);
