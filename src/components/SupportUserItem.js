import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import StatusRenderer from "./StatusRenderer";


class SupportUserItem extends React.Component {
    render() {
        const props = this.props;
        return (
            <TableRow>
                <TableCell align="center">{props.index}</TableCell>
                <TableCell align="center">{props.user.Name} {props.user.FamilyName}</TableCell>
                <TableCell align="center">{props.user.UserName}</TableCell>
                <TableCell align="center">{props.user.RoleID === 1 ? 'مدیر' : 'پشتیبان'}</TableCell>
                <TableCell align="center"><StatusRenderer
                    status={props.user.EnableStatus}/></TableCell>
            </TableRow>
        );
    }
}


export default SupportUserItem;