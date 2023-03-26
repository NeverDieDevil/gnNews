import React, { useState, useEffect } from 'react'


const Clock = () => {
  const [getTime, setGetTime] = useState(new Date())
  const refreshClock = () => {
    setGetTime(new Date())
  }

  useEffect(()=>{
    const intervalId = setInterval(refreshClock, 1000);
    return function cleanUp (){
        clearInterval(intervalId)
    }
  },[])

    return (
    <div>
        {getTime.toLocaleTimeString()}
    </div>
  )
}

export default Clock