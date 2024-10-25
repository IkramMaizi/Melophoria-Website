import { useState } from 'react'
import './App.css'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import RentPage from './pages/RentPage'
import Dashboard from './pages/ListDashboard'
import RentDetail from './pages/RentDetail.jsx'
import ListIncome from "./pages/ListIncome.jsx"
import ListInstruments from "./pages/ListInstruments.jsx"
import ListReviews from "./pages/ListReviews.jsx"
import AboutUsPage from "./pages/AboutUsPage.jsx"





function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<HomePage />} />
    <Route path="/rent" element={<RentPage />} />
    <Route path="/rent/:id" element={<RentDetail />} />
    <Route path="/list" element={<ListPage />} >
      <Route index element={<Dashboard />} />
      <Route path="income" element={<ListIncome />} />
      <Route path="instruments" element={<ListInstruments />} />
      <Route path="reviews" element={<ListReviews />} />
    </Route>
    <Route path="/about" element={<AboutUsPage />} />
    </>
  ))


  
   

  

  return (
    <>
    
    <RouterProvider router={router} />
    </>
      
  )
}

export default App
