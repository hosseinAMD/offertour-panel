import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TripItem from './TripItem';
import axios from 'axios';
import baseUrl from '../config/config';
import Loading from "./Loading";

class TourTimeline extends React.Component {
    state = {
        trips: [],
        isLoaded: false
    };

    componentDidMount() {
        axios.get(baseUrl + '/App/TourStep?TourID=' + this.props.id, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => this.setState(() => ({trips: res.data, isLoaded: true}))).catch(err => alert(err));
    }

    render() {
        if (this.state.isLoaded) {
            if (this.state.trips.length > 0) {
                return (
                    <div className="font-applied right-dir tour-info">
                        <Table className="font-applied">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">نوع</TableCell>
                                    <TableCell align="center">عنوان</TableCell>
                                    <TableCell align="center">مبدا</TableCell>
                                    <TableCell align="center">مقصد</TableCell>
                                    <TableCell align="center">ساعت</TableCell>
                                    <TableCell align="center">مدت</TableCell>
                                    {/*<TableCell align="center">جزئیات</TableCell>*/}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.trips.map((trip) => (
                                <TripItem trip={trip}/>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                );
            } else {
                return (<p className="font-applied center-txt">سفری ثبت نشده است</p>);
            }
        } else {
            return (<Loading/>);
        }
    }
}


export default TourTimeline;