import './index.scss';

import { Food } from '@components/Features/Food';
import { Inputs } from '@components/Features/Inputs';
import { Rules } from '@components/Features/Rules';
import { rootStore } from '@stores/RootStore';
import { RootStoreContext } from '@stores/RootStoreContext';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/rules" replace />,
      },
      { path: 'rules', element: <Rules /> },
      { path: 'inputs', element: <Inputs /> },
      { path: 'food', element: <Food /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootStoreContext.Provider value={rootStore}>
      <RouterProvider router={router} />
    </RootStoreContext.Provider>
  </StrictMode>,
);
