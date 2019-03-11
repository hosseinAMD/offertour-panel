import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {DatePicker} from 'react-advance-jalaali-datepicker';
import moment from 'moment-jalaali';
import numeral from 'numeral';
import categories from '../data/categories';
import flightCompanies from '../data/flightCompanies';
import countries from '../data/countries';
import cities from '../data/cities';
import tripTypes from "../data/tripTypes";
import flightClasses from "../data/flightClasses";
import airports from "../data/airports";
import busClasses from "../data/busClasses";
import foodTypes from "../data/foodTypes";

class TourForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            title: '',
            category: '',
            country: '',
            city: '',
            startPrice: '',
            startDate: moment(),
            endDate: moment().add(10, 'days'),
            duration: '',
            flightCompany: '',
            tripType: 1,
            startCity: '',
            destinationCity: '',
            startAirport: '',
            destinationAirport: '',
            tripTime: '',
            tripDay: '',
            tripFlightCompany: '',
            flightClass: '',
            startTerminal: '',
            destinationTerminal: '',
            busClass: '',
            hotelName:'',
            hotelStarts:'',
            hotelMenu:'',
            hotelDescription:'',
            singleBed:'',
            multiBed:'',
            babyWithBed:'',
            babyNoBed:'',
            documents:'',
            services:'',
            fullDescription:'',
            trips: [],
            hotels:[]

        }
    };

    DatePickerInput = (props) => {
        return <input className="popo" {...props} ></input>;
    };

    startDateChange = (unix, formatted) => {
        const startDate = moment(formatted, 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
        this.setState(() => ({startDate}));
    };

    endDateChange = (unix, formatted) => {
        const endDate = moment(formatted, 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
        this.setState(() => ({endDate}));
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };


    getSteps = () => {
        return ['اطلاعات کلی', 'زمانبندی تور', 'لیست پکیج ها', 'جزئیات تور'];
    };

    getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
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
                            />
                            <TextField
                                id="startPrice"
                                label="شروع قیمت"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                helperText={`${numeral(this.state.startPrice).format('0,0')} تومان`}
                                value={this.state.startPrice}
                                onChange={this.handleChange('startPrice')}
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
                                {categories.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.title}
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
                                {countries.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.title}
                                    </MenuItem>
                                ))}
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
                                {cities.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.title}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className="sub-form">
                            <TextField
                                id="flightCompany"
                                select
                                label="هواپیمایی"
                                value={this.state.flightCompany}
                                onChange={this.handleChange('flightCompany')}
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                SelectProps={{
                                    MenuProps: {
                                        className: 'font-applied',
                                    },
                                }}
                                helperText="لطفا هواپیمایی تور را انتخاب نمایید."
                                margin="normal"
                            >
                                {flightCompanies.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.title}
                                    </MenuItem>
                                ))}
                            </TextField>
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
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div>
                        {this.state.tripType === 1 ?
                            <div className="main-form">
                                <div className="sub-form">
                                    <TextField
                                        id="city"
                                        select
                                        label="نوع"
                                        value={this.state.tripType}
                                        onChange={this.handleChange('tripType')}
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
                                        {tripTypes.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="city"
                                        select
                                        label="شهر مبدا"
                                        value={this.state.startCity}
                                        onChange={this.handleChange('startCity')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا شهر مبدا را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {cities.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="city"
                                        select
                                        label="فرودگاه مبدا"
                                        value={this.state.startAirport}
                                        onChange={this.handleChange('startAirport')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا فرودگاه مبدا را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {airports.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="sub-form">
                                    <TextField
                                        id="city"
                                        select
                                        label="شهر مقصد"
                                        value={this.state.destinationCity}
                                        onChange={this.handleChange('destinationCity')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا شهر مقصد را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {cities.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="city"
                                        select
                                        label="فرودگاه مقصد"
                                        value={this.state.destinationAirport}
                                        onChange={this.handleChange('destinationAirport')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا فرودگاه مقصد را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {airports.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="city"
                                        select
                                        label="کلاس پرواز"
                                        value={this.state.flightClass}
                                        onChange={this.handleChange('flightClass')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا کلاس پرواز را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {flightClasses.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="sub-form">
                                    <TextField
                                        id="city"
                                        select
                                        label="آژانس هواپیمایی"
                                        value={this.state.tripFlightCompany}
                                        onChange={this.handleChange('tripFlightCompany')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا آژانس هواپیمایی را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {flightCompanies.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        label="زمان سفر"
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        value={this.state.tripDay}
                                        onChange={this.handleChange('tripDay')}
                                        margin="normal"
                                    />
                                    <TextField
                                        label="مدت سفر"
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        value={this.state.tripTime}
                                        onChange={this.handleChange('tripTime')}
                                        margin="normal"
                                    />
                                </div>
                            </div>
                            :
                            <div className="main-form">
                                <div className="sub-form">
                                    <TextField
                                        id="city"
                                        select
                                        label="نوع"
                                        value={this.state.tripType}
                                        onChange={this.handleChange('tripType')}
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
                                        {tripTypes.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="city"
                                        select
                                        label="شهر مبدا"
                                        value={this.state.startCity}
                                        onChange={this.handleChange('startCity')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا شهر مبدا را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {cities.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="city"
                                        select
                                        label="ترمینال مبدا"
                                        value={this.state.startAirport}
                                        onChange={this.handleChange('startAirport')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا ترمینال مبدا را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {airports.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="sub-form">
                                    <TextField
                                        id="city"
                                        select
                                        label="شهر مقصد"
                                        value={this.state.destinationCity}
                                        onChange={this.handleChange('destinationCity')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا شهر مقصد را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {cities.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="city"
                                        select
                                        label="ترمینال مقصد"
                                        value={this.state.destinationAirport}
                                        onChange={this.handleChange('destinationAirport')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا ترمینال مقصد را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {airports.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="city"
                                        select
                                        label="کلاس اتوبوس"
                                        value={this.state.flightClass}
                                        onChange={this.handleChange('flightClass')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا کلاس اتوبوس را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {busClasses.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="sub-form">
                                    <TextField
                                        id="city"
                                        select
                                        label="پایانه اتوبوسرانی"
                                        value={this.state.tripFlightCompany}
                                        onChange={this.handleChange('tripFlightCompany')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا پایانه اتوبوسرانی را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {flightCompanies.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        label="زمان سفر"
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        value={this.state.tripDay}
                                        onChange={this.handleChange('tripDay')}
                                        margin="normal"
                                    />
                                    <TextField
                                        label="مدت سفر"
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        value={this.state.tripTime}
                                        onChange={this.handleChange('tripTime')}
                                        margin="normal"
                                    />
                                </div>
                            </div>
                        }
                    </div>
                );
            case 2:
                return (
                    <div className="main-form">
                        <div className="sub-form">
                            <TextField
                                label="نام هتل"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                value={this.state.hotelName}
                                onChange={this.handleChange('hotelName')}
                                margin="normal"
                            />
                            <TextField
                                label="ستاره هتل"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                value={this.state.hotelStarts}
                                onChange={this.handleChange('hotelStarts')}
                                margin="normal"
                            />
                            <TextField
                                id="city"
                                select
                                label="نوع منو هتل"
                                value={this.state.hotelMenu}
                                onChange={this.handleChange('hotelMenu')}
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                SelectProps={{
                                    MenuProps: {
                                        className: 'font-applied',
                                    }
                                }}
                                helperText="لطفا نوع منو هتل را انتخاب نمایید."
                                margin="normal"
                            >
                                {foodTypes.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.title}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                label="توضیحات"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                value={this.state.hotelDescription}
                                onChange={this.handleChange('hotelDescription')}
                                margin="normal"
                            />
                        </div>
                        <div className="sub-form">
                            <TextField
                                id="startPrice"
                                label="یک تخته"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                helperText={`${numeral(this.state.singleBed).format('0,0')} تومان`}
                                value={this.state.singleBed}
                                onChange={this.handleChange('singleBed')}
                                margin="normal"
                            />
                            <TextField
                                id="startPrice"
                                label="دو تخته"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                helperText={`${numeral(this.state.multiBed).format('0,0')} تومان`}
                                value={this.state.multiBed}
                                onChange={this.handleChange('multiBed')}
                                margin="normal"
                            />
                            <TextField
                                id="startPrice"
                                label="کودک بدون تخت"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                helperText={`${numeral(this.state.babyWithBed).format('0,0')} تومان`}
                                value={this.state.babyWithBed}
                                onChange={this.handleChange('babyWithBed')}
                                margin="normal"
                            />
                            <TextField
                                id="startPrice"
                                label="کودک با تخت"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                helperText={`${numeral(this.state.babyNoBed).format('0,0')} تومان`}
                                value={this.state.babyNoBed}
                                onChange={this.handleChange('babyNoBed')}
                                margin="normal"
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="sub-form">
                        <TextField
                            id="startPrice"
                            label="مدارک لازم"
                            multiline
                            InputLabelProps={{className: 'input-labels'}}
                            InputProps={{className: 'font-applied'}}
                            value={this.state.documents}
                            onChange={this.handleChange('documents')}
                            margin="normal"
                        />
                        <TextField
                            id="startPrice"
                            label="خدمات آژانس"
                            multiline
                            InputLabelProps={{className: 'input-labels'}}
                            InputProps={{className: 'font-applied'}}
                            value={this.state.services}
                            onChange={this.handleChange('services')}
                            margin="normal"
                        />
                        <TextField
                            id="startPrice"
                            label="توضیحات تکمیلی"
                            multiline
                            InputLabelProps={{className: 'input-labels'}}
                            InputProps={{className: 'font-applied'}}
                            value={this.state.fullDescription}
                            onChange={this.handleChange('fullDescription')}
                            margin="normal"
                        />
                    </div>
                );
            default:
                return 'Unknown step';
        }
    };

    handleNext = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };


    render() {
        const steps = this.getSteps();
        return (
            <div className="right-dir">
                <Stepper activeStep={this.state.activeStep}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...props}>
                                <StepLabel classes={{label: 'font-applied'}} {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <p>
                                تور شما آماده انتشار در آفرتور می باشد.کافی است روی ذخیره کلیک نمایید.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p>{this.getStepContent(this.state.activeStep)}</p>
                            <div>
                                <Button
                                    disabled={this.state.activeStep === 0}
                                    onClick={this.handleBack}
                                    className="font-applied"
                                >
                                    مرحله قبل
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}
                                    className="font-applied"
                                >
                                    {this.state.activeStep === steps.length - 1 ? 'اتمام' : 'مرحله بعد'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default TourForm;