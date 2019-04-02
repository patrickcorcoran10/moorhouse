import React, { Component } from 'react';
import Navigation from '../Navbar/Navbar';
import { Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Form from '../../pages/Form/Form';
import Opps from '../../pages/Opps/Opps';

export default class Parent extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/form' component={Form}/>
        <Route exact path='/opportunities' component={Opps}/>
      </div>
    )
  }
}
