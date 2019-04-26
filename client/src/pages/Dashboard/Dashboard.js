import React, { Component } from 'react';
import Graph from '../../components/Graph/Graph';
import '../../pages/Dashboard/Dashboard.css';
import request from 'superagent';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {},
            result: [],
            completed: [],
            revenues: ''
        }
    };

    componentWillMount() {
        console.log('We are mounted on the Dashboard Page')
        let result = [];
        request
            .get('/api/dashboard/number-of-opps')
            .set('Accept', 'application/json')
            .then(res => {
                // console.log(res.body);
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
                // console.log(res.body);
                completed = res.body;
                this.setState({
                    completed: completed.length
                })
            });
        let revenues = [];
        let displayRevenue = [];
        let sum = '';
        request 
            .get('/api/dashboard/revs')
            .set('Accept', 'application/json')
            .then(res => {
                console.log(res.body);
                revenues = res.body;
                for (let i = 0; i < revenues.length; i++) {
                    // console.log(revenues[i].plusRevenue);
                    displayRevenue.push(parseInt(revenues[i].plusRevenue));
                    console.log(displayRevenue);
                    sum = displayRevenue.reduce((partial_sum, a) => partial_sum + a);
                    console.log(sum);
                };
                this.setState({
                    revenues: sum,
                })
            });
    };

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
                <div className='circle'>
                    <h6>New Opportunities Created</h6>
                    <h6 className='number'>{this.state.result}</h6>
                </div>
            </div>
            <div className='col-md-1'>
                
            </div>
            <div className='col-md-3'>
                <div className='circle'>
                    <h6>Potential Monthly Revenue</h6>
                    <h6 className='number'>${this.state.revenues}</h6>
                </div> 
            </div>
            <div className='col-md-1'>
                
            </div>
            <div className='col-md-3'>
                <div className='circle'>
                    <h6>Opportunities Completed </h6>
                    <h6 className='number'>{((parseInt(this.state.completed)/parseInt(this.state.result))*100).toFixed(0)}%</h6>
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
