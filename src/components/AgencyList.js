import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AgencyItem from "./AgencyItem";
import {connect} from "react-redux";

class AgencyList extends React.Component {

    render() {
        return (
            <Table className="font-applied">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="center">نام آژانس</TableCell>
                        <TableCell align="center">مالک</TableCell>
                        <TableCell align="center">شهر</TableCell>
                        <TableCell align="center">وضعیت</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.agencyList.map((item, index) => (
                        <AgencyItem key={item.Id} index={index} agency={item}/>))}
                </TableBody>
            </Table>
        );


    }
}

const mapStateToProps = (state) => ({
    agencyList: state.agencies
});

export default connect(mapStateToProps)(AgencyList);