import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HeaderChip from "./HeaderChip";
import ActivePlanItem from "./ActivePlanItem";


class ActivePlan extends React.Component {
    render() {
        return (
            <Paper elevation={1} className="right-dir plan-paper">
                <HeaderChip label='اطلاعات پلن فعال' color='#0288d1' icon='attach_money'/>
                <Divider/>
                <br/>
                <Table className="font-applied">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">عنوان</TableCell>
                            <TableCell align="center">اعتبار</TableCell>
                            <TableCell align="center">تور معمولی</TableCell>
                            <TableCell align="center">تور ویژه</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <ActivePlanItem/>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default ActivePlan;