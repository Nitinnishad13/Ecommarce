
import React, { useContext } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import ProfileCard from './Pages/ProfileCard'
import SimpleSlider from './Pages/SimpleSlider'
import { authContext } from './context/AuthContext'
import Cart from './Pages/Cart'
import ViewDetails from './Pages/ViewDetails'
import FormOrder from './Pages/FormOrder'


const App = () => {

  const {user} = useContext(authContext)
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profileCard' element={<ProfileCard/>}/>
          <Route path='/slider' element={<SimpleSlider/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/view' element={<ViewDetails/>}/>
          <Route path='/orderForm' element={<FormOrder/>} />

        </Routes>
        <Toaster/>
        
      </BrowserRouter>
       
    </div>
  
  )
}

export default App