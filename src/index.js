import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BlogPage } from './Pages/BlogPage';
import { ContactPage } from './Pages/ContactPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "blog",
    element: <BlogPage/>,
  },
  {
    path: "contact",
    element: <ContactPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
