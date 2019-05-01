import React from 'react';
import moment from 'moment-jalaali';
import {DatePicker} from 'react-advance-jalaali-datepicker';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import baseUrl, {token} from '../config/config';
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import {connect} from "react-redux";
import Loading from "./Loading";

class AgencyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OwnerName: '',
            OwnerFamilyName: '',
            Image: '',
            Name: '',
            Address: '',
            EstabilishedDate: '',
            ProvinceID: 0,
            CityID: '',
            openSuccess: false,
            openError: false,
            openLoading: false,
            error:'',
        };
    }

    handleClose = () => {
        this.setState({openSuccess: false, openError: false, openLoading: false});
    };

    DatePickerInput = (props) => {
        return <input className="popo" {...props} ></input>;
    };

    establishedDateChange = (unix, formatted) => {
        const EstabilishedDate = unix;
        this.setState(() => ({EstabilishedDate}))
    };


    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    imageChange = (e) => {
        const Image = e.target.files[0];
        this.setState(() => ({Image}));
    };

    handleSubmit = () => {
        this.setState(() => ({openLoading: true}));
        let agencyUserDetail = new FormData();
        agencyUserDetail.append('Name', this.state.Name);
        agencyUserDetail.append('OwnerName', this.state.OwnerName);
        agencyUserDetail.append('OwnerFamilyName', this.state.OwnerFamilyName);
        agencyUserDetail.append('EstabilishedDate', this.state.EstabilishedDate);
        agencyUserDetail.append('CityID', this.state.CityID);
        agencyUserDetail.append('Address', this.state.Address);
        agencyUserDetail.append('Image', this.state.Image);
        axios.post(baseUrl + '/Admin/Agency', agencyUserDetail, {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => this.setState(() => ({
            openSuccess: true,
            openLoading: false
        }))).catch(err => this.setState(() => ({openError: true,error:'خطا در ثبت اطلاعات'})));
    };


    render() {
        return (
            <div className="main-form font-applied">
                <div className="sub-form">
                    <TextField
                        id="Name"
                        label="نام آژانس"
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        FormHelperTextProps={{className: 'font-applied'}}
                        helperText="نام آژانس را به فارسی وارد کنید"
                        value={this.state.Name}
                        onChange={this.handleChange('Name')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="OwnerName"
                        label="نام مالک آژانس"
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        FormHelperTextProps={{className: 'font-applied'}}
                        helperText="نام مالک را به فارسی وارد کنید"
                        value={this.state.OwnerName}
                        onChange={this.handleChange('OwnerName')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="OwnerFamilyName"
                        label="نام خانوادگی مالک آژانس"
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        FormHelperTextProps={{className: 'font-applied'}}
                        helperText="نام خانوادگی مالک را به فارسی وارد کنید"
                        value={this.state.OwnerFamilyName}
                        onChange={this.handleChange('OwnerFamilyName')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="Address"
                        label="آدرس آژانس"
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        FormHelperTextProps={{className: 'font-applied'}}
                        helperText="آدرس آژانس را وارد کنید"
                        value={this.state.Address}
                        onChange={this.handleChange('Address')}
                        margin="normal"
                        variant="filled"
                    />
                </div>
                <div className="sub-form">
                    <TextField
                        select
                        InputLabelProps={{className: 'font-applied login-label'}}
                        label="انتخاب استان"
                        inputProps={{className: 'font-applied'}}
                        className="font-applied login-label field-margin"
                        value={this.state.ProvinceID}
                        onChange={this.handleChange('ProvinceID')}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Icon>golf_course</Icon></InputAdornment>,
                        }}
                    >
                        {this.props.provinces.map(option => {
                            if (option.CountryID === 1) {
                                return (
                                    <MenuItem className="font-applied" key={option.Id} value={option.Id}>
                                        {option.Name}
                                    </MenuItem>
                                );
                            } else {
                                return ''
                            }
                        })}
                    </TextField>
                    <TextField
                        select
                        InputLabelProps={{className: 'font-applied login-label'}}
                        label="انتخاب شهر"
                        inputProps={{className: 'font-applied'}}
                        className="font-applied login-label field-margin"
                        value={this.state.CityID}
                        onChange={this.handleChange('CityID')}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Icon>location_on</Icon></InputAdornment>,
                        }}
                    >
                        {this.props.cities.map(option => {
                            if (option.ProvinceID === this.state.ProvinceID) {
                                return (
                                    <MenuItem className="font-applied" key={option.Id} value={option.Id}>
                                        {option.Name}
                                    </MenuItem>
                                );
                            } else {
                                return ''
                            }
                        })}
                    </TextField>
                    <FormControl>
                        <label htmlFor="EstabilishedDate">
                            تاریخ تاسیس
                        </label>
                        <DatePicker
                            inputComponent={this.DatePickerInput}
                            placeholder="انتخاب تاریخ"
                            format="jYYYY/jMM/jDD"
                            onChange={this.establishedDateChange}
                            id="EstabilishedDate"
                            preSelected={moment().format('jYYYY/jMM/jDD')}
                        />
                    </FormControl>
                    <FormControl>
                        <label style={{textAlign: 'right', margin: '5px'}} htmlFor="tour-image">لوگو آژانس</label>
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
                            آژانس مورد نظر با موفقیت ایجاد شد!
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
        );
    }
}

const mapStateToProps = (state) => ({
    provinces: state.provinces,
    cities: state.cities
});

export default connect(mapStateToProps)(AgencyForm);