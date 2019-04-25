import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TourInfo from "./TourInfo";
import TourTimeline from "./TourTimeline";
import TourHotels from "./TourHotels";
import TourDesc from "./TourDesc";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import axios from 'axios';
import baseUrl,{token} from "../config/config";

class TourDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            openAccept: false,
            openReject: false,
        }
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleAccept = () => {
      this.setState(() => ({openAccept: true}))
    };

    handleReject = () => {
        this.setState(() => ({openReject: true}))
    };

    render() {
        const tour = this.props.tours.find((tour) => tour.Id === parseInt(this.props.match.params.id));
        return (
            <Grid container spacing={24} className="my-container">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Paper square>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            className="right-dir"
                        >
                            <Tab classes={{label: 'font-applied'}} icon={<Icon>info</Icon>} label="اطلاعات کلی"/>
                            <Tab classes={{label: 'font-applied'}} icon={<Icon>flight</Icon>} label="زمان بندی تور"/>
                            <Tab classes={{label: 'font-applied'}} icon={<Icon>home</Icon>} label="لیست پکیج ها"/>
                            <Tab classes={{label: 'font-applied'}} icon={<Icon>help</Icon>} label="جزئیات تور"/>
                        </Tabs>
                        {this.state.value === 0 ? <TourInfo tour={tour}/> : ''}
                        {this.state.value === 1 ? <TourTimeline id={tour.Id}/> : ''}
                        {this.state.value === 2 ? <TourHotels id={tour.Id}/> : ''}
                        {this.state.value === 3 ? <TourDesc tour={tour}/> : ''}
                        <div className="tour-handlers">
                            <Button onClick={this.handleAccept} variant="contained" color="primary"
                                    className="edit-button">تایید تور</Button>
                            <Button onClick={this.handleReject} variant="contained" color="secondary" className="reject-button">حذف تور</Button>
                        </div>
                        <Dialog
                            open={this.state.openReject}
                            onClose={this.handleClose}
                            className="right-dir font-applied"
                        >
                            <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon style={{color: 'red'}}
                                                                                                 fontSize="large">close_circle</Icon>{"تور مورد نظر رد شد"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    پشتیبان گرامی! عملیات عدم تایید تور مورد نظر انجام شد.بر روی کلید زیر کلیک کنید تا
                                    به لیست تور ها منتقل شوید.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button component={NavLink} to="/admin-tours-list" variant="contained" className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                                    لیست تورها
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog
                            open={this.state.openAccept}
                            onClose={this.handleClose}
                            className="right-dir font-applied"
                        >
                            <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon
                                style={{color: 'green'}}
                                fontSize="large">check_circle</Icon>{"انجام شد!"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    پشتیبان گرامی! عملیات تایید تور مورد نظر انجام شد.بر روی کلید زیر کلیک کنید تا
                                    به لیست تور ها منتقل شوید.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button component={NavLink} to="/admin-tours-list"  variant="contained" className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                                    لیست تورها
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    tours: state.tours
});

export default connect(mapStateToProps)(TourDetail);