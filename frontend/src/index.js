import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Index from "./Pages/Index.jsx";
import Login from "./Pages/Login.jsx";
import ProductForm from "./Pages/Product.jsx";
import Statistics from "./Pages/Statistics.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/product-creator",
                element: <ProductForm />,
            },
            {
                path: "/statistics",
                element: <Statistics />,
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
