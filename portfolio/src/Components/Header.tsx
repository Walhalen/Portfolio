import React from 'react'

export const Header = () => {
  return (
    <header className='header'>

        <nav className='navBar'>
            <ul style={{display: 'flex', gap: "40px"}}>
                <button className='navBarButton'>
                    Langueges
                </button>
                <button className='navBarButton'>
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
