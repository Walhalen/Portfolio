import React from 'react'
import az from '../assets/Az.jpg';


export const ForMeInfo = () => {
  return (
    <div className='forMeInfo'>
        <div>
            <h3 style={{width: "500px", height: "fit-content"}}>
              Hello my name is Ivan Postolov.
            </h3>
            <h1 className='infoText2'> 
            I study at TUES and I am 12th grade. Programming is a big part of my life. You can see that by looking at this portfolio. I have studied a lot of languages presented below. I also have a few small and big projects that you might be interested in looking at.    
            </h1>
        </div>

        <div className='myImages'>
            <img src={az} alt="Who am I" />
        </div>
    </div>
  )
}
