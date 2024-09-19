import { useState } from 'react'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import HomePage from './pages/HomePage'
import RentPage from './pages/RentPage'

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<HomePage />} />
  <Route path="/rent" element={<RentPage />} />
  </>
))

function App() {

  return (
    <RouterProvider router={router} />
      
  )
}

export default App
