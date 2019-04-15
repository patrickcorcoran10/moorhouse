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
                roi: '',
                opportunity: true

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
                    dataCollectionSavings: '',
                    dataProcessingSavings: '',
                    complienceAndSecuritySavings: '',
                    automationSavings: '',
                    annualCompanyValue: '',
                    roi: ''
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
                        roi: '',
                        opportunity: ''
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
            roi: '',
            opportunity: ''
        });
        
    };
    toggle() {
        const assumptions = {
            emailCostPerEmployee: 1800,
            chanceOfDataBreach: .025,
            dataBreachCost: 1600000,
            collectData: .17,
            processData: .16,
            annualHours: 2000
        };
        console.log(assumptions)
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }


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
                    <h5 className='modalText'>Annual Savings: ##</h5>
                    <h5 className='modalText'>% Year ROI: </h5>
                    <p>Please provide your email address:</p>
                    <input ref='email' placeholder="j.doe@provider.com" onChange={this.acceptEmail}></input>
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
