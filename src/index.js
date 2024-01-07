import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Register from './components/Register';
import RegisterPage from './pages/RegisterPage';
import HabitsPage from './pages/HabitsPage';
import GoalsPage from './pages/GoalsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }, 
  { 
    path: "/habits",
    element: <HabitsPage />
  },
  {
    path: "/goals",
    element: <GoalsPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='h-screen w-screen bg-gradient-to-br from-blue-200 to-blue-300 flex justify-center items-center py-4 md:h-min desktop:overflow-hidden'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
