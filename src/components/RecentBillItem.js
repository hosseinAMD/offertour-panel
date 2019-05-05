import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ItemRenderer from "./ItemRenderer";
import PaymentStatus from "./PaymentStatus";

const RecentBillItem = (props) => (
    <TableRow>
        <TableCell style={{padding:'0'}} align='center'><ItemRenderer type='plan' id={props.bill.PlanID}/></TableCell>
        <TableCell style={{padding:'0'}} align='center'><PaymentStatus status={props.bill.Status}/></TableCell>
    </TableRow>
);

export default RecentBillItem;