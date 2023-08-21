import React, { useEffect } from 'react';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';
function App(props) {

  useEffect(() => {
    props.getUserAuth();
  }, [])
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='/home' element={<HomeWithHeader />}></Route>
        </Routes>
      </Router >
    </div >
  );
}
function HomeWithHeader() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
