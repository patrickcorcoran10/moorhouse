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
  };
  
  componentDidMount() {
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
      .get('/api/opps/completed')
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
    .then((response) => {
      this.componentDidMount();
    })
    .catch(function(err) {
      console.log(err)
    });
    alert('You have deleted a record.')
  };

  view = e => {
    e.preventDefault();
    var viewID = e.target.value;
    console.log(viewID);
    this.props.history.push('/company-view');
    this.props.click(viewID);
  };

  complete = e => {
    e.preventDefault();
    console.log('we are updating this record to complete');
    let updateID = e.target.value;
    console.log(updateID);
    axios.put('/api/opps/complete'+ updateID, {
      completed: true
    })
    .then(function(response) {
      console.log(response)
      this.componentDidMount();

    })
    .catch(function(error) {
      console.log(error)
    });


  }

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
                  <th>Revenue</th>
                  <th>Potential Revenue</th>
                  <th>View</th>
                  <th>Complete</th>
                  <th>Delete</th>
                </tr>
                {this.state.inputsOpps.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.companyName}</td>
                  <td>{data.email}</td> 
                  <td>{data.totalEmployees}</td>
                  <td>{data.revenue}</td>
                  <td>{data.potentialRevenue}</td> 
                  <td><button type="button" className="btn btn-outline-dark" value={data.id} onClick={this.view.bind(this)}>Detailed View</button></td>
                  <td><button type="button" className="btn btn-outline-success" value={data.id} onClick={this.complete.bind(this)}>Mark Complete</button></td>
                  <td><button  className="btn btn-outline-danger" value={data.id} onClick={this.delete.bind(this)}>Delete this Record</button></td> 
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
                  <th>Revenue</th>
                  <th>Revenue Generated</th>
                  <th>View</th>
                  <th>Complete</th>
                  <th>Delete</th>
                </tr>
                {this.state.inputsCompleted.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.companyName}</td>
                  <td>{data.email}</td> 
                  <td>{data.totalEmployees}</td>
                  <td>{data.revenue}</td>
                  <td>{data.potentialRevenue}</td> 
                  <td><button type="button" className="btn btn-outline-dark" value={data.id} onClick={this.view.bind(this)}>Detailed View</button></td>
                  <td><button type="button" className="btn btn-outline-success" value={data.id} onClick={this.complete.bind(this)}>Mark Complete</button></td>
                  <td><button  className="btn btn-outline-danger" value={data.id} onClick={this.delete.bind(this)}>Delete this Record</button></td> 
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
}

