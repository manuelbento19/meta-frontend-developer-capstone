import React from 'react'
import Header from './partials/header'
import Footer from './partials/footer'
import './styles.css'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
