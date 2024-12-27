import React, { Fragment } from 'react'
import Header from './partials/header'
import Footer from './partials/footer'
import './styles.css'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <Fragment>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </Fragment>
  )
}
