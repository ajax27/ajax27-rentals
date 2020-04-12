import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeRental from 'pages/HomeRental';
import RentalDetail from 'pages/RentalDetail';
import Login from 'pages/Login';
import Register from 'pages/Register';

const Routes = () => {
  return (
    <div className="container bwm-container">
      <Switch>
        <Route exact path="/" component={HomeRental} />
        <Route path="/rentals/:id" component={RentalDetail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  )
}

export default Routes;