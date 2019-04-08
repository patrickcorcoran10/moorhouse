import React, { Component } from 'react';
import '../Opps/Opps.css';
import request from 'superagent';


export default class Opps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {}
    };
  };
  componentDidMount() {
    console.log("We are now mounted on the Opps page");
    request
      .get('/api/opps')
      .then(res => {
          console.log(res.body)
          this.setState({
            inputs: res.body
          })
      })
      .catch(err => {
          console.log(err)
      });
      

  };

  delete = e => {
    alert("This will be a modal and ask if you'd like to delete this file")
  };

  view = e => {
    alert('This will send us via to a page displaying a graph giving further details about the company in question.')
  };

  render() {
    console.log(this.state)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-1'>
          </div>
          <div className='col-md-10'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Employees</th>
                  <th>Revenue</th>
                  <th>Revenue Potential</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              
              {/* {this.state.data.map((data, index) => (
                <tbody>
                <tr key={data.id}>
                  <td>{data.companyName}</td>
                  <td>{data.email}</td>
                  <td>{data.totalEmployees}</td>
                  <td>Revenue</td>
                  <td>Potential Revenue</td>
                  <td><button value={data.id} onClick={this.view.bind(this)}>View</button></td>
                  <td><button value={data.id} onClick={this.delete.bind(this)}>Delete</button></td>
                </tr>
                </tbody>
              ))} */}
                
              
            </table>
          </div>
          <div className='col-md-1'>
          </div>
        </div>
      </div>
    )
  }
}

