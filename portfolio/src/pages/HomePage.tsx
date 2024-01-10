import React from 'react'
import { Header } from '../Components/Header'
import { ForMeInfo } from '../Components/ForMeInfo'
import { FaArrowCircleDown } from "react-icons/fa";

export const HomePage = () => {
  return (
    <div>
        <div style = {{display: "flex", justifyContent: 'center', gap: "100px"}}>
          <ForMeInfo/>
          <div >
            <Header/>
            <div style={{marginTop: "50px", display: 'flex', flexDirection: "column", alignItems: "center"}}>
               <h1 className='secondInfoText'>
                  I have a lot more interests. I can play the guitar, I like to go to the mountains, I like to run. However, if you want to see my interest in programming go down.
               </h1>
               <FaArrowCircleDown className="arrowIconDown"/>
            </div>
          </div>
          
        </div>
        
        <main>
          Home Page
        </main>
    </div>
  )
}
