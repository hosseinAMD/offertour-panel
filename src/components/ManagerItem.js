import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import StatusRenderer from "./StatusRenderer";
import ItemRenderer from "./ItemRenderer";


class ManagerItem extends React.Component {
    render() {
        const props = this.props;
        return (
            <TableRow>
                <TableCell align="center">{props.index}</TableCell>
                <TableCell align="center">{props.manager.Name} {props.manager.FamilyName}</TableCell>
                <TableCell align="center">{props.manager.UserName}</TableCell>
                <TableCell align="center"><ItemRenderer id={props.manager.AgencyID} type="agency"/></TableCell>
                <TableCell align="center"><StatusRenderer
                    status={1}/></TableCell>
            </TableRow>
        );
    }
}


export default ManagerItem;