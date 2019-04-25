import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DurationBadge from "./DurationBadge";
import CountBadge from "./CountBadge";
import ItemRenderer from "./ItemRenderer";
import moment from 'moment-jalaali';

const ActivePlanItem = (props) => {
    const startDate = moment(parseFloat(props.plan.StartDateTime));
    const ExpireDateTime = moment(parseFloat(props.plan.ExpireDateTime));
    const duration = moment.duration(ExpireDateTime.diff(startDate)).as('days');
    return (
        <TableRow>
            <TableCell align="center"><ItemRenderer type="plan" id={props.plan.PlanID}/></TableCell>
            <TableCell align="center"><DurationBadge duration={parseInt(duration)}/></TableCell>
            <TableCell align="center"><CountBadge count={props.plan.NormalTour}/></TableCell>
            <TableCell align="center"><CountBadge count={props.plan.FeaturedTour}/></TableCell>
        </TableRow>
    );
}

export default ActivePlanItem;