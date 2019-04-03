import React, { Component } from 'react';
import Graph from '../../components/Graph/Graph';
import '../../pages/Dashboard/Dashboard.css';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {}
        }
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
                <div className='box'>
                    <h6>New Opportunities Created</h6>
                    <h6>##</h6>
                </div>
            </div>
            <div className='col-md-1'>
                
            </div>
            <div className='col-md-3'>
                <div className='box'>
                    <h6>Potential Monthly Revenue</h6>
                    <h6>##</h6>
                </div> 
            </div>
            <div className='col-md-1'>
                
            </div>
            <div className='col-md-3'>
                <div className='box'>
                    <h6>Opportunities Started/Completed</h6>
                    <h6>##</h6>
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
