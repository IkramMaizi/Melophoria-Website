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

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<HomePage />} />
  <Route path="/rent" element={<RentPage />} />
  <Route path="/rent/:id" element={<RentDetail />} />
  <Route path="/list" element={<ListPage />} >
    <Route index element={<Dashboard />} />
    <Route path="income" element={<ListIncome />} />
    <Route path="instruments" element={<ListInstruments />} />
  </Route>
  </>
))

function App() {

  return (
    <RouterProvider router={router} />
      
  )
}

export default App
