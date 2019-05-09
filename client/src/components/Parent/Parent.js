import React, { Component } from 'react';
import Navigation from '../Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Form from '../../pages/Form/Form';
import Opps from '../../pages/Opps/Opps';
import View from '../../pages/View/View';
import Display from '../../pages/Display/Display'

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {}
    }
  };
  view = viewID => {
    this.setState({
      inputs: {
        id: viewID
      }
    })
  };

  ROI = idChosen => {
    this.setState({
        inputs: {
            id: idChosen,
        }
    })
  };

  render() {
    return (
      <div>
      {/* <Router> */}
        <Navigation />
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/form' component={Form}/>
          <Route exact path='/opportunities' render={(props) => <Opps {...props} click={this.view.bind(this)} />} />
          <Route exact path='/company' render={(props) => <View {...props} id={this.state.inputs.id} click={this.ROI.bind(this)}/>}/>
          <Route exact path='/company-display' render={(props) => <Display {...props} id={this.state.inputs.id} />} />
      {/* </Router> */}
      </div>
    )
  }
}
