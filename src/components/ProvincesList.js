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
import provinces from "../data/provinces";
import ProvinceItem from "./ProvinceItem";

const ProvincesList = () => (
    <Paper elevation={1} className="right-dir setting-forms-paper">
        <HeaderChip label="لیست استان ها" icon="golf_course" color={headerBlue}/>
        <Divider/>
        <Table className="font-applied right-dir">
            <TableHead>
                <TableRow>
                    <TableCell align="center">ردیف</TableCell>
                    <TableCell align="center">نام استان</TableCell>
                    <TableCell align="center">کشور</TableCell>
                    <TableCell align="center">عملیات</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {provinces.map((item,index) => (<ProvinceItem key={item.id} province={item} num={index}/>))}
            </TableBody>
        </Table>
    </Paper>
);

export default ProvincesList;