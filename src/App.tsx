import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Login from "./pages/login/Login";
import MainRoutes from "./pages/main_routes/MainRoutes";


import './App.css';



function App() {

  const token: string | null = localStorage.getItem('kuepa_token')
  console.log(token)
  if(!token) {
    return <Login />
  }
  return (
    <Router>
      <MainRoutes/>
    </Router>
  );
}

export default App;
