import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Icon from '@material-ui/core/Icon';
import ItemRenderer from "./ItemRenderer";

const TripItem = (props) => (
    <TableRow>
        <TableCell align="center">{props.trip.tripType === 1 ? <Icon className="trip-icon">flight</Icon> : <Icon className="trip-icon">directions_bus</Icon>}</TableCell>
        <TableCell align="center">{props.trip.tripTitle}</TableCell>
        <TableCell align="center">{<ItemRenderer id={props.trip.startCity} type="city"/>}</TableCell>
        <TableCell align="center">{<ItemRenderer id={props.trip.destinationCity} type="city"/>}</TableCell>
        <TableCell align="center">{props.trip.tripDay}</TableCell>
        <TableCell align="center">{props.trip.tripTime}</TableCell>
    </TableRow>
);

export default TripItem;