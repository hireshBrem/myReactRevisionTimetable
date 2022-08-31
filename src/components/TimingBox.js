import React from 'react'

const TimingBox = ({timings}) => {
  return (
    <div className='rounded-md w-32 my-[2px] h-20 bg-gray-400 pt-5 text-center text-white'>
      {timings}
    </div>
  )
}

export default TimingBox