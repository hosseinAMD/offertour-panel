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
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import baseUrl, {token} from '../config/config';


class AgencyUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.agencyUser ? this.props.agencyUser.Name : '',
            FamilyName: this.props.agencyUser ? this.props.agencyUser.FamilyName : '',
            Image: this.props.agencyUser ? this.props.agencyUser.Image : '',
            UserName: this.props.agencyUser ? this.props.agencyUser.UserName : '',
            PhoneNumber: this.props.agencyUser ? this.props.agencyUser.PhoneNumber : '',
            RegistrationDate: this.props.agencyUser ? this.props.agencyUser.RegistrationDate : moment().unix(),
            BirthDate: this.props.agencyUser ? this.props.agencyUser.BirthDate : '',
            Password: this.props.agencyUser ? this.props.agencyUser.Password : '',
            ConfirmPassword: this.props.agencyUser ? this.props.agencyUser.Password : '',
            RoleID: 1,
            open: false
        };
    }


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
        let agencyUserDetail = new FormData();
        agencyUserDetail.append('Name', this.state.Name);
        agencyUserDetail.append('FamilyName', this.state.FamilyName);
        agencyUserDetail.append('PhoneNumber', this.state.PhoneNumber);
        agencyUserDetail.append('UserName', this.state.UserName);
        agencyUserDetail.append('Password', this.state.Password);
        agencyUserDetail.append('Image', this.state.Image);
        agencyUserDetail.append('RoleID', this.state.RoleID);
        agencyUserDetail.append('RegistrationDate', this.state.RegistrationDate);
        agencyUserDetail.append('BirthDate', this.state.BirthDate);
        axios.post(baseUrl + '/Agency/AgencyUser', agencyUserDetail, {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => this.setState(() => ({open: true}))).catch(err => alert('error' + err));
    };

    handleEdit = () => {
        let agencyUserDetail = new FormData();
        agencyUserDetail.append('Name', this.state.Name);
        agencyUserDetail.append('FamilyName', this.state.FamilyName);
        agencyUserDetail.append('PhoneNumber', this.state.PhoneNumber);
        agencyUserDetail.append('UserName', this.state.UserName);
        agencyUserDetail.append('Password', this.state.Password);
        agencyUserDetail.append('Image', this.state.Image);
        agencyUserDetail.append('BirthDate', this.state.BirthDate);
        axios.put(baseUrl + '/Agency/AgencyUserInformation', agencyUserDetail, {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => this.setState(() => ({open: true}))).catch(err => alert('error' + err));
    };

    handleClose = () => {
        this.setState({open: false});
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
                        id="PhoneNumber"
                        label="تلفن همراه"
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        FormHelperTextProps={{className: 'font-applied'}}
                        helperText="تلفن همراه ۱۱ رقمی را وارد کنید"
                        value={this.state.PhoneNumber}
                        onChange={this.handleChange('PhoneNumber')}
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
                    <Button onClick={this.props.agencyUser ? this.handleEdit : this.handleSubmit} variant="contained"
                            color="primary" className="edit-button">افزودن</Button>
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
                            تغییرات مد نظر شما موفقیت آمیز انجام شد!
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

export default AgencyUserForm;