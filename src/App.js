import React from "react";
import 'semantic-ui-css/semantic.min.css';
import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
