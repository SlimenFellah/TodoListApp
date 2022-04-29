import React from 'react'

function ReadNameSection({setReadName, setName}) {
  return (
    <div className='readNameClass'>
        <h1>Entre your name :   </h1>
        <input className='name-input' placeholder='...' onChange={(e) => setName(e.target.value)}/>
        <button className='name-button' onClick={() => {setReadName(false)}}>Submit Name</button>
    </div>)
}

export default ReadNameSection