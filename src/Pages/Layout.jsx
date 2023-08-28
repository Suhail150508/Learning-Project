import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Lecture from './Lecture/Lecture'
import About from './About/About'
import Contact from './Contact/Contact'
import Login from './Login/Login'
import Details from './Details'
import Confirm from './Confirm_Enrollment/Confirm'
import Welldone from './Welldone'

function Layout() {
  return (

   <Routes>

<Route  path = '/' element={<Home/>}/>
<Route  path = '/lecture' element={<Lecture/>}/>
<Route  path = '/about' element={<About/>}/>
<Route  path = '/contact' element={<Contact/>}/>
<Route  path = '/login' element={<Login/>}/>
<Route  path = '/details' element={<Details/>}/>
<Route  path = '/confirm' element={<Confirm/>}/>
<Route  path = '/welldone' element={<Welldone/>}/>



   </Routes>
  
  )
}

export default Layout