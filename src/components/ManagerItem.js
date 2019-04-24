import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import StatusRenderer from "./StatusRenderer";
import ItemRenderer from "./ItemRenderer";
import {role,loggedInAgency} from "../config/config";


class ManagerItem extends React.Component {
    render() {
        const props = this.props;
        return (
            <TableRow>
                <TableCell align="center">{props.index + 1}</TableCell>
                <TableCell align="center">{props.manager.Name} {props.manager.FamilyName}</TableCell>
                <TableCell align="center">{props.manager.UserName}</TableCell>
                <TableCell align="center">{role === 'support' ? <ItemRenderer id={props.manager.AgencyID} type="agency"/> : <span>{loggedInAgency.Name}</span>}</TableCell>
                <TableCell align="center"><StatusRenderer
                    status={1}/></TableCell>
            </TableRow>
        );
    }
}


export default ManagerItem;