
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FarmerDashboard from '../pages/Farmer/FarmerDashboard';
import Home from '../pages/home/Home';
import SignUp from '../pages/SignUp/SignUp';
import {useAuth} from './AuthProvider';
import Login from '../pages/login/Login'
import Chat from '../pages/chat/Chat';


const ManageRouter = () => {
    const {currentUser , type} =useAuth()
  return (
   <React.Fragment>
   {
    !currentUser &&(
        <Routes>
            <Route path = '/'  element ={<Home/>}/>
             <Route path = '/signup' element = {<SignUp/>} />
             <Route path = '/login' element = {<Login/>} />

        </Routes>
    )
   }
   {
    currentUser && type ==='FARMER'&&(
        <Routes>
            <Route path = {`/${currentUser.email}/`} element={<FarmerDashboard/>} />
            <Route path = '/' element={<FarmerDashboard/>} />
            <Route path = {`/${currentUser.email}/chat`} element={<Chat/>} />
            <Route path = '/chat' element={<Chat/>} />
        </Routes>
    )
   }
   
   
   </React.Fragment>
  )
}
export default ManageRouter