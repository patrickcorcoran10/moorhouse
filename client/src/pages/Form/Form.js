import React, { Component } from 'react';
import superagent from 'superagent';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
                companyName: '',
                totalEmployees: '',
                avgCostPerEmployee: '',
                collectingData: '',
                analyzingData: '',
                dataBreachRisk: '',
                avgEmails: ''
        }
        this.acceptCompanyName = this.acceptCompanyName.bind(this);
        this.acceptTotalEmployees = this.acceptTotalEmployees.bind(this);
        this.acceptAvgCostPerEmployee = this.acceptAvgCostPerEmployee.bind(this);
        this.acceptCollectingData = this.acceptCollectingData.bind(this);
        this.acceptAnalyzingData = this.acceptAnalyzingData.bind(this);
        this.acceptDataBreachRisk = this.acceptDataBreachRisk.bind(this);
        this.acceptAvgEmails = this.acceptAvgEmails.bind(this);
        this.submit = this.submit.bind(this);
        this.reset = this.reset.bind(this);
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
    // Buttons and Console.logging
    componentDidUpdate() {
        console.log(this.state)
    };

    submit = e => {
        e.preventDefault();
        console.log('we are submitting');
            superagent
                .post('/api/moorhouse')
                .send({
                    companyName: this.refs.companyName.value,
                    totalEmployees: this.refs.totalEmployees.value,
                    avgCostPerEmployee: this.refs.avgCostPerEmployee.value,
                    collectingData: this.refs.collectingData.value,
                    analyzingData: this.refs.analyzingData.value,
                    dataBreachRisk: this.refs.dataBreachRisk.value,
                    avgEmails: this.refs.avgEmails.value
                })
                .end((err, res) => {
                    console.log(res);
                });

                console.log("we are resetting");
                this.refs.companyName.value = '';
                this.refs.totalEmployees.value = '';
                this.refs.avgCostPerEmployee.value = '';
                this.refs.collectingData.value = '';
                this.refs.analyzingData.value = '';
                this.refs.dataBreachRisk.value = '';
                this.refs.avgEmails.value = '';
                this.setState({
                    companyName: '',
                    totalEmployees: '',
                    avgCostPerEmployee: '',
                    collectingData: '',
                    analyzingData: '',
                    dataBreachRisk: '',
                    avgEmails: ''
                });

    };

    reset = e => {
        e.preventDefault();
        console.log("we are resetting");
        this.refs.companyName.value = '';
        this.refs.totalEmployees.value = '';
        this.refs.avgCostPerEmployee.value = '';
        this.refs.collectingData.value = '';
        this.refs.analyzingData.value = '';
        this.refs.dataBreachRisk.value = '';
        this.refs.avgEmails.value = '';
        this.setState({
            companyName: '',
            totalEmployees: '',
            avgCostPerEmployee: '',
            collectingData: '',
            analyzingData: '',
            dataBreachRisk: '',
            avgEmails: ''
        });
        // // componentDidMount() {
        //     superagent
        //       .get('/api/opps')
        //       .send({})
        //       .end((err, res) => {
        //           console.log(res)
        //       })
        // //   };
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
          <hr/>
          <div className='row'>
              <div className='col-md-4'>
              </div>
              <div className='col-md-4'>
                <button onClick={this.submit}>Submit</button>  
                <hr/>
                <button onClick={this.reset}>Reset</button>
              </div>
              <div className='col-md-4'>
              </div>
          </div>
      </div>
    )
  }
}
