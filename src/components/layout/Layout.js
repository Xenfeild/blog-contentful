import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navigation/Navbar'

export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}
