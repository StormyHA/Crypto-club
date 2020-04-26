import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Guide from "./Guide/Guide";
import krypto, { Krypto } from "./Components/Om Kryptovaluta/Krypto";
import Nav from "./Components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Route exact path="/" component={krypto} />
          <Route path="/home" component={Home} />
          <Route path="/guide" component={Guide} />
        </div>
      </Router>
    );
  }
}

export default App;
