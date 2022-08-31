import React from 'react'
import { useState } from 'react'


const PeriodBox = ({name}) => {
  // const [currentStyling, setStyling] = useState("")

  // const ecoStyling = 'font-bold rounded-md w-32 h-20 bg-red-500 inline-block'
  // const mathStyling = 'font-bold rounded-md w-32 h-20 bg-blue-500 inline-block'
  // const phyStyling = 'font-bold rounded-md w-32 h-20 bg-purple-500 inline-block'
  // const defaultStyling = 'font-bold rounded-md w-32 h-20 bg-gray-500 inline-block'

  // if(name.toLowerCase() == "physics") {
  //   setStyling(phyStyling)
  // } else if(name.toLowerCase() == "economics") {
  //   setStyling(ecoStyling)
  // } else if(name.toLowerCase() == "maths") {
  //   setStyling(mathStyling)
  // } else{
  //   setStyling(defaultStyling)
  // }

  return (
    <div className='font-bold rounded-md w-32 h-20 bg-red-500 inline-block'><h1 className='text-center text-[20px]'>{name}</h1></div>
  )
}

export default PeriodBox