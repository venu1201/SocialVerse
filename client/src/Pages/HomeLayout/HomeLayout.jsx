import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navigationbar/Navbar';
import TopNavbar from '../../components/navigationbar/TopNavbar'
import DownNavbar from '../../components/navigationbar/DownNavbar'
const HomeLayout = () => {
    const authdata=useSelector((state)=>state.authData);
    const navigate=useNavigate();
    useEffect(() => {
        if(authdata===null)
        {
            navigate('/');
        }
    }, [authdata])
    
    
  return (
    <div className='h-full w-screen flex xmedium:flex-row flex-col '>
        <section className='Small:w-[250px] w-[90px] xmedium:flex hidden h-full '>
            <Navbar/>
        </section>
        <div className='xmedium:hidden  flex justify-center items-center h-[70px]'>
            <TopNavbar/>
        </div>
<<<<<<< HEAD
        <div className='Small:w-[calc(100%-250px)] xmedium:w-[calc(100%-90px)] w-full flex justify-center h-[calc(100%-190px)] xmedium:h-full    '>
=======
        <div className='Small:w-[calc(100%-250px)] xmedium:w-[calc(100%-90px)] w-full flex justify-center h-[calc(100%-170px)] xmedium:h-full    '>
>>>>>>> 7b53e0adc6403d6eba226a28bbb438d90c79c18b
            <Outlet/>
        </div>
        <div className='xmedium:hidden flex h-[65px] '>
            <DownNavbar/>
        </div>
<<<<<<< HEAD
        <div className='xmedium:hidden flex h-[65px]'>
=======
        <div className='xmedium:hidden flex h-[50px]'>
>>>>>>> 7b53e0adc6403d6eba226a28bbb438d90c79c18b
            
        </div>
        
        
    </div>
  )
}

export default HomeLayout
