import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import HotelItem from "./HotelItem";
import axios from 'axios';
import baseUrl from '../config/config';
import Loading from "./Loading";

class TourHotels extends React.Component {
    state = {
        hotels: [],
        isLoaded: false
    };

    componentDidMount() {
        axios.get(baseUrl + '/App/Hotel?TourID=' + this.props.id, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => this.setState(() => ({hotels: res.data, isLoaded: true})))
            .catch(err => alert(err));
    };

    render() {
        if(this.state.isLoaded){
            if(this.state.hotels.length > 0){
                return(
                    <div className="font-applied right-dir tour-info">
                        <Table className="font-applied">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">نام هتل</TableCell>
                                    <TableCell align="center">منو غذا</TableCell>
                                    <TableCell align="center">دوتخته</TableCell>
                                    <TableCell align="center">یک تخته</TableCell>
                                    <TableCell align="center">کودک با تخت</TableCell>
                                    <TableCell align="center">کودک بدون تخت</TableCell>
                                    <TableCell align="center">جزئیات</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.hotels.map((hotel) => (
                                    <HotelItem hotel={hotel}/>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                );
            } else {
                return(<p className="font-applied center-txt">هتلی ثبت نشده است!</p>);
            }
        } else {
            return(<Loading/>);
        }
    }
}


export default TourHotels;