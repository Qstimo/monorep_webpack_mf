import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { router } from "@/router/router"
import React from 'react'


const root = document.getElementById('root')


const container = createRoot(root)
container.render(< RouterProvider router={router} />)