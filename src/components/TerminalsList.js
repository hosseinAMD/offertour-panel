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
import {connect} from "react-redux";
import TerminalItem from "./TerminalItem";

const TerminalsList = (props) => (
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
                {props.terminals.map((item, index) => {
                    if (props.city && props.name) {
                        if (props.city === item.CityID && item.Name.includes(props.name)) {
                            return <TerminalItem key={item.Id} terminal={item} num={index}/>
                        } else {
                            return ''
                        }
                    } else if (props.name) {
                        if (item.Name.includes(props.name)) {
                            return <TerminalItem key={item.Id} terminal={item} num={index}/>
                        } else {
                            return ''
                        }
                    } else if (props.city) {
                        if (props.city === item.CityID) {
                            return <TerminalItem key={item.Id} terminal={item} num={index}/>
                        } else {
                            return ''
                        }
                    } else {
                        return <TerminalItem key={item.Id} terminal={item} num={index}/>
                    }
                })}
            </TableBody>
        </Table>
    </Paper>
);

const mapStateToProps = (state) => ({
    terminals: state.terminals
});


export default connect(mapStateToProps)(TerminalsList);