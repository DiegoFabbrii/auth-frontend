import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './styles/globalStyles.css';
import { Signup } from './pages/signup';
import { User } from './pages/user';
import { MainContextProvider } from './contexts/mainContext';
import { PrivateRoutes } from './routes/privateRoutes';
import { Root } from './components/root';

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
    element: <PrivateRoutes />,
    children: [
      {
        path: '/user/:id',
        element: <User />,
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="signup" element={<Signup />} />
//       <Route path="user/:id" element={<User />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainContextProvider>
      <RouterProvider router={router} />
    </MainContextProvider>
  </React.StrictMode>
);
