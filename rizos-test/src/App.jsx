import './App.css'
import { Login } from './scripts/Login';
import { Map } from './scripts/Map';
import { NavBar } from './scripts/NavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Dashboard } from './scripts/Dashboard';
import { useState } from 'react';




function App() {
  
  const [token, setToken] = useState(false)
  const [map,setMap] = useState(null)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
            <Login ></Login>
            
            </div>
          }/>
          <Route path='/home' element={
          <div>
            <NavBar map={map} ></NavBar>
            <Map setMap={setMap} map={map}></Map>
            
          </div>
        }/>
        <Route path='/dashboard' element={
           <Dashboard></Dashboard>
        }/>
        </Routes>
      </Router>
    </>
  );
}

export default App
