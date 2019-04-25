import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TourDesc = (props) => (
    <div className="font-applied right-dir tour-info">
        <Table className="font-applied right-dir">
            <TableBody>
                <TableRow>
                    <TableCell align="center"><span className="bold">مدارک لازم</span></TableCell>
                    <TableCell align="center">{props.tour.NecessaryDocument}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center"><span className="bold">خدمات تور</span></TableCell>
                    <TableCell align="center">{props.tour.AgancyServices}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center"><span className="bold">توضیحات</span></TableCell>
                    <TableCell align="center">{props.tour.Description}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

export default TourDesc;