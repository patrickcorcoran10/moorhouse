import React, { Component } from 'react';
import axios from 'axios';
import '../View/View.css';

export default class View extends Component {
  constructor(props) {
    super(props);

    this.state={
      inputs: {},
      planSelect: ''
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
        planSelect: ''
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
  
  acceptPlanSelect = (e) => {
    e.preventDefault();
    let id = this.state.inputs.id;
    console.log(id)
    console.log(e.target.value, this.refs.planSelect.value, id);
    this.setState({
      
        planSelect: this.refs.planSelect.value,
      
    })
    console.log(this.state.planSelect);
    axios.put('/api/update'+this.state.inputs.id, {
      planSelect: this.refs.planSelect.value
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error)
    })
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
              <div className="input-group mb-3">
                  <select ref='planSelect' onChange={this.acceptPlanSelect=this.acceptPlanSelect.bind(this)} className="custom-select" id="inputGroupSelect02">
                      <option>Choose...</option>
                      <option value="8">Standard</option>
                      <option value="15">Plus</option>
                  </select>
                  <div className="input-group-append">
                      <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                  </div>
              </div>
              <button value={this.state.inputs.id} onClick={this.ROI}>View ROI</button>
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
              <p>Hours spent per worker collecting data</p>
              <p>Total Workers</p>
              <p>Total hours spent collecting data</p>
              <p>Cost per hour</p>
              <p>Total cost of collecting data</p>
              <p>BotCo savings</p>
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
              <p>Time spent processing data</p>
              <p>Annual Hours</p>
              <p>Hours spent per worker processing data</p>
              <p>Total Workers</p>
              <p>Total hours spent processing data</p>
              <p>Cost per hour</p>
              <p>Total cost of processing data</p>
              <p>BotCo savings</p>
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
              <p>Average cost of data breach</p>
              <p>Chances of data breach</p>
              <p>Total data breach costs</p>
              <p>BotCo savings</p>
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
          <p>Productivity increase via automation</p>
        </div>
        <div className='col-md-5' id='tableRight'>
          <div className='row'>
            <div className='col-sm-8'>
              <p>Total users</p>
              <p>Cost of unnecessary emails per user</p>
              <p>Total email costs</p>
              <p>BotCo savings</p>
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
