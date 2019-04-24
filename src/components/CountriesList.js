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
import CountryItem from "./CountryItem";
import {connect} from "react-redux";

const CountriesList = (props) => (
    <Paper elevation={1} className="right-dir setting-forms-paper">
        <HeaderChip label="لیست کشورها" icon="flag" color={headerBlue}/>
        <Divider/>
        <Table className="font-applied right-dir">
            <TableHead>
                <TableRow>
                    <TableCell align="center">ردیف</TableCell>
                    <TableCell align="center">نام کشور</TableCell>
                    <TableCell align="center">دسته بندی</TableCell>
                    <TableCell align="center">عملیات</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.countries.map((item, index) => (<CountryItem key={item.id} country={item} num={index}/>))}
            </TableBody>
        </Table>
    </Paper>
);

const mapStateToProps = (state) => ({
    countries: state.countries
});

export default connect(mapStateToProps)(CountriesList);