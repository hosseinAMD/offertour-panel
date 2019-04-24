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
import CityItem from "./CityItem";
import {connect} from "react-redux";

const CitiesList = (props) => (
    <Paper elevation={1} className="right-dir setting-forms-paper">
        <HeaderChip label="لیست شهر ها" icon="location_on" color={headerBlue}/>
        <Divider/>
        <Table className="font-applied right-dir">
            <TableHead>
                <TableRow>
                    <TableCell align="center">ردیف</TableCell>
                    <TableCell align="center">نام شهر</TableCell>
                    <TableCell align="center">استان</TableCell>
                    <TableCell align="center">عملیات</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.cities.map((item,index) => (<CityItem key={item.Id} city={item} num={index}/>))}
            </TableBody>
        </Table>
    </Paper>
);

const mapStateToProps = (state) => ({
    cities: state.cities
});

export default connect(mapStateToProps)(CitiesList);