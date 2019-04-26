import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TourItem from "./TourItem";
import axios from 'axios';
import baseUrl, {token} from "../config/config";
import Loading from "./Loading";
import {connect} from "react-redux";
import {setTours} from "../actions/tours";

class AdminTourList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tours: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        axios.get(baseUrl + '/Admin/Tours', {
            headers: {
                'token': token
            }
        }).then(res => {
            this.props.setTours(res.data);
            this.setState(() => ({tours: res.data, isLoaded: true}));
        })
            .catch(err => alert(err))
    }

    render() {
        if (this.state.isLoaded) {
            if (this.state.tours.length > 0) {
                return (
                    <Grid container spacing={24} className="my-container">
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Table className="font-applied right-dir">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">کد تور</TableCell>
                                        <TableCell align="center">عنوان تور</TableCell>
                                        <TableCell align="center">شهر تور</TableCell>
                                        <TableCell align="center">قیمت</TableCell>
                                        <TableCell align="center">تاریخ شروع</TableCell>
                                        <TableCell align="center">تاریخ پایان</TableCell>
                                        <TableCell align="center">مدت</TableCell>
                                        <TableCell align="center">وضعیت نمایش</TableCell>
                                        <TableCell align="center">نوع تور</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.tours.map((tour) => (
                                        <TourItem key={tour.Id} tour={tour}/>
                                    ))}
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                );
            } else {
                return (
                    <p className="font-applied center-txt right-dir">در حال حاضر توری جهت بررسی موجود نمی باشد!</p>);
            }
        } else {
            return (<Loading/>);
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTours: (tours) => dispatch(setTours(tours))
});

export default connect(undefined, mapDispatchToProps)(AdminTourList);