import React, { Component } from 'react';
import '../Opps/Opps.css';
import request from 'superagent';


export default class Opps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: []
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
            inputs:  res.body 
          })
      })
      .catch(err => {
          console.log(err)
      })

  };

  delete = e => {
    e.preventDefault();
    alert("This will be a modal and ask if you'd like to delete this file");
    var deleteID = e.target.value;
    console.log(deleteID);
    request
      .del('/api/delete')
      .send({ id: deleteID })
      .set('Accept', 'application/json')
      .end(function(err, res) {
        console.log(res);
        alert('You have deleted a record.')
      })
      this.componentDidMount();
  };

  view = e => {
    e.preventDefault();
    alert('This will send us via to a page displaying a graph giving further details about the company in question.');
    var viewID = e.target.value;
    console.log(viewID);
    this.props.history.push('/view');
    this.props.click(viewID);
  };

  complete = e => {
    e.preventDefault();
    alert('This will update the database to move this record to completed, and out of the opps page view')
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-1'>
          </div>
          <div className='col-md-10'>
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
                {this.state.inputs.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.companyName}</td>
                  <td>{data.email}</td> 
                  <td>{data.totalEmployees}</td>
                  <td>{data.revenue}</td>
                  <td>{data.potentialRevenue}</td> 
                  <td><button value={data.id} onClick={this.view.bind(this)}>Detailed View</button></td>
                  <td><button value={data.id} onClick={this.complete.bind(this)}>Mark Complete</button></td>
                  <td><button value={data.id} onClick={this.delete.bind(this)}>Delete</button></td> 
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

