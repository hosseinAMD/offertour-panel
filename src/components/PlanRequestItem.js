import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ItemRenderer from "./ItemRenderer";
import PaymentStatus from "./PaymentStatus";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import baseUrl, {token} from "../config/config";

const PlanRequestItem = (props) => {

    const handleAccept = (status, id) => {
        axios.post(baseUrl + '/Admin/AgencyPlan', JSON.stringify({
            PlanID: id,
            Status: !status
        }), {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => alert('done'));
    };

    const status = props.request.Status;
    const id = props.request.Id;
    return (
        <TableRow>
            <TableCell align="center">{props.index + 1}</TableCell>
            <TableCell align="center"><ItemRenderer id={props.request.AgencyID} type="agency"/></TableCell>
            <TableCell align="center"><ItemRenderer id={props.request.PlanID} type="plan"/></TableCell>
            <TableCell align="center"><PaymentStatus status={props.request.Status}/></TableCell>
            <TableCell align="center"><Button onClick={() => handleAccept(status, id)}
                                              variant="contained" color="primary"
                                              className="edit-button">{props.request.Status ? 'غیرفعال' : 'فعال'}</Button></TableCell>
        </TableRow>
    );
};

export default PlanRequestItem;