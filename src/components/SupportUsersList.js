import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios';
import baseUrl, {token} from "../config/config";
import AgencyItem from "./AgencyItem";
import Loading from "./Loading";
import SupportUserItem from "./SupportUserItem";

class SupportUsersList extends React.Component {
    state = {
        usersList: '',
        isLoaded: false
    };

    componentDidMount() {
        axios.get(baseUrl + '/Admin/Users', {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => {
            this.setState(() => ({
                usersList: res.data,
                isLoaded: true
            }));
        })
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <Table className="font-applied">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">#</TableCell>
                            <TableCell align="center">نام و نام خانوادگی</TableCell>
                            <TableCell align="center">نام کاربری</TableCell>
                            <TableCell align="center">نقش</TableCell>
                            <TableCell align="center">وضعیت</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.usersList.map((item, index) => (
                            <SupportUserItem key={item.Id} index={index} user={item}/>))}
                    </TableBody>
                </Table>
            );
        } else {
            return (
                <Loading color="primary"/>
            )
        }
    }
}

export default SupportUsersList;