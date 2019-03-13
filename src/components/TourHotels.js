import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import HotelItem from "./HotelItem";

const TourHotels = (props) => (
    <div className="font-applied right-dir tour-info">
        <Table className="font-applied">
            <TableHead>
                <TableRow>
                    <TableCell align="center">نام هتل</TableCell>
                    <TableCell align="center">منو غذا</TableCell>
                    <TableCell align="center">دوتخته</TableCell>
                    <TableCell align="center">یک تخته</TableCell>
                    <TableCell align="center">کودک با تخت</TableCell>
                    <TableCell align="center">کودک بدون تخت</TableCell>
                    <TableCell align="center">جزئیات</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.hotels.map((hotel) => (
                    <HotelItem hotel={hotel}/>
                ))}
            </TableBody>
        </Table>
    </div>
);

export default TourHotels;