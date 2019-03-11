import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PlanTitle from "./PlanTitle";
import PlanStars from "./PlanStars";
import PlanDetail from "./PlanDetail";
import {Icon} from "@material-ui/core";
import moment from 'moment-jalaali';
import numeral from 'numeral';

class PlanItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const plan = this.props.plan;
        return (
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
                        <Button variant="contained" color="primary" className="buy-button"
                                onClick={this.handleClickOpen}>
                            <Icon>add_shopping_cart</Icon>
                            <span className="font-applied" style={{marginRight: '6px'}}>فعالسازی پلن</span>
                        </Button>
                    </CardActions>
                </Card>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="right-dir"
                >
                    <DialogTitle id="alert-dialog-title">فعالسازی پلن</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {`کاربر گرامی! آیا از فعالسازی پلن ${plan.title} به مدت ${plan.duration} تا تاریخ ${moment().add(1, 'month').format('jYYYY/jMM/jDD')} به مبلغ ${numeral(plan.price).format('0,0')} تومان اطمینان دارید؟`}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" className="font-applied accept-buy-button" autoFocus>
                            تایید و انتقال به درگاه پرداخت
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        );
    }
}

export default PlanItem;