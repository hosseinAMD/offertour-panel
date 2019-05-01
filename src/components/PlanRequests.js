import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import HeaderChip from "./HeaderChip";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import baseUrl, {token} from "../config/config";
import axios from 'axios';
import Loading from "./Loading";
import PlanRequestItem from "./PlanRequestItem";

class PlanRequests extends React.Component {
    state = {
        requests: '',
        isLoaded: false
    };

    componentDidMount() {
        axios.get(baseUrl + '/Admin/PlanRequest', {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => this.setState(() => ({requests: res.data, isLoaded: true})))
    }

    render() {
        if (this.state.isLoaded) {
            const requests = this.state.requests.sort((a, b) => a.Id < b.Id);
            return (
                <Paper elevation={1} className="right-dir agency-paper">
                    <HeaderChip label='درخواست ها' color='#0288d1' icon='account_circle'/>
                    <Divider/>
                    <br/>
                    <Table className="font-applied">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">#</TableCell>
                                <TableCell align="center">آژانس</TableCell>
                                <TableCell align="center">پلن</TableCell>
                                <TableCell align="center">وضعیت</TableCell>
                                <TableCell align="center">عملیات</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {requests.map((item, index) => (
                                <PlanRequestItem key={item.Id} index={index} request={item}/>))}
                        </TableBody>
                    </Table>
                </Paper>
            );
        } else {
            return (<Loading/>);
        }

    }
}

export default PlanRequests;