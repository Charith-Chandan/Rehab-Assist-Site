import {  useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range';

import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Dates() {
    // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ])

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle 
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if( e.key === "Escape" ) {
      setOpen(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if( refOne.current && !refOne.current.contains(e.target) ) {
      setOpen(false)
    }
  }

  return (
    <div class="text-center">

      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram"
        value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(range[0].endDate, "dd/MM/yyyy")}`}
        readOnly
        onClick={ () => setOpen(open => !open) }
      />
    <div>
      <div ref={refOne}>
        {open && 
          <DateRange
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        }
      </div>
    </div>

    </div>
  )
}

export default Dates
