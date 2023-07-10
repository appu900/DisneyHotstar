import React from 'react'

const ContinuewatchingCard = ({mvy}) => {
  return (
    <div className='min-w-[270px]  min-h-[250px] bg-[#0F1014] hover:bg-[#16181F]  rounded-t-md relative cursor-pointer hover:scale-105 z-50 transition-all '>
       <img src={`https://image.tmdb.org/t/p/original/${mvy?.backdrop_path}`} alt="" className='h-[150px] w-full rounded-t-md' />
       <div className='mt-2 text-left font-semibold text-[17px] w-full overflow-hidden b ml-2'>
        <p>{mvy.title}</p>
        <p className='font-normal text-sm tracking-wider mt-1'>1hr 23min left</p>
       </div>
       <div className='absolute  top-[146px] h-1 w-full bg-gray-600 '></div>
    <div className='absolute  top-[146px] h-1 w-[60%] bg-blue-600 '></div>
       
    </div>
  )
}

export default ContinuewatchingCard