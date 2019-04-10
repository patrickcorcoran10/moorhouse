import React, { Component } from 'react';
import Navigation from '../Navbar/Navbar';
import { Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Form from '../../pages/Form/Form';
import Opps from '../../pages/Opps/Opps';
import View from '../../pages/View/View'

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {

      }
    }
  }
  view = viewID => {
    this.setState({
      inputs: {
        id: viewID
      }
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/form' component={Form}/>
        <Route exact path='/opportunities' render={(props) => <Opps {...props} click={this.view.bind(this)} />} />
        <Route exact path='/company-view' render={(props) => <View {...props} id={this.state.inputs.id} />} />
      </div>
    )
  }
}
