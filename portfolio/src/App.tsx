import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import React from 'react';
import { AppRoutes } from './AppRoutes';

export const App = () =>{
  return  (
    <Router> 
        <AppRoutes/>
    </Router>
  )
}
