import React from 'react';
import {useState, useRef } from 'react';
import PeriodBox from './PeriodBox';

const PeriodBoxes = () => {
  let shoudlAddPeriod = true
  const [subject, changeSubject] = useState("")
  const [periods, changePeriod] = useState([])
  
  function createPeriodBox() {
    changePeriod([...periods, subject])
  }

  return (
    <>
      {
        periods.map((period, index) =>{
          if(index <= 5) {
            return(
              <PeriodBox name={period} key={index}/>
            )
          }else{
            shoudlAddPeriod = false
          }
        })
      }
      {
      shoudlAddPeriod === true ?
      (<div className='bg-red-500 w-32 h-20 mt-1 text-center flex flex-wrap flex-col rounded-md overflow-x-auto'>
        <input className='mt-1 ml-5 w-20 h-7' value={subject} onChange={(e) => {changeSubject(e.target.value)}} />
        <button type="submit" className='text-white bg-cyan-800 w-11 ml-11 mt-2 p-1' onClick={() => createPeriodBox()}>ADD</button>
      </div>):console.log("No button!")
      }
    </>
    )
}

export default PeriodBoxes