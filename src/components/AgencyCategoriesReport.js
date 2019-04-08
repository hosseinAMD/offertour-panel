import React from 'react';
import Paper from '@material-ui/core/Paper';
import HeaderChip from "./HeaderChip";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const data = [
    {name: 'داخلی', value: 53},
    {name: 'خاورمیانه', value: 25},
    {name: 'شرق آسیا', value: 60},
    {name: 'اروپا', value: 10},
    {name: 'همسایه', value: 36},
    {name: 'کشتی کروز', value: 5},
];


const AgencyCategoriesReport = () => (
    <Paper elevation={1} className="report-summary-paper">
        <HeaderChip icon='bar_chart' label='تعداد تورها به تفکیک دسته بندی' color='#00838f'/>
        <BarChart
            width={600}
            height={350}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#00838f" />
        </BarChart>
    </Paper>
);


export default AgencyCategoriesReport;