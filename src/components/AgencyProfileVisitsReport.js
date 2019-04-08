import React from 'react';
import Paper from '@material-ui/core/Paper';
import moment from 'moment-jalaali';
import {
    BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar
} from 'recharts';
import HeaderChip from "./HeaderChip";

const data = [
    {
        name: moment().subtract(6, 'days').format('jMM/jDD'), views: 302
    },
    {
        name: moment().subtract(5, 'days').format('jMM/jDD'), views: 600
    },
    {
        name: moment().subtract(4, 'days').format('jMM/jDD'), views: 100
    },
    {
        name: moment().subtract(3, 'days').format('jMM/jDD'), views: 500
    },
    {
        name: moment().subtract(2, 'days').format('jMM/jDD'), views: 123
    },
    {
        name: moment().subtract(1, 'days').format('jMM/jDD'), views: 190
    },
    {
        name: moment().format('jMM/jDD'), views: 700
    }
];

const AgencyProfileVisitsReport = () => (
    <Paper elevation={1} className="report-summary-paper">
        <HeaderChip icon='bar_chart' label='بازدید پروفایل آژانس' color='#1b5e20'/>
        <BarChart
            width={500}
            height={400}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="views" fill="#388e3c"/>
        </BarChart>
    </Paper>
);


export default AgencyProfileVisitsReport;