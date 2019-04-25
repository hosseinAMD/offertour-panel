import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ItemRenderer from "./ItemRenderer";
import numeral from 'numeral';
import moment from 'moment-jalaali';
import StatusRenderer from "./StatusRenderer";
import FeaturedStatusRenderer from "./FeaturedStatusRenderer";
import {NavLink} from "react-router-dom";

const TourItem = (props) => (
    <TableRow>
        <TableCell align="center">{props.tour.Id}</TableCell>
        <TableCell component={NavLink} to={`/tour/${props.tour.Id}`} align="center"><span
            className="bold">{props.tour.Title}</span></TableCell>
        <TableCell align="center"><ItemRenderer id={props.tour.TourCityID} type="city"/></TableCell>
        <TableCell align="center">{numeral(props.tour.StartPrice).format('0,0')}</TableCell>
        <TableCell align="center">{moment(props.tour.TourDate).format('jYYYY/jMM/jDD')}</TableCell>
        <TableCell align="center">{moment(props.tour.TourReturnDate).format('jYYYY/jMM/jDD')}</TableCell>
        <TableCell align="center">{props.tour.Duration}</TableCell>
        <TableCell align="center"><StatusRenderer status={props.tour.Status}/></TableCell>
        <TableCell align="center"><FeaturedStatusRenderer featured={props.tour.TourModelID}/></TableCell>
    </TableRow>
);

export default TourItem;