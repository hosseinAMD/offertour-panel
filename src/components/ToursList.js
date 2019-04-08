import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import tours from '../data/tours';
import TourItem from "./TourItem";

const ToursList = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table className="font-applied right-dir">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">کد تور</TableCell>
                        <TableCell align="center">عنوان تور</TableCell>
                        <TableCell align="center">کشور تور</TableCell>
                        <TableCell align="center">قیمت</TableCell>
                        <TableCell align="center">تاریخ شروع</TableCell>
                        <TableCell align="center">تاریخ پایان</TableCell>
                        <TableCell align="center">مدت</TableCell>
                        <TableCell align="center">وضعیت نمایش</TableCell>
                        <TableCell align="center">نوع تور</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tours.map((tour) => (
                        <TourItem key={tour.id} tour={tour}/>
                    ))}
                </TableBody>
            </Table>
        </Grid>
    </Grid>
);

export default ToursList;