import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // inputs: {
                companyName: '',
                totalEmployees: '',
                avgCostPerEmployee: '',
                collectingData: '',
                analyzingData: '',
                dataBreachRisk: '',
                avgEmails: ''
            // }

        }
        this.acceptCompanyName = this.acceptCompanyName.bind(this);
        this.acceptTotalEmployees = this.acceptTotalEmployees.bind(this);
        this.acceptAvgCostPerEmployee = this.acceptAvgCostPerEmployee.bind(this);
        this.acceptCollectingData = this.acceptCollectingData.bind(this);
        this.acceptAnalyzingData = this.acceptAnalyzingData.bind(this);
        this.acceptDataBreachRisk = this.acceptDataBreachRisk.bind(this);
        this.acceptAvgEmails = this.acceptAvgEmails.bind(this);
    };
    // First Page Functions
    acceptCompanyName = e => {
        this.setState({
                companyName: this.refs.companyName.value
        });
    };
    acceptTotalEmployees = e => {
        this.setState({
                totalEmployees: this.refs.totalEmployees.value
        });
    };
    acceptAvgCostPerEmployee = e => {
        this.setState({
                avgCostPerEmployee: this.refs.avgCostPerEmployee.value
        });
    };

    // Form 2 Input Functions
    acceptCollectingData = e => {
        this.setState({
                collectingData: this.refs.collectingData.value
        })
    };
    acceptAnalyzingData = e => {
        this.setState({
                analyzingData: this.refs.analyzingData.value
        });
    };
    acceptDataBreachRisk = e => {
        this.setState({
                dataBreachRisk: this.refs.dataBreachRisk.value
        })
    };
    acceptAvgEmails = e => {
        this.setState({
                avgEmails: this.refs.avgEmails.value
        })
    };
    componentDidUpdate() {
        console.log(this.state)
    };


  render() {
    return (
      <div className='container'>
          <div className='row'>
              <div className='col-md-4'>
              </div>
              <div className='col-md-4'>
                  <p>Form Page</p>
              </div>
              <div className='col-md-4'>
              </div>
          </div>
          <div className='row'>
              <div className='col-md-2'>

              </div>
              <div className='col-md-8'>
                  <p>Company Name:</p>
                  <input ref='companyName' onChange={this.acceptCompanyName}/>
                  <hr/>
                  <p>Number of Employees at Your Company</p>
                  <input ref='totalEmployees' onChange={this.acceptTotalEmployees}/>
                  <hr/>
                  <p>Average Hourly Cost Per Employee</p>
                  <input ref='avgCostPerEmployee' onChange={this.acceptAvgCostPerEmployee}/>
                  <hr/>
              </div>
              <div className='col-md-2'>
                  
              </div>
          </div>
          <hr/>
          <div className='row'>
              <div className='col-md-2'>
              </div>
              <div className='col-md-8'>
                  <p>Average Weekly Hours Spent Collecting Data</p>
                  <input ref='collectingData' placeholder='Benchmark is 6.4 hours' onChange={this.acceptCollectingData}/>
                  <hr/>
                  <p>Average Weekly Hours Spent Analyzing Data</p>
                  <input ref='analyzingData' placeholder='Benchmark is 6 hours a week.' onChange={this.acceptAnalyzingData}/>
                  <hr/>
                  <p>Data Breach Risk?</p> 
                  <select ref='dataBreachRisk' onChange={this.acceptDataBreachRisk}>
                      <option value='.1'>Low</option>
                      <option value='.2'>Medium</option>
                      <option value='.3'>High</option>
                  </select>
                  <hr/>
                  <p>Average Emails Received Per Week</p>
                  <input ref='avgEmails' placeholder='Benchmark is 304' onChange={this.acceptAvgEmails}/>
              </div>
              <div className='col-md-2'>
              </div>
          </div>
      </div>
    )
  }
}
