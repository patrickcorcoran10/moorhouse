import React, { Component } from 'react';
import axios from 'axios';
import '../View/View.css';

export default class View extends Component {
  constructor(props) {
    super(props);

    this.state={
      inputs: {},
      // planSelect: ''
    };
    console.log(this.state)
  };

  componentWillMount() {
    console.log('we are mounted on the view page for record number: ', this.props.id);
    axios.get('/api/view' + this.props.id)
    .then(res => {
      let selected = res.data[0]
      console.log(selected);
      this.setState({
        inputs: selected,
      });
      console.log(this.state)
    })
  };

  ROI = id => {
    let idChosen = id.target.value;
    console.log(idChosen);
    this.props.history.push('/company-display');
    this.props.click(idChosen);
  };

  render() {
    const style = {
      container: {
        paddingTop: '80px'
      }
    };
    const assumptions = {
      emailCostPerEmployee: 1800,
      chanceOfDataBreach: .025,
      dataBreachCost: 1600000,
      collectData: .17,
      processData: .16,
      annualHours: 2000
    };
    console.log(this.state)
    return (
      <div style={style.container} className='container'>
        <div className="row" id="header">
          <div className='col-md-1'>
          </div>
          <div className="col-md-5">
              <h4>The Employee Experience ROI Calculator</h4>
              <br />
              <h6>{this.state.inputs.companyName}</h6>
              <br />
              <p>Client Email: {this.state.inputs.email}</p>
          </div>
          <div className='col-md-5'>
            <p>Plan Selection</p>
            {(this.state.inputs.planSelect === '8') ? <p>Standard Plan</p> : <p>Plus Plan</p>} 
          </div>
          <div className='col-md-1'>
          </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-md-1'>
        </div>
        <div className='col-md-5' id='tableLeft'>
          <p>Time Spent Collecting Data</p>
        </div>
        <div className='col-md-5' id='tableRight'>
          <div className='row'>
            <div className='col-sm-8'>
              <p>Time Spent Collecting Data</p>
              <p>Annual Hours</p>
              <p>Hours Spent Per Worker Collecting Data</p>
              <p>Total Workers</p>
              <p>Total Hours Spent Collecting Data</p>
              <p>Cost Per Hour</p>
              <p>Total Cost of Collecting Data</p>
              <p>BotCo Savings</p>
              <strong>Data Collection Savings</strong>
            </div>
            <div className='col-sm-4'>
              <p>{assumptions.collectData}</p>
              <p>{assumptions.annualHours}</p>
              <p>{assumptions.collectData * assumptions.annualHours}</p>
              <p>{this.state.inputs.totalEmployees}</p>
              <p>{(assumptions.collectData * assumptions.annualHours) * parseInt(this.state.inputs.totalEmployees)}</p>
              <p>${this.state.inputs.avgCostPerEmployee}</p>             
              <p>${((assumptions.collectData * assumptions.annualHours) * parseInt(this.state.inputs.totalEmployees)) * parseInt(this.state.inputs.avgCostPerEmployee)}</p>
              <p>{this.state.inputs.collectingData}</p>
              <strong>${this.state.inputs.collectingData*((assumptions.collectData * assumptions.annualHours) * parseInt(this.state.inputs.totalEmployees)) * (parseInt(this.state.inputs.avgCostPerEmployee))}</strong>
            </div>
          </div>
        </div>
        <div className='col-md-1'>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-md-1'>
        </div>
        <div className='col-md-5' id='tableLeft'>
          <p>Time Spent Processing Data</p>
        </div>
        <div className='col-md-5' id='tableRight'>
          <div className='row'>
            <div className='col-sm-8'>
              <p>Time Spent Processing Data</p>
              <p>Annual Hours</p>
              <p>Hours Spent Per Worker Processing Data</p>
              <p>Total Workers</p>
              <p>Total Hours Spent Processing Data</p>
              <p>Cost Per Hour</p>
              <p>Total Cost of Processing Data</p>
              <p>BotCo Savings</p>
              <strong>Data Collection Savings</strong>
            </div>
            <div className='col-sm-4'>
              <p>{assumptions.processData}</p>
              <p>{assumptions.annualHours}</p>
              <p>{assumptions.processData * assumptions.annualHours}</p>
              <p>{this.state.inputs.totalEmployees}</p>
              <p>{this.state.inputs.totalEmployees * (assumptions.processData * assumptions.annualHours)}</p>
              <p>${this.state.inputs.avgCostPerEmployee}</p>
              <p>${parseInt(this.state.inputs.avgCostPerEmployee) * (this.state.inputs.totalEmployees * (assumptions.processData * assumptions.annualHours))}</p>
              <p>{this.state.inputs.analyzingData}</p>
              <strong>${this.state.inputs.analyzingData * parseInt(this.state.inputs.avgCostPerEmployee) * (this.state.inputs.totalEmployees * (assumptions.processData * assumptions.annualHours))}</strong>
            </div>
          </div>
        </div>
        <div className='col-md-1'>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-md-1'>
        </div>
        <div className='col-md-5' id='tableLeft'>
          <p>Compliance Savings and Improved Security</p>
        </div>
        <div className='col-md-5' id='tableRight'>
          <div className='row'>
            <div className='col-sm-8'>
              <p>Average Cost of Data Breach</p>
              <p>Chances of Data Breach</p>
              <p>Total Data Breach Costs</p>
              <p>BotCo Savings</p>
              <strong>Compliance and Security Savings</strong>
            </div>
            <div className='col-sm-4'>
              <p>${assumptions.dataBreachCost}</p>
              <p>{assumptions.chanceOfDataBreach}</p>
              <p>{assumptions.dataBreachCost * assumptions.chanceOfDataBreach}</p>
              <p>{this.state.inputs.dataBreachRisk}</p>
              <strong>${this.state.inputs.dataBreachRisk * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach)}</strong>
            </div>
          </div>
        </div>
        <div className='col-md-1'>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-md-1'>
        </div>
        <div className='col-md-5' id='tableLeft'>
          <p>Productivity Increase via Automation</p>
        </div>
        <div className='col-md-5' id='tableRight'>
          <div className='row'>
            <div className='col-sm-8'>
              <p>Total Users</p>
              <p>Cost of Unnecessary Emails Per User</p>
              <p>Total Email Costs</p>
              <p>BotCo Savings</p>
              <strong>Automation Savings</strong>
            </div>
            <div className='col-sm-4'>
              <p>{this.state.inputs.totalEmployees}</p>
              <p>${assumptions.emailCostPerEmployee}</p>
              <p>${this.state.inputs.totalEmployees * assumptions.emailCostPerEmployee}</p>
              <p>{this.state.inputs.avgEmails}</p>
              <strong>${this.state.inputs.avgEmails * (this.state.inputs.totalEmployees * assumptions.emailCostPerEmployee)}</strong>
            </div>
          </div>
        </div>
        <div className='col-md-1'>
        </div>
      </div>
      <hr/>
    </div>
    )
  }
}
