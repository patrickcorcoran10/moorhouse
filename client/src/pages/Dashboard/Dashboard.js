import React, { Component } from 'react';
import '../../pages/Dashboard/Dashboard.css';
import request from 'superagent';
import axios from 'axios';
import {Line} from 'react-chartjs-2';



export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {},
            result: [],
            completed: [],
            revenues: '',
            monthData: []
        };
    };
    componentWillMount() {
        console.log('We are mounted on the Dashboard Page');
        let january = 15;
        let february = 12;
        let march = 18;
        let april = 23;
        let may = 0;
        let june = 0;
        let july = 0;
        let august = 0;
        let september = 0;
        let october = 0;
        let november = 0;
        let december = 0;
        let monthData = [];
        axios.get('/api/opps/month')
        .then(res => {
        for (let i = 0; i < res.data.length; i++) {
        console.log(res.data[i].createdAt.slice(5, 7))
            if (res.data[i].createdAt.slice(5, 7) === '01') {
                january++;
            } else if (res.data[i].createdAt.slice(5, 7) === '02') {
                february++;
            } else if (res.data[i].createdAt.slice(5, 7) === '03') {
                march++;
            } else if (res.data[i].createdAt.slice(5, 7) === '04') {
                april++;
            } else if (res.data[i].createdAt.slice(5, 7) === '05') {
                may++;
                console.log(may);
            } else if (res.data[i].createdAt.slice(5, 7) === '06') {
                june++; 
            } else if (res.data[i].createdAt.slice(5, 7) === '07') {
                july++;
            } else if (res.data[i].createdAt.slice(5, 7) === '08') {
                august++;   
            } else if (res.data[i].createdAt.slice(5, 7) === '09') {
                september++;
            } else if (res.data[i].createdAt.slice(5, 7) === '10') {
                october++;
            } else if (res.data[i].createdAt.slice(5, 7) === '11') {
                november++;
            } else {
                december++;
            }
        };
        monthData.push(january, february, march, april, may, june, july, august, september, october, november, december);
        this.setState({
            monthData: monthData
        })
        
        });
        let result = [];
        request
            .get('/api/dashboard/number-of-opps')
            .set('Accept', 'application/json')
            .then(res => {
                // console.log(res.body);
                result = res.body;
                // console.log(result.length)
                this.setState({
                    result: result.length
                })
             });
        let completed = [];
        request
            .get('/api/dashboard/number-of-completed')
            .set('Accept', 'application/json')
            .then(res => {
                // console.log(res.body);
                completed = res.body;
                this.setState({
                    completed: completed.length
                })
            });
        let revenues = [];
        let displayRevenue = [];
        let sum = '';
        request 
            .get('/api/dashboard/revs')
            .set('Accept', 'application/json')
            .then(res => {
                // console.log(res.body);
                revenues = res.body;
                for (let i = 0; i < revenues.length; i++) {
                    // console.log(revenues[i].plusRevenue);
                    displayRevenue.push(parseInt(revenues[i].plusRevenue));
                    // console.log(displayRevenue);
                    sum = displayRevenue.reduce((partial_sum, a) => partial_sum + a);
                    // console.log(sum);
                };
                this.setState({
                    revenues: sum,
                })
            });
    };

  render() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Opportunities Created',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.state.monthData
          }
        ]
      };
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-1'>

            </div>
            <div className='col-md-3'>
                <div className='circle'>
                    <h6>New Opportunities Created</h6>
                    <h6 className='number'>{this.state.result}</h6>
                </div>
            </div>
            <div className='col-md-1'>
                
            </div>
            <div className='col-md-3'>
                <div className='circle'>
                    <h6>Potential Monthly Revenue</h6>
                    <h6 className='number'>${this.state.revenues}</h6>
                </div> 
            </div>
            <div className='col-md-1'>
                
            </div>
            <div className='col-md-3'>
                <div className='circle'>
                    <h6>Opportunities Completed </h6>
                    <h6 className='number'>{((parseInt(this.state.completed)/parseInt(this.state.result))*100).toFixed(0)}%</h6>
                </div>
            </div>
        </div>
        <hr/>
        <div className='row'>
            <div className='col-md-2'>
            </div>
            <div className='col-md-8'>
                <div>
                    <h2>New Opportunities Over Time</h2>
                    <Line data={data} />
                </div>
            </div>
            <div className='col-md-2'>
            </div>
        </div>
      </div>
      
    )
  }
}
