import React, { Component } from 'react';
import superagent from 'superagent';
import '../Form/Form.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                companyName: '',
                totalEmployees: '',
                avgCostPerEmployee: '',
                collectingData: '',
                analyzingData: '',
                dataBreachRisk: '',
                avgEmails: '',
                email: '',
                completed: false,
                dataCollectionSavings: '',
                dataProcessingSavings: '',
                complienceAndSecuritySavings: '',
                automationSavings: '',
                annualCompanyValue: '',
                standardROI: '',
                plusROI: '',
                opportunity: true,
                revenue: ''
            },
            modal: false
        }
        this.acceptCompanyName = this.acceptCompanyName.bind(this);
        this.acceptTotalEmployees = this.acceptTotalEmployees.bind(this);
        this.acceptAvgCostPerEmployee = this.acceptAvgCostPerEmployee.bind(this);
        this.acceptCollectingData = this.acceptCollectingData.bind(this);
        this.acceptAnalyzingData = this.acceptAnalyzingData.bind(this);
        this.acceptDataBreachRisk = this.acceptDataBreachRisk.bind(this);
        this.acceptAvgEmails = this.acceptAvgEmails.bind(this);
        this.acceptEmail = this.acceptEmail.bind(this);
        this.submit = this.submit.bind(this);
        this.reset = this.reset.bind(this);
        this.toggle = this.toggle.bind(this);
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
    acceptEmail = e => {
        this.setState({
            email: this.refs.email.value
        })
    }
    // Buttons and Console.logging
    componentDidUpdate() {
        console.log(this.state)
    };
    calculations() {

    };

    submit = e => {
        e.preventDefault();
        const assumptions = {
            emailCostPerEmployee: 1800,
            chanceOfDataBreach: .025,
            dataBreachCost: 1600000,
            collectData: .17,
            processData: .16,
            annualHours: 2000,
            standardPlan: 8,
            plusPlan: 15
        };
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
                    avgEmails: this.refs.avgEmails.value,
                    email: this.refs.email.value,
                    dataCollectionSavings: this.refs.collectingData.value * ((assumptions.collectData * assumptions.annualHours) * parseInt(this.refs.totalEmployees.value)) * (parseInt(this.refs.avgCostPerEmployee.value)),
                    dataProcessingSavings: this.refs.analyzingData.value * parseFloat(this.refs.avgCostPerEmployee.value) * (this.refs.totalEmployees.value * (assumptions.processData * assumptions.annualHours)),
                    complienceAndSecuritySavings: this.refs.dataBreachRisk.value * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach),
                    automationSavings: this.refs.avgEmails.value * (this.refs.totalEmployees.value * assumptions.emailCostPerEmployee),
                    annualCompanyValue: (this.refs.avgEmails.value * (this.refs.totalEmployees.value * assumptions.emailCostPerEmployee))+(this.refs.dataBreachRisk.value * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach))+(this.refs.analyzingData.value * parseFloat(this.refs.avgCostPerEmployee.value) * (this.refs.totalEmployees.value * (assumptions.processData * assumptions.annualHours)))+(this.refs.collectingData.value * ((assumptions.collectData * assumptions.annualHours) * parseInt(this.refs.totalEmployees.value)) * (parseInt(this.refs.avgCostPerEmployee.value))),
                    standardROI: ((parseFloat(this.refs.avgEmails.value) * (parseFloat(this.refs.totalEmployees.value * assumptions.emailCostPerEmployee)))+(parseFloat(this.refs.dataBreachRisk.value) * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach))+(parseInt(this.refs.analyzingData.value) * parseInt(this.refs.avgCostPerEmployee.value) * (parseInt(this.refs.totalEmployees.value) * (assumptions.processData * assumptions.annualHours)))+(parseInt(this.refs.collectingData.value) * ((assumptions.collectData * assumptions.annualHours) * parseInt(this.refs.totalEmployees.value)) * (parseInt(this.refs.avgCostPerEmployee.value))))/(assumptions.standardPlan * 12 * parseInt(this.refs.totalEmployees.value)),
                    plusROI: ((parseFloat(this.refs.avgEmails.value) * (parseFloat(this.refs.totalEmployees.value * assumptions.emailCostPerEmployee)))+(parseFloat(this.refs.dataBreachRisk.value) * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach))+(parseInt(this.refs.analyzingData.value) * parseInt(this.refs.avgCostPerEmployee.value) * (parseInt(this.refs.totalEmployees.value) * (assumptions.processData * assumptions.annualHours)))+(parseInt(this.refs.collectingData.value) * ((assumptions.collectData * assumptions.annualHours) * parseInt(this.refs.totalEmployees.value)) * (parseInt(this.refs.avgCostPerEmployee.value))))/(assumptions.plusPlan * 12 * parseInt(this.refs.totalEmployees.value)),
                    standardRevenue: 8 * 12 * this.refs.totalEmployees.value,
                    plusRevenue: 15 * 12 * this.refs.totalEmployees.value
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
                this.refs.email.value = '';
                this.setState({
                    inputs: {
                        companyName: '',
                        totalEmployees: '',
                        avgCostPerEmployee: '',
                        collectingData: '',
                        analyzingData: '',
                        dataBreachRisk: '',
                        avgEmails: '',
                        email: '',
                        completed: '',
                        dataCollectionSavings: '',
                        dataProcessingSavings: '',
                        complienceAndSecuritySavings: '',
                        automationSavings: '',
                        annualCompanyValue: '',
                        standardROI: '',
                        plusROI: '',
                        opportunity: '',
                        revenue: ''
                    },
                    modal: false,
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
            avgEmails: '',
            email: '',
            completed: '',
            dataCollectionSavings: '',
            dataProcessingSavings: '',
            complienceAndSecuritySavings: '',
            automationSavings: '',
            annualCompanyValue: '',
            standardROI: '',
            plusROI: '',
            opportunity: '',
            revenue: ''
        });
        
    };
    toggle() {
        const assumptions = {
            emailCostPerEmployee: 1800,
            chanceOfDataBreach: .025,
            dataBreachCost: 1600000,
            collectData: .17,
            processData: .16,
            annualHours: 2000,
            standardPlan: 8,
            plusPlan: 15
        };
        console.log(assumptions)
        this.setState(prevState => ({
          modal: !prevState.modal,
          inputs: {
            companyName: this.refs.companyName.value,
            totalEmployees: this.refs.totalEmployees.value,
            avgCostPerEmployee: this.refs.avgCostPerEmployee.value,
            collectingData: this.refs.collectingData.value,
            analyzingData: this.refs.analyzingData.value,
            dataBreachRisk: this.refs.dataBreachRisk.value,
            avgEmails: this.refs.avgEmails.value,
            email: '',
            dataCollectionSavings: this.refs.collectingData.value * ((assumptions.collectData * assumptions.annualHours) * parseInt(this.refs.totalEmployees.value)) * (parseInt(this.refs.avgCostPerEmployee.value)),
            dataProcessingSavings: this.refs.analyzingData.value * parseFloat(this.refs.avgCostPerEmployee.value) * (this.refs.totalEmployees.value * (assumptions.processData * assumptions.annualHours)),
            complienceAndSecuritySavings: this.refs.dataBreachRisk.value * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach),
            automationSavings: this.refs.avgEmails.value * (this.refs.totalEmployees.value * assumptions.emailCostPerEmployee),
            annualCompanyValue: (this.refs.avgEmails.value * (this.refs.totalEmployees.value * assumptions.emailCostPerEmployee))+(this.refs.dataBreachRisk.value * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach))+(this.refs.analyzingData.value * parseFloat(this.refs.avgCostPerEmployee.value) * (this.refs.totalEmployees.value * (assumptions.processData * assumptions.annualHours)))+(this.refs.collectingData.value * ((assumptions.collectData * assumptions.annualHours) * parseInt(this.refs.totalEmployees.value)) * (parseInt(this.refs.avgCostPerEmployee.value))),
            standardROI: ((this.refs.avgEmails.value * (this.refs.totalEmployees.value * assumptions.emailCostPerEmployee))+(this.refs.dataBreachRisk.value * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach))+(this.refs.analyzingData.value * parseFloat(this.refs.avgCostPerEmployee.value) * (this.refs.totalEmployees.value * (assumptions.processData * assumptions.annualHours)))+(this.refs.collectingData.value * ((assumptions.collectData * assumptions.annualHours) * parseInt(this.refs.totalEmployees.value)) * (parseInt(this.refs.avgCostPerEmployee.value)))/(assumptions.standardPlan * 12 * parseInt(this.refs.totalEmployees.value))).toFixed(2),
            plusROI: ((this.refs.avgEmails.value * (this.refs.totalEmployees.value * assumptions.emailCostPerEmployee))+(this.refs.dataBreachRisk.value * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach))+(this.refs.analyzingData.value * parseFloat(this.refs.avgCostPerEmployee.value) * (this.refs.totalEmployees.value * (assumptions.processData * assumptions.annualHours)))+(this.refs.collectingData.value * ((assumptions.collectData * assumptions.annualHours) * parseInt(this.refs.totalEmployees.value)) * (parseInt(this.refs.avgCostPerEmployee.value)))/(assumptions.standardPlan * 12 * parseInt(this.refs.totalEmployees.value))).toFixed(2),
            revenue: '??',
          }
        }));
      }


  render() {
    return (
      <div className='container'>
          
          <div className='row' id='form1'>
              <div className='col-md-2'>
              </div>
              <div className='col-md-8'>
                  <p>Company Name:  <input ref='companyName' onChange={this.acceptCompanyName}/></p>
                  <hr/>
                  <p>Number of Employees at Your Company:   <input ref='totalEmployees' className="numberInput" onChange={this.acceptTotalEmployees}/></p>
                  <hr/>
                  <p>Average Hourly Cost Per Employee:  <input ref='avgCostPerEmployee' className="numberInput" onChange={this.acceptAvgCostPerEmployee}/></p>
                  <hr/>
              </div>
              <div className='col-md-2'>
              </div>
          </div>
          <hr/>
          <div className='row' id='form2'>
              <div className='col-md-2'>
              </div>
              <div className='col-md-8'>
                  <p>Average Weekly Hours Spent Collecting Data: 
                    
                  </p>
                  <select ref='collectingData' className="numberInput" onChange={this.acceptCollectingData}>
                        <option value='.025'>Low (Less Than 6 Hours Per Week)</option>
                        <option value='.05'>Average (About 6 Hours Per Week)</option>
                        <option value='.075'>High (More than 6 Hours Per Week)</option>
                    </select>
                  <hr/>
                  <p>Average Weekly Hours Spent Analyzing Data: 
                  </p>
                  <select ref='analyzingData' className="numberInput" onChange={this.acceptAnalyzingData}>
                        <option value='.025'>Low (Less Than 6 Hours Per Week)</option>
                        <option value='.05'>Average (About 6 Hours Per Week)</option>
                        <option value='.075'>High (More than 6 Hours Per Week)</option>
                    </select>
                  <hr/>
                  <p>Data Breach Risk?   </p> 
                  <select ref='dataBreachRisk' onChange={this.acceptDataBreachRisk}>
                        <option value='.01'>Low</option>
                        <option value='.02'>Medium</option>
                        <option value='.03'>High</option>
                    </select>
                  <hr/>
                  <p>Average Emails Received Per Week:  </p>
                  <select ref='avgEmails' className="numberInput" placeholder='Benchmark is 304' onChange={this.acceptAvgEmails}>
                        <option value='.05'>Low (Less than 300 Emails Per Week)</option>
                        <option value='.075'>Average (About 300 Emails Per Week)</option>
                        <option value='.1'>High (More than 300 emails Per Week)</option>
                  </select>
              </div>
              <div className='col-md-2'>
              </div>
          </div>
          <hr/>
          <div className='row'>
              <div className='col-md-4'>
              </div>
              <div className='col-md-4'>
                <Button color='success' onClick={this.toggle}>Submit</Button>  
                <hr/>
                <Button color="danger" onClick={this.reset}>Reset</Button>
              </div>
              <div className='col-md-4'>
              </div>
          </div>
          <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Thank you for your time!</ModalHeader>
                <ModalBody>
                    <h5 className='modalText'>Annual Savings: ${this.state.inputs.annualCompanyValue}</h5>
                    <h5 className='modalText'>% Year ROI: Between {this.state.inputs.standardROI}% and {this.state.inputs.plusROI}%</h5>
                    <p className='modalText'>Please provide your email address:  <input className='modalText' ref='email' placeholder="j.doe@provider.com" onChange={this.acceptEmail}></input></p>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.submit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={this.reset}>OK, but not for me.</Button>
                </ModalFooter>
                </Modal>
            </div>
      </div>
    )
  }
}
