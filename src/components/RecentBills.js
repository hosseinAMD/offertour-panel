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

const RecentBills = () => (
    <Paper elevation={1} className="right-dir plan-paper">
        <HeaderChip label='آخرین فاکتورها' color='#0288d1' icon='attach_money'/>
        <Divider/>
        <Table className="font-applied">
            <TableHead>
                <TableRow>
                    <TableCell align="center">محصول</TableCell>
                    <TableCell align="center">قیمت</TableCell>
                    <TableCell align="center">تاریخ</TableCell>
                    <TableCell align="center">وضعیت</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {bills.map((bill) => (
                    <RecentBillItem bill={bill}/>
                ))}
            </TableBody>

        </Table>
    </Paper>
);

export default RecentBills;