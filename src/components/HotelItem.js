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
import numeral from 'numeral';
import ItemRenderer from "./ItemRenderer";
import PlanStars from "./PlanStars";

class HotelItem extends React.Component {
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
        let foodType = 1;
        if (this.props.hotel.LunchService === true) {
            foodType = 2;
        }
        return (
            <TableRow>
                <TableCell align="center">{this.props.hotel.HotelName}</TableCell>
                <TableCell align="center"><ItemRenderer id={foodType}
                                                        type="foodType"/></TableCell>
                <TableCell align="center">{numeral(this.props.hotel.PriceOF2BedStead).format('0,0')}</TableCell>
                <TableCell align="center">{numeral(this.props.hotel.PriceOF1BedStead).format('0,0')}</TableCell>
                <TableCell align="center">{numeral(this.props.hotel.PriceOFChildWithBedStead).format('0,0')}</TableCell>
                <TableCell
                    align="center">{numeral(this.props.hotel.PriceOfChildWithOutBedStead).format('0,0')}</TableCell>
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
                    <DialogTitle id="alert-dialog-title">مشاهده جزئیات هتل</DialogTitle>
                    <DialogContent>
                        <p><span className="bold">نام هتل: </span>{this.props.hotel.HotelName}</p>
                        <p><span className="bold">ستاره هتل: </span><PlanStars star={this.props.hotel.HotelStar}/></p>
                        <p><span className="bold">منو غذا: </span><ItemRenderer
                            id={this.props.hotel.LunchService ? 1 : 0} type="foodType"/></p>
                        <p><span className="bold">شهر هتل: </span><ItemRenderer id={this.props.hotel.HotelCityID}
                                                                                type="city"/></p>
                        <p><span
                            className="bold">قیمت دوتخته: </span>{`${numeral(this.props.hotel.PriceOF2BedStead).format('0,0')} تومان`}
                        </p>
                        <p><span
                            className="bold">قیمت یک تخته: </span>{`${numeral(this.props.hotel.PriceOF1BedStead).format('0,0')} تومان`}
                        </p>
                        <p><span
                            className="bold">قیمت کودک با تخت: </span>{`${numeral(this.props.hotel.PriceOFChildWithBedStead).format('0,0')} تومان`}
                        </p>
                        <p><span
                            className="bold">قیمت کودک بدون تخت: </span>{`${numeral(this.props.hotel.PriceOfChildWithOutBedStead).format('0,0')} تومان`}
                        </p>
                        <p><span className="bold">توضیحات: </span>{this.props.hotel.PriceOfChildWithOutBedStead}</p>
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

export default HotelItem;