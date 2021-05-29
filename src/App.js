import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';

function App() {
  return (

    <Router>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
