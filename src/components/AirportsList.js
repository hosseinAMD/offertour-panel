import React from 'react';
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HeaderChip from "./HeaderChip";
import {headerBlue} from "../config/colors";
import airports from '../data/airports';
import AirportItem from "./AirportItem";

const AirportsList = () => (
    <Paper elevation={1} className="right-dir setting-forms-paper">
        <HeaderChip label="لیست فرودگاه ها" icon="local_airport" color={headerBlue}/>
        <Divider/>
        <Table className="font-applied right-dir">
            <TableHead>
                <TableRow>
                    <TableCell align="center">ردیف</TableCell>
                    <TableCell align="center">نام فرودگاه</TableCell>
                    <TableCell align="center">شهر</TableCell>
                    <TableCell align="center">عملیات</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {airports.map((item,index) => (<AirportItem key={item.id} airport={item} num={index}/>))}
            </TableBody>
        </Table>
    </Paper>
);

export default AirportsList;