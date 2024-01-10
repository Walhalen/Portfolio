import React, { useRef } from 'react'


type Props = {
    refLanguages: any
    refProjects: any
}

export const Header = ({refLanguages, refProjects} : Props) => {
    
  return (
    <header className='header'>

        <nav className='navBar'>
            <ul style={{display: 'flex', gap: "40px"}}>
                <button className='navBarButton' onClick={() => {
                    refLanguages.current?.scrollIntoView({behavior: "smooth"})  
                }}>
                    Languages
                </button>
                <button className='navBarButton' onClick={() => {
                    refProjects.current?.scrollIntoView({behavior: "smooth"})  
                }}>
                    Projects
                </button>
            </ul>
        </nav>
        <h1 className='headerTitle'>
            Portfolio
        </h1>
    </header>
  )
}
