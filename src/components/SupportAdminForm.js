import React from 'react';
import moment from 'moment-jalaali';
import {DatePicker} from 'react-advance-jalaali-datepicker';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import baseUrl, {token} from '../config/config';


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
            EnableStatus: 1
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
        let supportUserDetail = new FormData();
        supportUserDetail.append('Name', this.state.Name);
        supportUserDetail.append('FamilyName', this.state.FamilyName);
        supportUserDetail.append('UserName', this.state.UserName);
        supportUserDetail.append('Password', this.state.Password);
        supportUserDetail.append('Image', this.state.Image);
        supportUserDetail.append('RoleID', this.state.RoleID);
        supportUserDetail.append('EnableStatus',this.state.EnableStatus);
        supportUserDetail.append('BirthDate', this.state.BirthDate);
        axios.post(baseUrl + '/Admin/Admin', supportUserDetail, {
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
            </div>
        );
    }
}

export default SupportAdminForm;