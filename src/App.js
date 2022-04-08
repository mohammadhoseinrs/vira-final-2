import React from 'react'
import { useRoutes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import routes from './routes'

export default function App() {
  let router=useRoutes(routes)
  return (
    <>
    <Navbar />
    {router}
    <Footer />
    </>
  )
}
