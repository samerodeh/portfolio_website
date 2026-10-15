import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'

export default function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiences" element={<Navigate to="/#experience" replace />} />
      <Route path="/skills-projects" element={<Navigate to="/#projects" replace />} />
      <Route path="/contact" element={<Navigate to="/#contact" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
}
