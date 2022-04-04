import React from 'react';
import BarCharts from '../Charts/BarCharts';
import LineCharts from '../Charts/LineChart';

const Dashboard = () => {
    return (
        <div className='d-flex flex-column flex-md-row flex-lg-row'>
            <div className='m-5'>
                <h1>MONTH WISE SELL</h1>
                <LineCharts></LineCharts>
            </div>
            <div className='m-5'>
                <h1>INVESTMENT vs REVENUE</h1>
                <BarCharts />
            </div>
        </div>
    );
};

export default Dashboard;