import React from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;