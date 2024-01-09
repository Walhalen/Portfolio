import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { routes } from './constants'
import { HomePage } from './pages/HomePage'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path={routes.home} element={<HomePage/>}/>
    </Routes>
  )
}
