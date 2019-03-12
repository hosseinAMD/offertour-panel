import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import numeral from 'numeral';
import ItemRenderer from "./ItemRenderer";

const HotelItem = (props) => (
    <TableRow>
        <TableCell align="center">{props.hotel.hotelName}</TableCell>
        <TableCell align="center"><ItemRenderer id={props.hotel.hotelMenu} type="foodType"/></TableCell>
        <TableCell align="center">{numeral(props.hotel.multiBed).format('0,0')}</TableCell>
        <TableCell align="center">{numeral(props.hotel.singleBed).format('0,0')}</TableCell>
        <TableCell align="center">{numeral(props.hotel.babyWithBed).format('0,0')}</TableCell>
        <TableCell align="center">{numeral(props.hotel.babyNoBed).format('0,0')}</TableCell>
    </TableRow>
);

export default HotelItem;