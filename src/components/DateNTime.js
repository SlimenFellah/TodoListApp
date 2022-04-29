import React, {useState, useEffect} from 'react'


function DateNTime() {
        let showDate = new Date()
        let [dt, setDt] = useState({
            
        })
       /* let DateTextDay = showDate.toDateString()
        let DateTextHour = showDate.toLocaleTimeString() */
        setInterval(() =>
         {setDt({DateTextDay : showDate.toDateString(), DateTextHour : showDate.toLocaleTimeString()})},1000)

    return (
        <div className='Date textAlignCenter'>
            <h1 >Current Date and Time : </h1>
            <h1 className='clr'>{dt.DateTextDay}</h1>
            <h1 className='clr'>{dt.DateTextHour}</h1>
        </div>
    )
}

export default DateNTime