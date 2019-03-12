import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Icon from '@material-ui/core/Icon';

const TripItem = (props) => (
    <TableRow>
        <TableCell align="center">{props.trip.tripType === 1 ? <Icon className="trip-icon">flight</Icon> : <Icon className="trip-icon">directions_bus</Icon>}</TableCell>
        <TableCell align="center">{props.trip.tripTitle}</TableCell>
        <TableCell align="center">{props.trip.startCity}</TableCell>
        <TableCell align="center">{props.trip.destinationCity}</TableCell>
        <TableCell align="center">{props.trip.tripDay}</TableCell>
        <TableCell align="center">{props.trip.tripTime}</TableCell>
    </TableRow>
);

export default TripItem;