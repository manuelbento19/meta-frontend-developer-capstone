import React, { Fragment } from 'react'
import Hero from './partials/hero'
import WeekSpecials from './partials/weekSpecial'
import Testimonials from './partials/testimonials'
import Story from './partials/story'

export default function Home() {
  return (
    <Fragment>
        <Hero/>
        <WeekSpecials/>
        <Testimonials/>
        <Story/>
    </Fragment>
  )
}
