import React from 'react'
import DateNTime from './DateNTime'
import Message from './Message'

function LeftSection({name}) {
  return (
    <div>
        <DateNTime />
        <Message name={name}/>
    </div>
  )
}

export default LeftSection