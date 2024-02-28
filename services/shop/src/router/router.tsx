import { App } from "@/component/App/App";
import { Shop } from "@/pages/Shop";
import React, { Suspense } from "react"

import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const routes = [
    {
        path: "/",
        element: <App />,
        children: [

            {
                path: "/shop",
                element: <Suspense fallback={'loading...'} > <Shop /></Suspense >
            },
        ]
    },
]
export const router = createBrowserRouter(routes);
export default routes
