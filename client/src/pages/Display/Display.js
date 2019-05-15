import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import './Display.css';
// import request from 'superagent';
import axios from 'axios';

 class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {},
            // planSelect: '',
        };
    }

    componentDidMount() {
        console.log("We are mounted on the display page with record: ", this.props.id);
        axios.get('/api/display'+this.props.id)
        .then(res => {
            console.log(res.data);
            this.setState({
                inputs: res.data[0],
                // planSelect: res.data[0].planSelect
            })
        })
    };

    
  render() {
    
    console.log(this.state)
    
    
    const style = {
        container: {
            // paddingTop: '80px'
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
    console.log(this.state.inputs.companyName);
    return (
         <div className='container' style={style.container}>
            {/* <div className='row'>
                <div className='col-md-1'>
                </div>
                <div className='col-md-10'>
                    <h6>Graphical Display for {this.state.inputs.companyName}</h6>
                </div>
                <div className='col-md-1'>
                </div>
            </div>
            <hr/> */}
            <div className='row'>
                <div className='col-md-1'>
                </div>
                <div className='col-md-10'>
                    <div className="graph">
                        <Bar 
                            data={{
                                labels: ['Data Collection Savings', 'Data Processing Savings', 'Compliance and Security Savings', 'Automation Savings'],
                                datasets: [{
                                    // label: "Savings",
                                    data: [
                                        this.state.inputs.collectingData*((assumptions.collectData * assumptions.annualHours) * parseInt(this.state.inputs.totalEmployees)) * (parseInt(this.state.inputs.avgCostPerEmployee)),
                                        this.state.inputs.analyzingData * parseInt(this.state.inputs.avgCostPerEmployee) * (this.state.inputs.totalEmployees * (assumptions.processData * assumptions.annualHours)),
                                        this.state.inputs.dataBreachRisk * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach),
                                        this.state.inputs.avgEmails * (this.state.inputs.totalEmployees * assumptions.emailCostPerEmployee),
                                    ],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(153, 102, 255, 0.6)',
                                        'rgba(255, 159, 64, 0.6)',
                                        'rgba(255, 99, 132, 0.6)'
                                    ],
                                    boarderWidth: 1,
                                    borderColor: '#777',
                                    hoverBorderWidth: 3,
                                    hoverBorderColor: '#000'
                                }],
                            }}
                            width={100}
                            height={50}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Savings by Value Lever for ' + this.state.inputs.companyName,
                                    fontSize: 25
                                },
                                legend: {
                                    display: false,
                                    text: 'example'
                                }
                            }}
                        />
                    </div>
                </div>
                <div className='col-md-1'>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-1'>
                </div>
                <div className='col-md-10' id='numbers'>
                    <strong>Annual Subscription Cost: ${(parseInt(this.state.inputs.planSelect) * 12 * this.state.inputs.totalEmployees).toFixed(2)}</strong>
                    <p>Data Collection Savings: ${this.state.inputs.collectingData*((assumptions.collectData * assumptions.annualHours) * parseInt(this.state.inputs.totalEmployees)) * (parseInt(this.state.inputs.avgCostPerEmployee))}</p>
                    <p>Data Processsing Savings: ${this.state.inputs.analyzingData * parseInt(this.state.inputs.avgCostPerEmployee) * (this.state.inputs.totalEmployees * (assumptions.processData * assumptions.annualHours)).toFixed(2)}</p>
                    <p>Complience and Security Savings: ${this.state.inputs.dataBreachRisk * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach).toFixed(2)}</p>
                    <p>Automation Savings: ${this.state.inputs.avgEmails * (this.state.inputs.totalEmployees * assumptions.emailCostPerEmployee).toFixed(2)}</p>
                    <strong>Annual BotCo Value: ${(this.state.inputs.avgEmails * (this.state.inputs.totalEmployees * assumptions.emailCostPerEmployee))+(this.state.inputs.dataBreachRisk * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach))+(this.state.inputs.analyzingData * parseInt(this.state.inputs.avgCostPerEmployee) * (this.state.inputs.totalEmployees * (assumptions.processData * assumptions.annualHours)))+(this.state.inputs.collectingData*((assumptions.collectData * assumptions.annualHours) * parseInt(this.state.inputs.totalEmployees)) * (parseInt(this.state.inputs.avgCostPerEmployee))).toFixed(2)}</strong>
                    <hr/>
                    <strong>ROI: {(((this.state.inputs.avgEmails * (this.state.inputs.totalEmployees * assumptions.emailCostPerEmployee))+(this.state.inputs.dataBreachRisk * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach))+(this.state.inputs.analyzingData * parseInt(this.state.inputs.avgCostPerEmployee) * (this.state.inputs.totalEmployees * (assumptions.processData * assumptions.annualHours)))+(this.state.inputs.collectingData*((assumptions.collectData * assumptions.annualHours) * parseInt(this.state.inputs.totalEmployees)) * (parseInt(this.state.inputs.avgCostPerEmployee))))/(this.state.inputs.planSelect * 12 * this.state.inputs.totalEmployees)).toFixed(2)}%</strong>
                </div>
                <div className='col-md-1'>
                </div>
            </div>
        </div>
    )
  }
}

export default Display;
