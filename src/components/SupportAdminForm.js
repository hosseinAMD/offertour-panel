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
import Loading from "./Loading";
import {statusCodes} from "../config/errors";

class SupportAdminForm extends React.Component {
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
            RoleID: 2,
            EnableStatus: 1,
            openSuccess: false,
            openLoading: false,
            openError: false,
            error: ''
        };
    }

    handleClose = () => {
        this.setState({openSuccess: false, opanLoading: false, openError: false});
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
        if(this.state.Password === this.state.ConfirmPassword){
            this.setState(() => ({openLoading: true}));
            let supportUserDetail = new FormData();
            supportUserDetail.append('Name', this.state.Name);
            supportUserDetail.append('FamilyName', this.state.FamilyName);
            supportUserDetail.append('UserName', this.state.UserName);
            supportUserDetail.append('Password', this.state.Password);
            supportUserDetail.append('Image', this.state.Image);
            supportUserDetail.append('RoleID', this.state.RoleID);
            supportUserDetail.append('EnableStatus', this.state.EnableStatus);
            supportUserDetail.append('BirthDate', this.state.BirthDate);
            axios.post(baseUrl + '/Admin/Admin', supportUserDetail, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            }).then(res => this.setState(() => ({
                openSuccess: true,
                openLoading: false
            }))).catch(res => this.setState(() => ({
                openLoading: false,
                error: statusCodes.FA[res.response.data.code].message,
                openError: true
            })));
        } else {
            this.setState(() => ({
                openError:true,
                error:'رمز عبور و تایید رمز عبور یکسان نمی باشند.'
            }));
        }

    };

    render() {
        return (
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
                        <label style={{textAlign: 'right', margin: '5px'}} htmlFor="tour-image">تصویر کاربری</label>
                        <input id="user-image" type="file" onChange={this.imageChange}/>
                    </FormControl>
                    <Button onClick={this.props.agencyUser ? this.handleEdit : this.handleSubmit} variant="contained"
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
                            پشتیبان مورد نظر با موفقیت افزوده شد!
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
                            <Loading/>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default SupportAdminForm;