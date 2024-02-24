import { App } from "@/component/App";
import React, { Suspense } from "react"
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
// @ts-ignore
import shopRoutes from "shop/Router"
// @ts-ignore
import adminRoutes from "admin/Router"
export
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                ...shopRoutes,
                ...adminRoutes
            ]
        },
    ]);