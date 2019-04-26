import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import numeral from "numeral";
import ItemRenderer from './ItemRenderer';
import moment from "moment-jalaali";
import enmoment from "moment";

const TourInfo = (props) => {
    const tourDate = enmoment.unix(Number(props.tour.TourDate)).format('YYYY/MM/DD');
    const tourEndDate = enmoment.unix(Number(props.tour.TourReturnDate)).format('YYYY/MM/DD');
    return (
        <div className="font-applied right-dir tour-info">
            <Table className="font-applied right-dir">
                <TableBody>
                    <TableRow>
                        <TableCell align="center"><span className="bold">عنوان تور</span></TableCell>
                        <TableCell align="center">{props.tour.Title}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center"><span className="bold">شروع قیمت</span></TableCell>
                        <TableCell align="center">{numeral(props.tour.StartPrice).format('0,0')}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center"><span className="bold">مدت تور</span></TableCell>
                        <TableCell align="center">{props.tour.Duration}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center"><span className="bold">شهر</span></TableCell>
                        <TableCell align="center"><ItemRenderer id={props.tour.TourCityID}
                                                                type="city"/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center"><span className="bold">تاریخ شروع</span></TableCell>
                        <TableCell
                            align="center">{moment(tourDate).format('jYYYY/jMM/jDD')}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center"><span className="bold">تاریخ پایان</span></TableCell>
                        <TableCell align="center">{moment(tourEndDate).format('jYYYY/jMM/jDD')}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default TourInfo;