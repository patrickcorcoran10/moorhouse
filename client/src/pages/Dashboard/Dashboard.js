import React, { Component } from 'react';
import Graph from '../../components/Graph/Graph';
import '../../pages/Dashboard/Dashboard.css';
import request from 'superagent';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {},
            result: ''
        }
    };

    componentDidMount() {
        console.log('We are mounted on the Dashboard Page')
        let result = [];
        request
            .get('/api/dashboard/number-of-opps')
            .set('Accept', 'application/json')
            .then(res => {
                console.log(res.body);
                result = res.body;
                console.log(result.length)
                this.setState({
                    result: result.length
                })
             });
        let completed = [];
        request
            .get('/api/dashboard/number-of-completed')
            .set('Accept', 'application/json')
            .then(res => {
                console.log(res.body);
                completed = res.body;
                this.setState({
                    completed: completed.length
                })
            });
    }

  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
            </div>
            <div className='col-md-4'>
                <p>Dashboard</p>  
                
            </div>
            <div className='col-md-4'>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-1'>

            </div>
            <div className='col-md-3'>
                <div className='box'>
                    <h6>New Opportunities Created</h6>
                    <h6 className='number'>{this.state.result}</h6>
                </div>
            </div>
            <div className='col-md-1'>
                
            </div>
            <div className='col-md-3'>
                <div className='box'>
                    <h6>Potential Monthly Revenue</h6>
                    <h6 className='number'>$$</h6>
                </div> 
            </div>
            <div className='col-md-1'>
                
            </div>
            <div className='col-md-3'>
                <div className='box'>
                    <h6>Opportunities: Started/Completed </h6>
                    <h6 className='number'>{this.state.result}/{this.state.completed}</h6>
                </div>
            </div>
        </div>
        <hr/>
        <div className='row'>
            <div className='col-md-2'>
            </div>
            <div className='col-md-8'>
                <Graph/>
            </div>
            <div className='col-md-2'>
            </div>
        </div>
      </div>
      
    )
  }
}
