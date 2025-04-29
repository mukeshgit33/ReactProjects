import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './Routes';
import { Route,BrowserRouter as Router,Routes,useRoutes } from 'react-router-dom';
import Menu from './Menu';

function AppRoutes()
{
  return useRoutes(routes)
}
function App() {
  return (
 
    <Router>
    <div className="container">
        <Menu/>
        <AppRoutes/>
        <footer>Copyrights</footer>
        </div>
    </Router>
  
    
  );
}

export default App;
