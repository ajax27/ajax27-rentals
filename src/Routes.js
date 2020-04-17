import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthRoute from 'components/auth/AuthRoute';
import GuestRoute from 'components/auth/GuestRoute';

import SecretPage from 'pages/SecretPage';
import HomeRental from 'pages/HomeRental';
import RentalDetail from 'pages/RentalDetail';
import Login from 'pages/Login';
import Register from 'pages/Register';


const Routes = () => {
  return (
    <div className="container bwm-container">
      <Switch>
        <Route exact path="/">
          <HomeRental />
        </Route>
        <Route path="/rentals/:id">
          <RentalDetail />
        </Route>
        <AuthRoute path="/secret">
          <SecretPage />
        </AuthRoute>
        <GuestRoute path="/login">
          <Login />
        </GuestRoute>
        <GuestRoute path="/register">
          <Register />
        </GuestRoute>
      </Switch>
    </div>
  )
}

export default Routes;