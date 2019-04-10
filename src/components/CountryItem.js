import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import ItemRenderer from "./ItemRenderer";

const CountryItem = (props) => (
    <TableRow>
        <TableCell align="center">{props.num + 1}</TableCell>
        <TableCell align="center">{props.country.title}</TableCell>
        <TableCell align="center"><ItemRenderer type="category" id={props.country.category}/></TableCell>
        <TableCell align="center">
            <Fab color="primary" size="small" style={{marginLeft:'5px'}}><Icon>edit</Icon></Fab>
            <Fab color="secondary" size="small"><Icon>delete</Icon></Fab>
        </TableCell>
    </TableRow>
);

export default CountryItem;