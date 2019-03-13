import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
    {
        name: 'تور ابوظبی', views: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'تور دبی', views: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'تور کیش', views: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'تور مشهد', views: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'تور پاریس', views: 1890, pv: 4800, amt: 2181,
    }
];

const ReportSummary = () => (
    <Paper elevation={1} className="report-summary-paper">
        <h4 className="font-applied center-txt">بازدید تورها</h4>
        <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
                top: 10, right: 30, left: 0, bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Area type="monotone" dataKey="views" stroke="#c51162" fill="#ff80ab"/>
        </AreaChart>
    </Paper>
);


export default ReportSummary;