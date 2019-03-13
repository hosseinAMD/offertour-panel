import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ItemRenderer from "./ItemRenderer";
import numeral from 'numeral';
import moment from 'moment-jalaali';
import StatusRenderer from "./StatusRenderer";
import FeaturedStatusRenderer from "./FeaturedStatusRenderer";

const TourItem = (props) => (
    <TableRow>
        <TableCell align="center">{props.tour.id}</TableCell>
        <TableCell align="center"><span className="bold">{props.tour.title}</span></TableCell>
        <TableCell align="center"><ItemRenderer id={props.tour.country} type="country"/></TableCell>
        <TableCell align="center">{numeral(props.tour.startPrice).format('0,0')}</TableCell>
        <TableCell align="center">{moment(props.tour.startDate).format('jYYYY/jMM/jDD')}</TableCell>
        <TableCell align="center">{moment(props.tour.endDate).format('jYYYY/jMM/jDD')}</TableCell>
        <TableCell align="center">{props.tour.duration}</TableCell>
        <TableCell align="center"><StatusRenderer status={props.tour.status}/></TableCell>
        <TableCell align="center"><FeaturedStatusRenderer featured={props.tour.featured}/></TableCell>
    </TableRow>
);

export default TourItem;