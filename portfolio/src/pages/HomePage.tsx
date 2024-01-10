import React, { useState } from 'react'
import { Header } from '../Components/Header'
import { ForMeInfo } from '../Components/ForMeInfo'
import { FaArrowCircleDown } from "react-icons/fa";
import LanguagesInfo from '../Components/LanguagesInfo';
import MyProjectsInfo from '../Components/MyProjectsInfo';
import MyprojectsMenu from '../Components/MyprojectsMenu';

export const HomePage = () => {

  const[projectName, setProjectName] = useState("Alert")

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
        <hr style = {{margin: "15px", marginTop: "70px", color:"#fad02c"}}/>  
        <main>
          <h1 style={{marginLeft: "20px", marginBottom: "20px "}}>Languages: </h1>
          <div style={{display: 'flex', justifyContent: "center"}}>
            <LanguagesInfo/>
          </div>
          <h1 style={{marginLeft: "20px", marginBottom: "20px "}}>Projects: </h1>
          <div style={{display: 'flex', justifyContent: "center"}}>
            <MyprojectsMenu setProjectName = {setProjectName}/>
          </div>  
          <MyProjectsInfo projectName = {projectName}/>
        </main>
    </div>
  )
}
