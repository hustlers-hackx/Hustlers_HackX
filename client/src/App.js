import './App.css';
import { ChatSection } from './components/ChatSection';
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home"; 
import Profile from "./components/Profile";
import { Friends } from './components/Friends';
import {Login} from "./Auth/Login"
import {Signup} from "./Auth/Signup"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/Signup" exact component={Signup}/>
            <Route path="/profile/:id" exact component={Profile}/>
            <Route path="/friends" exact component={Friends}/>
            <Route exact path="/Login" component={Login}/>  
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={{Profile}}/>  
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
