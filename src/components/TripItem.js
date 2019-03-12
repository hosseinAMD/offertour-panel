import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import ItemRenderer from "./ItemRenderer";
import PlanStars from "./HotelItem";
import numeral from "numeral";

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
        return (
            <TableRow>
                <TableCell align="center">{this.props.trip.tripType === 1 ? <Icon className="trip-icon">flight</Icon> :
                    <Icon className="trip-icon">directions_bus</Icon>}</TableCell>
                <TableCell align="center">{this.props.trip.tripTitle}</TableCell>
                <TableCell align="center">{<ItemRenderer id={this.props.trip.startCity} type="city"/>}</TableCell>
                <TableCell align="center">{<ItemRenderer id={this.props.trip.destinationCity} type="city"/>}</TableCell>
                <TableCell align="center">{this.props.trip.tripDay}</TableCell>
                <TableCell align="center">{this.props.trip.tripTime}</TableCell>
                <TableCell align="center">
                    <Fab onClick={this.handleClickOpen} color="secondary" aria-label="Edit">
                        <Icon>search</Icon>
                    </Fab>
                </TableCell>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="right-dir font-applied"
                >
                    <DialogTitle id="alert-dialog-title">مشاهده جزئیات سفر</DialogTitle>
                    <DialogContent>
                        {this.props.trip.tripType === 1 ?
                            <div>
                                <p><span className="bold">نوع سفر: </span>هوایی</p>
                                <p><span className="bold">عنوان سفر: </span>{this.props.trip.tripTitle}</p>
                                <p><span className="bold">زمان سفر: </span>{this.props.trip.tripDay}</p>
                                <p><span className="bold">مدت سفر: </span>{this.props.trip.tripTime}</p>
                                <p><span className="bold">مبدا سفر: </span>کشور <ItemRenderer
                                    id={this.props.trip.startCountry} type="country"/> شهر <ItemRenderer
                                    id={this.props.trip.startCity} type="city"/> فرودگاه <ItemRenderer
                                    id={this.props.trip.startAirport} type="airport"/></p>
                                <p><span className="bold">مقصد سفر: </span>کشور <ItemRenderer
                                    id={this.props.trip.destinationCountry} type="country"/> شهر <ItemRenderer
                                    id={this.props.trip.destinationCity} type="city"/> فرودگاه <ItemRenderer
                                    id={this.props.trip.destinationAirport} type="airport"/></p>
                                <p><span className="bold">آژانس هواپیمایی: </span><ItemRenderer
                                    id={this.props.trip.tripFlightCompany} type="flightCompany"/></p>
                                <p><span className="bold">کلاس پرواز: </span><ItemRenderer
                                    id={this.props.trip.flightClass} type="flightClass"/></p>
                            </div>
                            :
                            <div>
                                <p><span className="bold">نوع سفر: </span>زمینی</p>
                                <p><span className="bold">عنوان سفر: </span>{this.props.trip.tripTitle}</p>
                                <p><span className="bold">زمان سفر: </span>{this.props.trip.tripDay}</p>
                                <p><span className="bold">مدت سفر: </span>{this.props.trip.tripTime}</p>
                                <p><span className="bold">مبدا سفر: </span>کشور <ItemRenderer
                                    id={this.props.trip.startCountry} type="country"/> شهر <ItemRenderer
                                    id={this.props.trip.startCity} type="city"/> ترمینال <ItemRenderer
                                    id={this.props.trip.startTerminal} type="busTerminal"/></p>
                                <p><span className="bold">مقصد سفر: </span>کشور <ItemRenderer
                                    id={this.props.trip.destinationCountry} type="country"/> شهر <ItemRenderer
                                    id={this.props.trip.destinationCity} type="city"/> ترمینال <ItemRenderer
                                    id={this.props.trip.destinationTerminal} type="busTerminal"/></p>
                                <p><span className="bold">تعاونی مسافربری: </span><ItemRenderer
                                    id={this.props.trip.tripBusCompany} type="busCompany"/></p>
                                <p><span className="bold">کلاس اتوبوس: </span><ItemRenderer
                                    id={this.props.trip.busClass} type="busClass"/></p>
                            </div>

                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            بستن
                        </Button>
                    </DialogActions>
                </Dialog>
            </TableRow>
        );
    }
}

export default TripItem;