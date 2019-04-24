import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios';
import baseUrl, {token} from "../config/config";
import Loading from "./Loading";
import ManagerItem from "./ManagerItem";

class AgencyUsersList extends React.Component {
    state = {
        agencyUsers: '',
        isLoaded: false
    };

    componentDidMount() {
        axios.get(baseUrl + '/Agency/AgencyUser', {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => {
            this.setState(() => ({
                agencyUsers: res.data.AgencyUsers,
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
                            <TableCell align="center">آژانس</TableCell>
                            <TableCell align="center">وضعیت</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.agencyUsers.map((item, index) => (
                            <ManagerItem key={item.Id} index={index} manager={item}/>))}
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

export default AgencyUsersList;