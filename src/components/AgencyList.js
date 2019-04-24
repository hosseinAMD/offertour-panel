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

class AgencyList extends React.Component {
    state = {
        agencyList: '',
        isLoaded: false
    };

    componentDidMount() {
        axios.get(baseUrl + '/Admin/Agencies', {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => {
            this.setState(() => ({
                agencyList: res.data,
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
                            <TableCell align="center">نام آژانس</TableCell>
                            <TableCell align="center">مالک</TableCell>
                            <TableCell align="center">شهر</TableCell>
                            <TableCell align="center">وضعیت</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.agencyList.map((item, index) => (
                            <AgencyItem key={item.Id} index={index} agency={item}/>))}
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

export default AgencyList;