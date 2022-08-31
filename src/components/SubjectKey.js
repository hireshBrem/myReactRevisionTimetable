import React from 'react'

const SubjectKey = () => {
  return (
    <div className='mb-5 font-poppins text-[20px]'>
        <div className="flex flex-wrap flex-col">
            <div className="flex flex-wrap flex-row m-1">
                <div className='w-10 h-10 bg-red-500 rounded-md'></div>
                <h1 className='ml-2 mt-2 justify-center'>Economics</h1>
            </div>
            <div className="flex flex-wrap flex-row m-1">
                <div className='w-10 h-10 bg-blue-500 rounded-md'></div>
                <h1 className='ml-2 mt-2 justify-center'>Maths</h1>
            </div>
            <div className="flex flex-wrap flex-row m-1">
                <div className='w-10 h-10 bg-purple-500 rounded-md'></div>
                <h1 className='ml-2 mt-2 justify-center'>Physics</h1>
            </div>
        </div>
    </div>
  )
}

export default SubjectKey