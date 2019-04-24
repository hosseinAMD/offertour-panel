import React from 'react';
import moment from 'moment-jalaali';
import {DatePicker} from 'react-advance-jalaali-datepicker';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import baseUrl, {token} from '../config/config';
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import provinces from "../data/provinces";
import cities from "../data/cities";

class AgencyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OwnerName:  '',
            OwnerFamilyName:  '',
            Image: '',
            Name: '',
            Address:'',
            EstabilishedDate:  '',
            ProvinceID:0,
            CityID:  '',
        };
    }


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
        }).then(res => alert('done' + res)).catch(err => alert('error' + err));
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
                        label="نام مالک آژنس"
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
                        {provinces.map(option => {
                            if (option.country === 1) {
                                return (
                                    <MenuItem className="font-applied" key={option.id} value={option.id}>
                                        {option.title}
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
                        {cities.map(option => {
                            if (option.province === this.state.ProvinceID) {
                                return (
                                    <MenuItem className="font-applied" key={option.id} value={option.id}>
                                        {option.title}
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
            </div>
        );
    }
}

export default AgencyForm;