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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/Menu' component={Menu}></Route>
          <Route path='/contact' component={Contact}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
