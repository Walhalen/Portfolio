import React from 'react'
import { Header } from '../Components/Header'
import { ForMeInfo } from '../Components/ForMeInfo'

export const HomePage = () => {
  return (
    <div>
        <div style = {{display: "flex"}}>
          <ForMeInfo/>
          <Header/>
        </div>
        
        <main>
          Home Page
        </main>
    </div>
  )
}
