import "./app.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./pages/feed";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/profile/:id?">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
