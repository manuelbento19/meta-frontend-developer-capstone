import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import * as Consts from '../constants'
import NotFound from '../pages/notfound'
import AppLayout from '../layout'

export default function ReactRouterProvider() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path={Consts.pages.home.path} element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
