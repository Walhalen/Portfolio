import React, { useRef, useState } from 'react'
import { Header } from '../Components/Header'
import { ForMeInfo } from '../Components/ForMeInfo'
import { FaArrowCircleDown } from "react-icons/fa";
import LanguagesInfo from '../Components/LanguagesInfo';
import MyProjectsInfo from '../Components/MyProjectsInfo';
import MyprojectsMenu from '../Components/MyprojectsMenu';
import { FaSlackHash } from "react-icons/fa";

export const HomePage = () => {
  const refLanguages = useRef(null);
  const refProjects  = useRef(null); 
  const[projectName, setProjectName] = useState("Alert")

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
  React.useEffect(() => {

    window.addEventListener("resize", () => setViewportWidth(window.innerWidth));
   

  }, []);


  return (
    <div>
        {
          viewportWidth > 780 ? 
          <div className='FirstSection'>
            <ForMeInfo/>
            <div style = {{width: "30%", display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
              <Header refLanguages={refLanguages} refProjects = {refProjects}/>
              <div style={{marginTop: "50px", display: 'flex', flexDirection: "column", alignItems: "center"}}>
                <h1 className='secondInfoText'>
                    I have a lot more interests. I can play the guitar, I like to go to the mountains, I like to run. However, if you want to see my interest in programming go down.
                </h1>
                <FaArrowCircleDown className="arrowIconDown"/>
              </div>
            </div>
            
          </div>
          :
          <div className='FirstSection'>
            <Header refLanguages={refLanguages} refProjects = {refProjects}/>
            <ForMeInfo/>
          </div>
        }

        <hr style = {{margin: "15px", marginTop: "70px", color:"#fad02c"}}/>  
        <main>
          <h1 style={{marginLeft: "20px", marginBottom: "20px "}}   ref = {refLanguages} >Languages: </h1>
          <div style={{display: 'flex', justifyContent: "center"}}>
            <LanguagesInfo/>
          </div>
          <h1 style={{marginLeft: "20px", marginBottom: "20px "}} ref = {refProjects}>Projects: </h1>
          <div style={{display: 'flex', justifyContent: "center"}}>
            <MyprojectsMenu setProjectName = {setProjectName}/>
          </div>  
          <MyProjectsInfo projectName = {projectName}/>
        </main>

        <footer className='Footer'>
          <FaSlackHash id='hashTag'/>
          <h3>
            email: ispostolov@gmail.com 
          </h3>

          <h3>
            ig: mr.kofaman
          </h3>
        </footer>

    </div>
  )
}
