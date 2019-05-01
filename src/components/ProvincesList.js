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
import ProvinceItem from "./ProvinceItem";
import {connect} from "react-redux";
import CountryItem from "./CountriesList";

const ProvincesList = (props) => (
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
                {props.provinces.map((item,index) => {
                    if (props.country && props.name) {
                        if (props.country === item.CountryID && item.Name.includes(props.name)) {
                            return <ProvinceItem key={item.Id} province={item} num={index}/>
                        } else {
                            return ''
                        }
                    } else if (props.name) {
                        if (item.Name.includes(props.name)) {
                            return <ProvinceItem key={item.Id} province={item} num={index}/>
                        } else {
                            return ''
                        }
                    } else if (props.country) {
                        if (props.country === item.CountryID) {
                            return <ProvinceItem key={item.Id} province={item} num={index}/>
                        } else {
                            return ''
                        }
                    } else {
                        return <ProvinceItem key={item.Id} province={item} num={index}/>
                    }
                })}
            </TableBody>
        </Table>
    </Paper>
);

const mapStateToProps = (state) => ({
    provinces: state.provinces
});

export default connect(mapStateToProps)(ProvincesList);