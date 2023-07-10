import React from 'react'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import requests from '../Api/MApi'

const Marvel = () => {
  return (
    <div className='bg-[#0F1014] flex w-full h-screen relative'>
        <div className='w-[8%] h-full fixed   bg-gradient-to-r from-black to-transparent z-50'>
          <Navbar/>

        </div>
        {/* maincontent section for marvel movies */}
        <div className=''>
           <div>
            <img src="marvelbg.png" alt="" className='h-full' />
           </div>
           <div className='absolute top-[18%] left-[30%]'>
            <img src="./images/marvel.png" alt="" />
           </div>
           <div className='absolute top-[50%] ml-[6%]'>
           <Row 
            title="Upcoming Shows"
            fetchurl={requests.requestUpcoming}
           />
           </div>
        </div>
    </div>
  )
}

export default Marvel