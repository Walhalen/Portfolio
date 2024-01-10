import React from 'react'

type Props = {
  projectName: string
}

const MyProjectsInfo = ({projectName} : Props) => {
  return (
    <div>
        {
          projectName === "Alert" && 
          <div className='MyProjectField'>
            <div>
              <h1 className='projectInfoText'>
                Alert in my first big project which was made from hole team 
                Alert in my first big project which was made from hole team 
                Alert in my first big project which was made from hole team 
                Alert in my first big project which was made from hole team 
                Alert in my first big project which was made from hole team 
                Alert in my first big project which was made from hole team 
              </h1>
              <h1>
                <a href="" className='githubLink'>Link for github</a>
              </h1>
            </div>

              <div className='projectIMG'>

              </div>
          </div>
        }
        {
          projectName === "Ecoware" && 
          <>
            Ecoware
          </>
        }
                {
          projectName === "DishWasher" && 
          <>
            DishWasher
          </>
        }
                {
          projectName === "Appolica CP" && 
          <>
            Appolica CP
          </>
        }
    </div>
  )
}

export default MyProjectsInfo
