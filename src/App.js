import React from 'react';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route  path='/home' element={<HomeWithHeader/>}></Route>
    </Routes>
  </Router >
    </div >
  );
}
function HomeWithHeader(){
  return(
    <div>
      <Header/>
      <Home/>
    </div>
  )
}

export default App;
