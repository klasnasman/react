import React from 'react'
import { Outlet } from 'react-router-dom'
import Transitions from './Transitions'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = () => {
    return (
        <Transitions>
            <Header />
            <Outlet />
            <Footer />
        </Transitions>
    )
}

export default Layout
