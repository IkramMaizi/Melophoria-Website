import { useState } from 'react'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import RentPage from './pages/RentPage'
import RentDetail from './pages/RentDetail.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<HomePage />} />
  <Route path="/rent" element={<RentPage />} />
  <Route path="/rent/:id" element={<RentDetail />} />
  <Route path="/list" element={<ListPage />} />
  </>
))

function App() {

  return (
    <RouterProvider router={router} />
      
  )
}

export default App
