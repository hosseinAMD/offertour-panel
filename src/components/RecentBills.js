import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HeaderChip from "./HeaderChip";
import bills from '../data/bills';
import RecentBillItem from "./RecentBillItem";
import axios from 'axios';
import baseUrl, {token} from "../config/config";
import Loading from "./Loading";

class RecentBills extends React.Component {
    state = {
        plans: '',
        isLoaded: false
    };

    componentDidMount() {
        axios.get(baseUrl + '/Agency/ActivePlan', {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        })
            .then(res => this.setState(() => ({plans: res.data, isLoaded: true})));
    }


    render() {
        if (this.state.isLoaded) {
            return (
                <Paper elevation={1} className="right-dir plan-paper">
                    <HeaderChip label='آخرین فاکتورها' color='#0288d1' icon='attach_money'/>
                    <Divider/>
                    <Table className="font-applied">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">محصول</TableCell>
                                <TableCell align="center">وضعیت</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.plans.map((bill,index) => (
                                index < 6 ? <RecentBillItem key={bill.Id} bill={bill}/> : ''
                            ))}
                        </TableBody>

                    </Table>
                </Paper>
            );
        } else {
            return (<Loading/>);
        }

    }
}


export default RecentBills;