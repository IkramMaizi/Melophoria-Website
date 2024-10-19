import React from 'react'
import "./ListPage.css"
import Footer from "../components/Footer.jsx"
import Navigation from "../components/navigation.jsx"
import ListNavigation from "../components/ListNavigation.jsx"

import { Outlet } from 'react-router-dom';

export default function ListPage() {
  return (
    <>
    <div className= "list--page">
        <Navigation />
        <ListNavigation />
        <Outlet />
        
        
    </div>
    <Footer />
    </>
  )
}
