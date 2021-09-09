import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Profile from "../pages/profile/profile"
import SignUp from "../pages/signup"

const Router = () => {

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

        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router