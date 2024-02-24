import React from 'react'
import cls from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'

export const App = () => {
    return (
        <div className={cls.rt}>
            <h1>admin module</h1>
            <Outlet />
        </div>
    )
}

