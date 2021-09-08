import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import SignUp from "../pages/signup"

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        
        <Route exact path='/cadastro'>
          <SignUp />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes