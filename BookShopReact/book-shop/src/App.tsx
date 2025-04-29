import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './Route';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Menu from './Menu';

function AppRoutes(){
  return useRoutes(routes);
}

function App() {
  return (
   <>
   <Router>
    <div className='container'>
      <Menu/>
      <AppRoutes/>
  
    </div>
   </Router>
   </>
  );
}

export default App;
