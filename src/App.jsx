// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Newperson from './Components/Newperson'
// import Person from './Components/Person'
// import Events from './Components/Event'
// import Header from './Pages/Header'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './Pages/Layout'
// import About from './Pages/About'
// import Services from './Pages/Services'
// import Home from './Pages/Home'
// import Contact from './Pages/Contact'
// import Form from './Form'


import Navbar from './Project/Components/Navbar/Navbar'
import './App.css'
import Product from './Project/Components/Product/Product'
import Form from './Form'
import First_bar from './New_project/Components/First_bar/First_bar'

// about and contact us components

function App() {

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signup' element={<Form />} />

      </Route>
    </Routes>
    </BrowserRouter> */}

<Navbar/>
<First_bar />   


    </>


  )
}

export default App
