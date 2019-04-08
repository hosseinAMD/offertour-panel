import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ItemRenderer from "./ItemRenderer";
import moment from 'moment-jalaali';
import PaymentStatus from "./PaymentStatus";

const RecentBillItem = (props) => (
    <TableRow>
        <TableCell style={{padding:'0'}} align='center'><ItemRenderer type='plan' id={props.bill.product}/></TableCell>
        <TableCell style={{padding:'0'}} align='center'><ItemRenderer type='planPrice' id={props.bill.price}/></TableCell>
        <TableCell style={{padding:'0'}} align='center'>{moment(props.bill.date).format('jYY/jMM/jDD')}</TableCell>
        <TableCell style={{padding:'0'}} align='center'><PaymentStatus status={props.bill.paymentStatus}/></TableCell>
    </TableRow>
);

export default RecentBillItem;