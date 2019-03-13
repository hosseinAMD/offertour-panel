import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TripItem from './TripItem';

const TourTimeline = (props) => (
    <div className="font-applied right-dir tour-info">
        <Table className="font-applied">
            <TableHead>
                <TableRow>
                    <TableCell align="center">نوع</TableCell>
                    <TableCell align="center">عنوان</TableCell>
                    <TableCell align="center">مبدا</TableCell>
                    <TableCell align="center">مقصد</TableCell>
                    <TableCell align="center">ساعت</TableCell>
                    <TableCell align="center">مدت</TableCell>
                    <TableCell align="center">جزئیات</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.trips.map((trip) => (
                    <TripItem trip={trip}/>
                ))}
            </TableBody>
        </Table>
    </div>
);

export default TourTimeline;