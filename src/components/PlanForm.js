import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import Switch from '@material-ui/core/Switch';
import numeral from 'numeral';
import axios from 'axios';
import baseUrl, {token} from '../config/config';


class PlanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PlanID: this.props.plan.Id,
            Price: this.props.plan.Price,
            FeaturedTour: this.props.plan.FeaturedTour,
            NormalTour: this.props.plan.NormalTour,
            Duration: this.props.plan.Duration,
            DiscountStatus: this.props.plan.DiscountStatus,
            PriceAfterDiscount: this.props.plan.PriceAfterDiscount,
            open: false
        };
    }


    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleDiscount = () => {
        const DiscountStatus = this.state.DiscountStatus;
        this.setState(() => ({DiscountStatus: !DiscountStatus}))
    };

    handleEditPlan = () => {
        const data = JSON.stringify({
            PlanID: `${this.state.PlanID}`,
            Price: `${this.state.Price}`,
            FeaturedTour: `${this.state.FeaturedTour}`,
            NormalTour: `${this.state.NormalTour}`,
            DiscountStatus: this.state.DiscountStatus ? `1` : `0`,
            PriceAfterDiscount: `${this.state.PriceAfterDiscount}`
        });
        axios.put(baseUrl + '/Admin/Plan', data, {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => this.setState(() => ({open: true}))).catch(err => alert('failed' + err));
    };

    handleClose = () => {
        this.setState({open: false});
    };


    render() {
        console.log(typeof this.state.DiscountStatus);
        return (
            <div className="main-form font-applied">
                <div className="sub-form">
                    <TextField
                        id="Price"
                        label="قیمت"
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        FormHelperTextProps={{className: 'font-applied'}}
                        helperText={`${numeral(this.state.Price).format('0,0')} تومان`}
                        value={this.state.Price}
                        onChange={this.handleChange('Price')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="FeaturedTour"
                        label="تورهای ویژه"
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        FormHelperTextProps={{className: 'font-applied'}}
                        helperText="تعداد تورهای ویژه مجاز"
                        value={this.state.FeaturedTour}
                        onChange={this.handleChange('FeaturedTour')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="NormalTour"
                        label="تورهای معمولی"
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        FormHelperTextProps={{className: 'font-applied'}}
                        helperText="تعداد تورهای معمولی مجاز"
                        value={this.state.NormalTour}
                        onChange={this.handleChange('NormalTour')}
                        margin="normal"
                        variant="filled"
                    />

                </div>
                <div className="sub-form">
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.DiscountStatus}
                                onChange={this.handleDiscount}
                                value={this.state.DiscountStatus}
                                color="primary"
                            />
                        }
                        label="وضعیت تخفیف"
                        classes={{label: 'font-applied'}}
                    />
                    <TextField
                        id="PriceAfterDiscount"
                        label="قیمت نهایی"
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        FormHelperTextProps={{className: 'font-applied'}}
                        helperText={`${numeral(this.state.PriceAfterDiscount).format('0,0')} تومان`}
                        value={this.state.PriceAfterDiscount}
                        onChange={this.handleChange('PriceAfterDiscount')}
                        margin="normal"
                        variant="filled"
                    />
                    <Button onClick={this.handleEditPlan} variant="contained"
                            color="primary" className="edit-button">ویرایش</Button>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    className="right-dir font-applied"
                >
                    <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon style={{color: 'green'}}
                                                                                         fontSize="large">check_circle</Icon>{"انجام شد!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            پلن با موفقیت ویرایش شد!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                            بستن
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default PlanForm;