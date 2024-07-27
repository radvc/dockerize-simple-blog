import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ViewArticle from './pages/ViewArticle';
import EditArticle from './pages/EditArticle';
import NewArticle from './pages/NewArticle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/show/:id',
    element: <ViewArticle />
  },
  {
    path: '/edit/:id',
    element: <EditArticle />
  },
  {
    path: '/new-article',
    element: <NewArticle />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
