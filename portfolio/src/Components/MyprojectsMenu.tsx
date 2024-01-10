import React from 'react'
import '../cssFiles/myProjectsInfo.css'

type Props = {
    setProjectName : (projectName: string) => void
}

const MyprojectsMenu = ({setProjectName} : Props) => {
  return (
    <nav>
        <button className='MyProjectButton' onClick={() => setProjectName("Alert")}>
            Alert 
        </button>
        <button className='MyProjectButton' onClick={() => setProjectName("DishWasher")}>
            DishWasher
        </button>
        <button className='MyProjectButton' onClick={() => setProjectName("Ecoware")}>
            Ecoware
        </button>

    </nav>
  )
}

export default MyprojectsMenu
