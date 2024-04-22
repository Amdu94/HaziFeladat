import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Index from "./Pages/Index.jsx";
import Login from "./Pages/Login.jsx";

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
