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
import terminals from '../data/busTerminals';
import TerminalItem from "./TerminalItem";

const TerminalsList = () => (
    <Paper elevation={1} className="right-dir setting-forms-paper">
        <HeaderChip label="لیست ترمینال ها" icon="directions_bus" color={headerBlue}/>
        <Divider/>
        <Table className="font-applied right-dir">
            <TableHead>
                <TableRow>
                    <TableCell align="center">ردیف</TableCell>
                    <TableCell align="center">نام ترمینال</TableCell>
                    <TableCell align="center">شهر</TableCell>
                    <TableCell align="center">عملیات</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {terminals.map((item,index) => (<TerminalItem key={item.id} terminal={item} num={index}/>))}
            </TableBody>
        </Table>
    </Paper>
);

export default TerminalsList;