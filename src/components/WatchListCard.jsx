import React from 'react'
import { useSelector   } from 'react-redux'

const WatchListCard = ({movie}) => {
 
  return (
    <div className='w-[200px] h-[250px]'>
      <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
          className="w-full h-full rounded-md object-cover hover:rounded-lg hover:shadow-2xl"
        />
    </div>
  )
}

export default WatchListCard