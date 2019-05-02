import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Icon from '@material-ui/core/Icon';
import ItemRenderer from "./ItemRenderer";


class TripItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        if (this.props.type === 'form') {
            return (
                <TableRow>
                    <TableCell align="center">{this.props.trip.tripType === 1 ?
                        <Icon className="trip-icon">flight</Icon> :
                        <Icon className="trip-icon">directions_bus</Icon>}</TableCell>
                    <TableCell align="center">{this.props.trip.tripTitle}</TableCell>
                    <TableCell align="center">{<ItemRenderer id={this.props.trip.startCity} type="city"/>}</TableCell>
                    <TableCell align="center">{<ItemRenderer id={this.props.trip.destinationCity}
                                                             type="city"/>}</TableCell>
                    <TableCell align="center">{this.props.trip.tripDay}</TableCell>
                    <TableCell align="center">{this.props.trip.tripTime}</TableCell>
                </TableRow>
            );
        } else {
            return (
                <TableRow>
                    <TableCell align="center">{this.props.trip.StepTypeID === 1 ?
                        <Icon className="trip-icon">flight</Icon> :
                        <Icon className="trip-icon">directions_bus</Icon>}</TableCell>
                    <TableCell align="center">{this.props.trip.Title}</TableCell>
                    <TableCell align="center">{<ItemRenderer id={this.props.trip.OriginCityID}
                                                             type="city"/>}</TableCell>
                    <TableCell align="center">{<ItemRenderer id={this.props.trip.DestinationCityID}
                                                             type="city"/>}</TableCell>
                    <TableCell align="center">{this.props.trip.StepDateTime}</TableCell>
                    <TableCell align="center">{this.props.trip.StepDuration}</TableCell>
                </TableRow>
            );
        }
    }
}

export default TripItem;