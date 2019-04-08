import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import HeaderChip from "./HeaderChip";

const data = [
    {
        name: 'تور ابوظبی', views: 4000
    },
    {
        name: 'تور دبی', views: 3000
    },
    {
        name: 'تور کیش', views: 2000
    },
    {
        name: 'تور مشهد', views: 2780
    },
    {
        name: 'تور پاریس', views: 1890
    }
];

const ToursVisitsReport = () => (
    <Paper elevation={1} className="report-summary-paper">
       <HeaderChip icon='bar_chart' label='بازدید تورها' />
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


export default ToursVisitsReport;