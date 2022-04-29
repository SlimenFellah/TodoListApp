import React , {componentDidMount, Component, useEffect} from 'react'


function Message({name}) {
   /* async function fetchData () {
      let rspons = await fetch('https://quotes.rest/qod')
      let data = await rspons.json()
      console.log(data)
  }*/
  // fetchData()
  let result = []
  async function getQuote() {
    const response = await fetch('https://quotes.rest/qod')
    const data = await response.json()
    addData(data)
  }
  function addData(object) {
    result.push(object)
    console.log('this is the final value')
    console.log(result)
  }
  getQuote()
  console.log('this is the result' ,result)
  let quote = result[0]
  console.log('this is the quote', quote)



  let showDate = new Date()
  let hour = showDate.getHours()
  return (
    <div className='Message'>
        <h1>Good {(hour < 12) ? 'Morning' : 'Afternoon' } {name}</h1>
        <h1>Quote of the day :</h1>
        <h2>“The believers with the most complete
           faith are those with the best manners.”</h2>
        <h5 className='authorName'>The Messager of Allah ﷺ</h5>
    </div>
  )
}

export default Message