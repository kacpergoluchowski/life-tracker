import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='h-screen w-screen bg-gradient-to-br from-amber-200 to-amber-300 flex justify-center items-center'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
