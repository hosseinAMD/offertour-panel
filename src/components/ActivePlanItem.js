import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DurationBadge from "./DurationBadge";
import CountBadge from "./CountBadge";

const ActivePlanItem = (props) => (
    <TableRow>
        <TableCell align="center">۲ ستاره</TableCell>
        <TableCell align="center"><DurationBadge duration={12}/></TableCell>
        <TableCell align="center"><CountBadge count={7}/></TableCell>
        <TableCell align="center"><CountBadge count={3}/></TableCell>
    </TableRow>
);

export default ActivePlanItem;