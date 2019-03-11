import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import PlanTitle from "./PlanTitle";
import PlanStars from "./PlanStars";
import PlanDetail from "./PlanDetail";
import {Icon} from "@material-ui/core";

class PlanItem extends React.Component{
    render() {
        const plan = this.props.plan;
        return(
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} className="plan-card">
                <Card className="right-dir">
                    <CardContent className="center-txt">
                        <PlanTitle title={plan.title}/>
                        <PlanStars star={plan.stars}/>
                        <Divider/>
                        <br/>
                        <PlanDetail plan={plan}/>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" className="buy-button">
                            <Icon>add_shopping_cart</Icon>
                            <span className="font-applied" style={{marginRight:'6px'}}>فعالسازی پلن</span>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default PlanItem;