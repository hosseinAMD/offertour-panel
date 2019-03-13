import React from 'react';
import Paper from '@material-ui/core/Paper';
import DurationBadge from "./DurationBadge";
import CountBadge from "./CountBadge";
import PlanStars from "./PlanStars";

const PlanSummary = () => (
    <Paper elevation={1} className="plan-summary-paper">
        <h4 className="font-applied center-txt">پلن فعال</h4>
        <p><span className="bold">نوع پلن: </span>دو ستاره</p>
        <PlanStars star={2}/>
        <p><span className="bold">مدت اعتبار: </span><DurationBadge duration={17}/></p>
        <p><span className="bold">تور معمولی: </span><CountBadge count={5}/></p>
        <p><span className="bold">تور ویژه: </span><CountBadge count={0}/></p>
        <p><span className="bold">تور باقیمانده: </span><CountBadge count={1}/></p>
    </Paper>
);

export default PlanSummary;