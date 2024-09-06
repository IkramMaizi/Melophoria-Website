import { useState } from 'react'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import HomePage from './pages/HomePage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<HomePage />} />
))

function App() {

  return (
    <RouterProvider router={router} />
      
  )
}

export default App
