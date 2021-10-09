import './App.css';
import { ChatSection } from './components/ChatSection';
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home"; 
import Profile from "./components/Profile";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/profile/:id" exact component={Profile}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
