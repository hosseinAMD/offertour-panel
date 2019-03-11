import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DurationBadge from "./DurationBadge";
import CountBadge from "./CountBadge";

const ActivePlan = () => (
    <Paper elevation={1} className="right-dir plan-paper">
        <h3 className="font-applied">پلن های فعال</h3>
        <Divider/>
        <br/>
        <Table className="font-applied">
            <TableHead>
                <TableRow>
                    <TableCell align="center">نوع پلن</TableCell>
                    <TableCell align="center">اعتبار</TableCell>
                    <TableCell align="center">تورهای معمولی باقیمانده</TableCell>
                    <TableCell align="center">تورهای ویژه باقیمانده</TableCell>
                    <TableCell align="center">تبلیغات باقی مانده</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell align="center"><span className="bold">۲ ستاره</span></TableCell>
                    <TableCell align="center"><DurationBadge duration={17}/></TableCell>
                    <TableCell align="center"><CountBadge count={5}/></TableCell>
                    <TableCell align="center"><CountBadge count={0}/></TableCell>
                    <TableCell align="center"><CountBadge count={1}/></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Paper>
);

export default ActivePlan;