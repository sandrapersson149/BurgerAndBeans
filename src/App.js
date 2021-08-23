import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Contact from './Components/Contact/Contact';
import Navbar from "./Components/Navbar/Navbar";

import { createGlobalStyle } from 'styled-components';
import Test from "./Components/Test";

const GlobalStyle = createGlobalStyle`
 body {
   background-color: #332E27;
 }
 `

function App() {
  return (
    <>
      <Router>
        < GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/Menu' component={Menu}></Route>
          <Route path='/contact' component={Contact}></Route>
          {/* <Route path='/test' component={Test}></Route> */}
          <Route path='/' component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
