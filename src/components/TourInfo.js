import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import numeral from "numeral";
import ItemRenderer from './ItemRenderer';
import moment from "moment-jalaali";

const TourInfo = (props) => (
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
                    <TableCell align="center"><ItemRenderer id={props.tour.CityID}
                                                            type="city"/></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center"><span className="bold">هواپیمایی</span></TableCell>
                    <TableCell align="center"><ItemRenderer
                        id={props.tour.TourDistance} type="flightCompany"/></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center"><span className="bold">تاریخ شروع</span></TableCell>
                    <TableCell align="center">{moment(parseInt(props.tour.TourDate)).format('jYYYY/jMM/jDD')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center"><span className="bold">تاریخ پایان</span></TableCell>
                    <TableCell align="center">{moment(props.tour.TourEndDate).format('jYYYY/jMM/jDD')}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

export default TourInfo;