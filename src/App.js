import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import Login from './components/Login';
import Signup from "./components/Signup"
import Jokes from "./components/Jokes"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <PrivateRoute path='/jokes' component={Jokes} />
      </header>
    </div>
  );
}

export default App;
