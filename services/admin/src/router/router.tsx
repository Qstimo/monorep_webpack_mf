import { App } from "@/component/App";
import { About } from "@/pages/about";
import { Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"


const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: "/admin/about",
                element: <Suspense fallback={'loading...'}><About /></Suspense>,
            },

        ]
    },
]
export const router = createBrowserRouter(routes);
export default routes
