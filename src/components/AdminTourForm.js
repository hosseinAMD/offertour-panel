import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import {DatePicker} from 'react-advance-jalaali-datepicker';
import moment from 'moment-jalaali';
import numeral from 'numeral';
import tripTypes from "../data/tripTypes";
import flightClasses from "../data/flightClasses";
import busClasses from "../data/busClasses";
import Paper from "@material-ui/core/Paper";
import TripItem from "./TripItem";
import HotelItem from "./HotelItem";
import {connect} from "react-redux";
import axios from 'axios';
import baseUrl, {token} from "../config/config";
import Loading from "./Loading";
import {statusCodes} from "../config/errors";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {NavLink} from "react-router-dom";

class AdminTourForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            agency: '',
            category: '',
            country: '',
            province: '',
            city: '',
            startPrice: '',
            tourType: 1,
            tourModel: 1,
            discountPercentage: 0,
            discount: '',
            startDate: '',
            endDate: '',
            duration: '',
            flightCompany: '',
            tag: '',
            image: '',
            tags: [],
            openError: false,
            openLoading: false,
            openSuccess: false,
            error: '',
            regexError: '',
        }
    };


    DatePickerInput = (props) => {
        return <input className="popo" {...props} ></input>;
    };

    startDateChange = (unix, formatted) => {
        const startDate = moment(formatted, 'jYYYY/jMM/jDD').format('jYYYY/jMM/jDD');
        this.setState(() => ({startDate}))
    };

    endDateChange = (unix, formatted) => {
        const endDate = moment(formatted, 'jYYYY/jMM/jDD').format('jYYYY/jMM/jDD');
        this.setState(() => ({endDate}))
    };

    handleNumbersChange = name => event => {
        if (event.target.value.match(/^\d*?$/)) {
            this.setState(() => ({regexError: ''}));
            this.setState({[name]: event.target.value});
        } else {
            this.setState(() => ({regexError: 'لطفا فقط اعداد انگلیسی وارد نمایید.'}))
        }
    };

    handleClose = () => {
        this.setState({openError: false, openLoading: false, openSuccess: false});
    };

    addTag = () => {
        const tag = this.state.tag;
        let tags = this.state.tags;
        tags.push(tag);
        this.setState(() => ({tags, tag: ''}));
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    imageChange = (e) => {
        const image = e.target.files[0];
        this.setState(() => ({image}));
    };

    handleNext = () => {
        const {activeStep} = this.state;
        if (activeStep === 1) {
            this.setState(() => ({openLoading: true}));
            let tourFields = new FormData();
            const discount = (this.state.startPrice * (100 - this.state.discountPercentage)) / 100;
            tourFields.append('Image', this.state.image);
            tourFields.append('Title', this.state.title);
            tourFields.append('TourDistance', 'Not set yet');
            tourFields.append('TourCityID', this.state.city);
            tourFields.append('TourCategoryID', this.state.category);
            tourFields.append('TourDate', this.state.startDate);
            tourFields.append('TourReturnDate', this.state.endDate);
            tourFields.append('Duration', this.state.duration);
            tourFields.append('TourTypeID', this.state.tourType);
            tourFields.append('AgancyServices', this.state.services);
            tourFields.append('Description', this.state.fullDescription);
            tourFields.append('NecessaryDocument', this.state.documents);
            tourFields.append('TagsInput', `${JSON.stringify(this.state.tags)}`);
            tourFields.append('Discount', discount);
            tourFields.append('DiscountPercentage', this.state.discountPercentage);
            tourFields.append('TourModelID', this.state.tourModel);
            tourFields.append('StartPrice', this.state.startPrice);
            axios.post(baseUrl + '/Agency/Tour', tourFields, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            }).then(res => {
                    this.setState({
                        activeStep: activeStep + 1,
                        id: res.data.id,
                        openLoading: false
                    });
                }
            ).catch(res => this.setState(() => ({
                openError: true,
                openLoading: false,
                error: statusCodes.FA[res.response.data.code].message
            })));
        } else {
            this.setState({
                activeStep: activeStep + 1,
            });
        }

    };


    render() {
        return (
            <div>
                <Paper elevation={1} className="tour-form-paper">
                    <div className="right-dir">
                        <div className="main-form">
                            <div className="sub-form">
                                <TextField
                                    id="title"
                                    label="عنوان تور"
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    value={this.state.title}
                                    onChange={this.handleChange('title')}
                                    margin="normal"
                                    autoFocus={true}
                                />
                                <TextField
                                    id="agency"
                                    label="آژانس تور"
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    value={this.state.agency}
                                    onChange={this.handleChange('agency')}
                                    margin="normal"
                                    autoFocus={true}
                                />
                                <TextField
                                    id="startPrice"
                                    label="شروع قیمت"
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    FormHelperTextProps={{className: 'font-applied'}}
                                    helperText={`${numeral(this.state.startPrice).format('0,0')} تومان`}
                                    value={this.state.startPrice}
                                    onChange={this.handleNumbersChange('startPrice')}
                                    margin="normal"
                                />
                                {this.state.regexError ?
                                    <p className="font-applied regex-error">{this.state.regexError}</p> : ''}
                                <TextField
                                    id="discountPercentage"
                                    label="درصد تخفیف"
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    FormHelperTextProps={{className: 'font-applied'}}
                                    helperText="درصد تخفیف تور"
                                    value={this.state.discountPercentage}
                                    onChange={this.handleNumbersChange('discountPercentage')}
                                    margin="normal"
                                />
                                {this.state.regexError ?
                                    <p className="font-applied regex-error">{this.state.regexError}</p> : ''}
                                <TextField
                                    id="discount"
                                    label="قیمت پس از تخفیف"
                                    disabled={true}
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    FormHelperTextProps={{className: 'font-applied'}}
                                    helperText={`${numeral((this.state.startPrice * (100 - this.state.discountPercentage)) / 100).format('0,0')} تومان`}
                                    value={(this.state.startPrice * (100 - this.state.discountPercentage)) / 100}
                                    margin="normal"
                                />
                                <TextField
                                    id="duration"
                                    label="مدت تور"
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    value={this.state.name}
                                    onChange={this.handleChange('duration')}
                                    margin="normal"
                                />
                            </div>
                            <div className="sub-form">
                                <TextField
                                    id="category"
                                    select
                                    label="دسته بندی"
                                    value={this.state.category}
                                    onChange={this.handleChange('category')}
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    FormHelperTextProps={{className: 'font-applied'}}
                                    SelectProps={{
                                        MenuProps: {
                                            className: 'font-applied',
                                        },
                                    }}
                                    helperText="لطفا دسته بندی تور را انتخاب نمایید."
                                    margin="normal"
                                >
                                    {this.props.categories.map(option => (
                                        <MenuItem key={option.Id} value={option.Id}>
                                            {option.Name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="country"
                                    select
                                    label="کشور"
                                    value={this.state.country}
                                    onChange={this.handleChange('country')}
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    FormHelperTextProps={{className: 'font-applied'}}
                                    SelectProps={{
                                        MenuProps: {
                                            className: 'font-applied',
                                        },
                                    }}
                                    helperText="لطفا کشور تور را انتخاب نمایید."
                                    margin="normal"
                                >
                                    {this.props.countries.map((option) => {
                                        if (option.CategoryID === this.state.category) {
                                            return (
                                                <MenuItem key={option.Id} value={option.Id}>
                                                    {option.Name}
                                                </MenuItem>
                                            );
                                        } else {
                                            return ''
                                        }
                                    })}
                                </TextField>
                                <TextField
                                    id="province"
                                    select
                                    label="استان"
                                    value={this.state.province}
                                    onChange={this.handleChange('province')}
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    FormHelperTextProps={{className: 'font-applied'}}
                                    SelectProps={{
                                        MenuProps: {
                                            className: 'font-applied',
                                        }
                                    }}
                                    helperText="لطفا استان تور را انتخاب نمایید."
                                    margin="normal"
                                >
                                    {this.props.provinces.map((option) => {
                                        if (option.CountryID === this.state.country) {
                                            return (
                                                <MenuItem key={option.Id} value={option.Id}>
                                                    {option.Name}
                                                </MenuItem>
                                            );
                                        } else {
                                            return ''
                                        }
                                    })}
                                </TextField>
                                <TextField
                                    id="city"
                                    select
                                    label="شهر"
                                    value={this.state.city}
                                    onChange={this.handleChange('city')}
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    FormHelperTextProps={{className: 'font-applied'}}
                                    SelectProps={{
                                        MenuProps: {
                                            className: 'font-applied',
                                        }
                                    }}
                                    helperText="لطفا شهر تور را انتخاب نمایید."
                                    margin="normal"
                                >
                                    {this.props.cities.map((option) => {
                                        if (option.ProvinceID === this.state.province) {
                                            return (
                                                <MenuItem key={option.Id} value={option.Id}>
                                                    {option.Name}
                                                </MenuItem>
                                            );
                                        } else {
                                            return ''
                                        }
                                    })}
                                </TextField>
                            </div>
                            <div className="sub-form">
                                <TextField
                                    id="tourModel"
                                    select
                                    label="نوع تور"
                                    value={this.state.tourModel}
                                    onChange={this.handleChange('tourModel')}
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    FormHelperTextProps={{className: 'font-applied'}}
                                    SelectProps={{
                                        MenuProps: {
                                            className: 'font-applied',
                                        }
                                    }}
                                    helperText="لطفا نوع تور را انتخاب نمایید."
                                    margin="normal"
                                >

                                    <MenuItem value={1}>
                                        ویژه
                                    </MenuItem>
                                    <MenuItem value={2}>
                                        عادی
                                    </MenuItem>

                                </TextField>
                                <TextField
                                    id="tourType"
                                    select
                                    label="نوع سفر"
                                    value={this.state.tourType}
                                    onChange={this.handleChange('tourType')}
                                    InputLabelProps={{className: 'input-labels'}}
                                    InputProps={{className: 'font-applied'}}
                                    FormHelperTextProps={{className: 'font-applied'}}
                                    SelectProps={{
                                        MenuProps: {
                                            className: 'font-applied',
                                        }
                                    }}
                                    helperText="لطفا نوع سفر را انتخاب نمایید."
                                    margin="normal"
                                >

                                    <MenuItem value={1}>
                                        هوایی
                                    </MenuItem>
                                    <MenuItem value={2}>
                                        زمینی
                                    </MenuItem>

                                </TextField>
                                <div>
                                    <TextField
                                        id="tag"
                                        label="برچسب"
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        value={this.state.tag}
                                        onChange={this.handleChange('tag')}
                                        margin="normal"
                                    />
                                    <Icon onClick={this.addTag} style={{color: 'blue', cursor: 'pointer'}}>add</Icon>
                                </div>

                                <FormControl>
                                    <label htmlFor="startDate">
                                        تاریخ شروع
                                    </label>
                                    <DatePicker
                                        inputComponent={this.DatePickerInput}
                                        placeholder="انتخاب تاریخ"
                                        format="jYYYY/jMM/jDD"
                                        onChange={this.startDateChange}
                                        id="startDate"
                                        preSelected={moment().format('jYYYY/jMM/jDD')}
                                    />
                                </FormControl>
                                <FormControl>
                                    <label htmlFor="endDate">
                                        تاریخ پایان
                                    </label>
                                    <DatePicker
                                        inputComponent={this.DatePickerInput}
                                        placeholder="انتخاب تاریخ"
                                        format="jYYYY/jMM/jDD"
                                        onChange={this.endDateChange}
                                        id="endDate"
                                        preSelected={moment().format('jYYYY/jMM/jDD')}
                                    />
                                </FormControl>
                                <FormControl>
                                    <label style={{textAlign: 'right', margin: '5px'}} htmlFor="tour-image">تصویر
                                        تور</label>
                                    <input id="tour-image" type="file" onChange={this.imageChange}/>
                                </FormControl>
                            </div>
                        </div>
                        <Button variant="contained" color="primary" className="font-applied">ذخیره</Button>
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
                            open={this.state.openSuccess}
                            onClose={this.handleClose}
                            className="right-dir font-applied"
                        >
                            <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon
                                style={{color: 'green'}}
                                fontSize="large">check_circle</Icon>{"انجام شد!"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    با موفقیت انجام شد!
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
                </Paper>
                <br/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    countries: state.countries,
    provinces: state.provinces,
    cities: state.cities,
    airports: state.airports,
    terminals: state.terminals
});

export default connect(mapStateToProps)(AdminTourForm);