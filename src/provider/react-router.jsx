import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import * as Consts from '../constants'
import NotFound from '../pages/notfound'
import AppLayout from '../layout'
import Booking from '../pages/booking'
import ConfirmedBooking from '../pages/confirmed-booking'

export default function ReactRouterProvider() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path={Consts.pages.home.path} element={<Home />} />
                <Route path={Consts.pages.bookings.path} element={<Booking />} />
                <Route path={Consts.pages.confirmedBooking.path} element={<ConfirmedBooking />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
