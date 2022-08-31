import React from 'react'
import { useState, useRef } from 'react'
import TimingBox from './TimingBox';
import PeriodBoxes from './PeriodBoxes';
import TimePicker from 'react-dropdown-timepicker';

const Timetable = () => {
  const [timingBoxes, changeTimingBoxes] = useState([
    {timing: "16:30 - 17:30"},
    {timing: "17:30 - 19:30"},
    {timing: "19:30 - 21:30"},
    {timing: "21:30 - 22:30"}
  ])

  const [time, setTime] = useState("")
  console.log(time)

  const inputEl = useRef("")

  function addTimingBox(time) {
    changeTimingBoxes([...timingBoxes, { timing: time}])
  }

  return (
    <>
      <div className='flex flex-row text-white text-center space-x-[2px]' >
        <div className="w-32 h-10 bg-cyan-600">Timings</div>
        <div className="w-32 h-10 bg-cyan-900">Monday</div>
        <div className="w-32 h-10 bg-cyan-900">Tuesday</div>
        <div className="w-32 h-10 bg-cyan-900">Wednesday</div>
        <div className="w-32 h-10 bg-cyan-900">Thursday</div>
        <div className="w-32 h-10 bg-cyan-900">Friday</div>
        <div className="w-32 h-10 bg-cyan-900">Saturday</div>
        <div className="w-32 h-10 bg-cyan-900">Sunday</div>
      </div>

      {timingBoxes.map((timingBox) => {
        console.log(timingBox.timing)
        return (
        <div className='flex flex-wrap space-x-[2px] space-y-[0px]'>
          <TimingBox timings={timingBox.timing} />
          <PeriodBoxes /> 
        </div>
      )})}
      
      <div className='bg-red-500 w-32 h-20 mt-1 text-center flex flex-wrap flex-col rounded-md'>
        <input ref={inputEl} value={time} onChange={(e) => {setTime(e.target.value)}} type="text" className='w-20 h-7 ml-6 mt-2 rounded-md' />
        <button type="submit" className='text-white bg-cyan-800 w-max ml-11 mt-2 p-1' onClick={() => { addTimingBox(time); inputEl.current=""} }>ADD</button>
      </div>
    </>
)
}

export default Timetable