import React, { Component } from 'react';
import '../Opps/Opps.css';
import request from 'superagent';
import axios from 'axios';


export default class Opps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputsOpps: [],
      inputsCompleted: []
    };
    this.delete = this.delete.bind(this);
    this.complete = this.complete.bind(this);
    this.view = this.view.bind(this);
    this.notComplete = this.notComplete.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  };
  
  componentWillMount() {
    console.log("We are now mounted on the Opps page");
    request
      .get('/api/opps')
      .then(res => {
          this.setState({
            inputsOpps:  res.body 
          })
      })
      .catch(err => {
          console.log(err)
      });
    request
      .get('/api/opps-completed')
      .then(res => {
        this.setState({
            inputsCompleted: res.body
        })
      })
      .catch(err => {
        console.log(err)
      });
  };

  delete = e => {
    e.preventDefault();
    var deleteID = e.target.value;
    console.log(deleteID);
    axios.delete('/api/delete'+deleteID)
    .then(res => {
      this.componentWillMount();
    })
    alert('You have deleted a record.')
  };

  view = e => {
    e.preventDefault();
    var viewID = e.target.value;
    console.log(viewID);
    this.props.history.push('/company');
    this.props.click(viewID);
  };

  complete = e => {
    e.preventDefault();
    console.log('we are updating this record to complete');
    let updateID = e.target.value;
    console.log(updateID);
    axios.put('/api/opps-complete'+ updateID, {
      completed: true
    })
    .then(function(response) {
      console.log(response);
      this.componentWillMount();
    })
    .catch(function(err) {
      console.log(err)
    });
    alert("This Record is Now Completed.");
  };

  notComplete = e => {
    e.preventDefault();
    console.log('We are moving this record from the complete list to the not yet complete list.', e.target.value);
    let notCompleteID = e.target.value;
    console.log(notCompleteID);
    axios.put('/api/opps-notComplete' + notCompleteID, {
      completed: false
    })
    .then(function(response) {
      console.log(response);
      this.componentWillMount();
    })
    .catch(err => {
      console.log(err)
    });
    alert("This Record has been moved to the Currently Opportunities list.")
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-1'>
          </div>
          <div className='col-md-10'>
          <p>Currently Opportunities</p>
            <table className='table'>
              <tbody>
                <tr>
                  <th>Company</th>
                  <th>Email</th> 
                  <th>Employees</th>
                  <th>Standard Plan Revenue</th>
                  <th>Plus Plan Revenue</th>
                  <th>View</th>
                  <th>Complete</th>
                  <th>Delete</th>
                </tr>
                {this.state.inputsOpps.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.companyName}</td>
                  <td>{data.email}</td> 
                  <td>{data.totalEmployees}</td>
                  <td>${data.standardRevenue}</td>
                  <td>${data.plusRevenue}</td> 
                  {/* eslint-disable-next-line */}
                  <td><button role='img' aria-label="chart" type="button" className="btn btn-outline-dark" value={data.id} onClick={this.view}>&#128202;</button></td>
                  <td><button type="button" className="btn btn-outline-success" value={data.id} onClick={this.complete}>&#10003;</button></td>
                  <td><button  className="btn btn-outline-danger" value={data.id} onClick={this.delete}> X </button></td> 
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='col-md-1'>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-1'>
          </div>
          <div className='col-md-10'>
              <p>Completed Opportunities</p>
              <table className='table'>
              <tbody>
                <tr>
                  <th>Company</th>
                  <th>Email</th> 
                  <th>Employees</th>
                  <th>Plan Choice</th>
                  <th>Revenue Generated</th>
                  <th>View</th>
                  <th>Mark as Current Opportunity</th>
                  <th>Delete</th>
                </tr>
                {this.state.inputsCompleted.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.companyName}</td>
                  <td>{data.email}</td> 
                  <td>{data.totalEmployees}</td>
                  {(data.planSelect === '8') ? <td>Standard</td> : <td>Plus</td>}
                  <td>${data.potentialRevenue}</td> 
                  {/* eslint-disable-next-line */}
                  <td><button type="button"  role='img' aria-label="chart" className="btn btn-outline-dark" value={data.id} onClick={this.view}>&#128202;</button></td>
                  {/* eslint-disable-next-line */}
                  <td><button type="button" role='img' aria-label="reverse" className="btn btn-outline-success" value={data.id} onClick={this.notComplete}>&#128257;</button></td>
                  <td><button  className="btn btn-outline-danger" value={data.id} onClick={this.delete}> X </button></td> 
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='col-md-1'>
          </div>
        </div>
      </div>
    )
  }
};

