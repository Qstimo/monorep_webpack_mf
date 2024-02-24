import { router } from "@/router/router";
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"

const root = document.getElementById('root')



const container = createRoot(root)
container.render(< RouterProvider router={router} />)