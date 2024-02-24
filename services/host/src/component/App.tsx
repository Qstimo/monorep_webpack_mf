import React from 'react'
import cls from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'

export const App = () => {
    return (
        <div className={cls.rt}>
            <Link to='/'>App</Link>
            <br />
            <Link to='/admin'>about</Link>
            <br />
            <Link to='/shop'>shop</Link>
            <Outlet />
        </div>
    )
}

