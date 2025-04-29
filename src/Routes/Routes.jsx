import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/errorPage/errorPage';
import Products from '../Pages/Products/Products';
import services from '../Pages/services/services';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';

export const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {index: true, path: '/', Component: Home},
        {path: '/products', Component: Products},
        {path: '/services', Component: services},
        {path: '/blogs', Component: Blog},
        {path: '/contact', Component: Contact},
      ]
    },
]);