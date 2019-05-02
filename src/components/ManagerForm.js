import React from 'react';
import moment from 'moment-jalaali';
import {DatePicker} from 'react-advance-jalaali-datepicker';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import baseUrl, {token} from '../config/config';
import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from "react-redux";
import Loading from "./Loading";
import {statusCodes} from "../config/errors";


class ManagerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            FamilyName: '',
            Image: '',
            UserName: '',
            BirthDate: '',
            Password: '',
            ConfirmPassword: '',
            PhoneNumber: '',
            RoleID: 1,
            EnableStatus: 1,
            AgencyID: 0,
            openSuccess: false,
            openLoading: false,
            openError: false,
            error: ''
        };
    }

    handleClose = () => {
        this.setState({openError: false, openLoading: false, openSuccess: false});
    };

    DatePickerInput = (props) => {
        return <input className="popo" {...props} ></input>;
    };

    birthDateChange = (unix, formatted) => {
        const BirthDate = unix;
        this.setState(() => ({BirthDate}))
    };


    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    imageChange = (e) => {
        const Image = e.target.files[0];
        this.setState(() => ({Image}));
    };

    handleSubmit = () => {
        if (!this.state.AgencyID) {
            this.setState(() => ({openError: true, error: 'آژانس مورد نظر را انتخاب نمایید'}))
        } else {
            if (this.state.Password === this.state.ConfirmPassword) {
                this.setState(() => ({openLoading: true}));
                let managerDetail = new FormData();
                managerDetail.append('Name', this.state.Name);
                managerDetail.append('FamilyName', this.state.FamilyName);
                managerDetail.append('UserName', this.state.UserName);
                managerDetail.append('Password', this.state.Password);
                managerDetail.append('Image', this.state.Image);
                managerDetail.append('RoleID', this.state.RoleID);
                managerDetail.append('PhoneNumber', this.state.PhoneNumber);
                managerDetail.append('BirthDate', this.state.BirthDate);
                managerDetail.append('AgencyID', this.state.AgencyID);
                axios.post(baseUrl + '/Admin/AgencySuperUser', managerDetail, {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    }
                }).then(res => this.setState(() => ({
                    openLoading: false,
                    openSuccess: true
                }))).catch((res) => {
                    this.setState(() => ({
                        openLoading: false,
                        openError: true,
                        error: statusCodes.FA[res.response.data.code].message
                    }));
                });
            } else {
                this.setState(() => ({error: 'رمز عبور و تایید رمز عبور یکسان نمی باشند.', openError: true}));
            }
        }
    };

    render() {
        return (
            <div>
                <p className="font-applied">××× حجم تصویر کمتر از ۱۰۰ کیلوبایت مجاز می باشد.</p>
                <div className="main-form font-applied">
                    <div className="sub-form">
                        <TextField
                            id="Name"
                            label="نام"
                            InputLabelProps={{className: 'input-labels'}}
                            InputProps={{className: 'font-applied'}}
                            FormHelperTextProps={{className: 'font-applied'}}
                            helperText="نام کاربر را به فارسی وارد کنید"
                            value={this.state.Name}
                            onChange={this.handleChange('Name')}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="FamilyName"
                            label="نام خانوادگی"
                            InputLabelProps={{className: 'input-labels'}}
                            InputProps={{className: 'font-applied'}}
                            FormHelperTextProps={{className: 'font-applied'}}
                            helperText="نام خانوادگی کاربر را به فارسی وارد کنید"
                            value={this.state.FamilyName}
                            onChange={this.handleChange('FamilyName')}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="UserName"
                            label="نام کاربری"
                            InputLabelProps={{className: 'input-labels'}}
                            InputProps={{className: 'font-applied'}}
                            FormHelperTextProps={{className: 'font-applied'}}
                            helperText="نام کاربری را به انگلیسی وارد کنید"
                            value={this.state.UserName}
                            onChange={this.handleChange('UserName')}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="PhoneNumber"
                            label="تلفن همراه"
                            InputLabelProps={{className: 'input-labels'}}
                            InputProps={{className: 'font-applied'}}
                            FormHelperTextProps={{className: 'font-applied'}}
                            helperText="شماره تلفن ۱۱ رقمی"
                            value={this.state.PhoneNumber}
                            onChange={this.handleChange('PhoneNumber')}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            select
                            InputLabelProps={{className: 'font-applied login-label'}}
                            label="انتخاب آژانس"
                            inputProps={{className: 'font-applied'}}
                            className="font-applied login-label field-margin"
                            value={this.state.AgencyID}
                            onChange={this.handleChange('AgencyID')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Icon>layers</Icon></InputAdornment>,
                            }}
                        >
                            {this.props.agencies.map(option => (
                                <MenuItem className="font-applied" key={option.Id} value={option.Id}>
                                    {option.Name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="sub-form">
                        <TextField
                            type="password"
                            id="UPassword"
                            label="رمز عبور"
                            InputLabelProps={{className: 'input-labels'}}
                            InputProps={{className: 'font-applied'}}
                            FormHelperTextProps={{className: 'font-applied'}}
                            helperText="رمز عبور دلخواه را وارد کنید"
                            value={this.state.Password}
                            onChange={this.handleChange('Password')}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            type="password"
                            id="ConfirmPassword"
                            label="تایید رمز عبور"
                            InputLabelProps={{className: 'input-labels'}}
                            InputProps={{className: 'font-applied'}}
                            FormHelperTextProps={{className: 'font-applied'}}
                            helperText="رمز عبور را مجددا وارد کنید"
                            value={this.state.ConfirmPassword}
                            onChange={this.handleChange('ConfirmPassword')}
                            margin="normal"
                            variant="filled"
                        />
                        <FormControl>
                            <label htmlFor="startDate">
                                تاریخ تولد
                            </label>
                            <DatePicker
                                inputComponent={this.DatePickerInput}
                                placeholder="انتخاب تاریخ"
                                format="jYYYY/jMM/jDD"
                                onChange={this.birthDateChange}
                                id="birthDate"
                                preSelected={this.props.agencyUser ? moment.unix(this.state.BirthDate).format('jYYYY/jMM/jDD') : moment().format('jYYYY/jMM/jDD')}
                            />
                        </FormControl>
                        <FormControl>
                            <label style={{textAlign: 'right', margin: '5px'}} htmlFor="tour-image">تصویر کاربری</label>
                            <input id="user-image" type="file" onChange={this.imageChange}/>
                        </FormControl>
                        <Button onClick={this.props.agencyUser ? this.handleEdit : this.handleSubmit}
                                variant="contained"
                                color="primary" className="edit-button">افزودن</Button>
                    </div>
                    <Dialog
                        open={this.state.openSuccess}
                        onClose={this.handleClose}
                        className="right-dir font-applied"
                    >
                        <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon style={{color: 'green'}}
                                                                                             fontSize="large">check_circle</Icon>{"انجام شد!"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                مدیر آژانس با موفقیت افزوده شد!
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                                بستن
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={this.state.openError}
                        onClose={this.handleClose}
                        className="right-dir font-applied"
                    >
                        <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon style={{color: 'red'}}
                                                                                             fontSize="large">close_circle</Icon>{"خطا در بروزرسانی اطلاعات"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {this.state.error}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                                بستن
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={this.state.openLoading}
                        onClose={this.handleClose}
                        className="right-dir font-applied"
                    >
                        <DialogTitle id="alert-dialog-title" className="font-applied">{"در حال انجام عملیات!"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Loading/>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    agencies: state.agencies
});

export default connect(mapStateToProps)(ManagerForm);