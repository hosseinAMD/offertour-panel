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
import Grid from '@material-ui/core/Grid';
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
import Paper from "@material-ui/core/Paper";
import busTerminals from "../data/busTerminals";
import busCompanies from "../data/busCompanies";
import TripItem from "./TripItem";
import HotelItem from "./HotelItem";
import ItemRenderer from "./ItemRenderer";


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
            startCategory: '',
            startCountry: '',
            startCity: '',
            destinationCategory: '',
            destinationCountry: '',
            destinationCity: '',
            startAirport: '',
            destinationAirport: '',
            tripTime: '',
            tripTitle: '',
            tripDay: '',
            tripFlightCompany: '',
            tripBusCompany: '',
            flightClass: '',
            startTerminal: '',
            destinationTerminal: '',
            busClass: '',
            hotelName: '',
            hotelStarts: '',
            hotelMenu: '',
            hotelDescription: '',
            singleBed: '',
            multiBed: '',
            babyWithBed: '',
            babyNoBed: '',
            documents: '',
            services: '',
            fullDescription: '',
            image: '',
            trips: [],
            hotels: []

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

    imageChange = (e) => {
        const image = e.target.files[0];
        this.setState(() => ({image}));
    };

    handleAddTrip = () => {
        const trips = this.state.trips;
        trips.push({
            tripType: this.state.tripType,
            startCategory: this.state.startCategory,
            startCountry: this.state.startCountry,
            startCity: this.state.startCity,
            destinationCategory: this.state.destinationCategory,
            destinationCountry: this.state.destinationCountry,
            destinationCity: this.state.destinationCity,
            startAirport: this.state.startAirport,
            destinationAirport: this.state.destinationAirport,
            tripTime: this.state.tripTime,
            tripTitle: this.state.tripTitle,
            tripDay: this.state.tripDay,
            tripFlightCompany: this.state.tripFlightCompany,
            tripBusCompany: this.state.tripBusCompany,
            flightClass: this.state.flightClass,
            startTerminal: this.state.startTerminal,
            destinationTerminal: this.state.destinationTerminal,
            busClass: this.state.busClass,
        });
        this.setState(() => ({trips}));
    };

    handleAddHotel = () => {
        const hotels = this.state.hotels;
        hotels.push({
            hotelName: this.state.hotelName,
            hotelStarts: this.state.hotelStarts,
            hotelMenu: this.state.hotelMenu,
            hotelDescription: this.state.hotelDescription,
            singleBed: this.state.singleBed,
            multiBed: this.state.multiBed,
            babyWithBed: this.state.babyWithBed,
            babyNoBed: this.state.babyNoBed,
        });
        this.setState(() => ({hotels}));
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
                                {countries.map((option) => {
                                    if (option.category === this.state.category) {
                                        return (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
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
                                {cities.map((option) => {
                                    if (option.country === this.state.country) {
                                        return (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
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
                                        label="عنوان سفر"
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        value={this.state.tripTitle}
                                        onChange={this.handleChange('tripTitle')}
                                        margin="normal"
                                    />
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
                                <div className="sub-form">
                                    <TextField
                                        id="startCatgory"
                                        select
                                        label="مبدا"
                                        value={this.state.startCategory}
                                        onChange={this.handleChange('startCategory')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            },
                                        }}
                                        helperText="لطفا مبدا سفر را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {categories.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="startCountry"
                                        select
                                        label="کشور مبدا"
                                        value={this.state.startCountry}
                                        onChange={this.handleChange('startCountry')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            },
                                        }}
                                        helperText="لطفا کشور مبدا سفر را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {countries.map((option) => {
                                            if (option.category === this.state.startCategory) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        {cities.map((option) => {
                                            if (option.country === this.state.startCountry) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        {airports.map((option) => {
                                            if (option.city === this.state.startCity) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        id="destinationCategory"
                                        select
                                        label="مقصد"
                                        value={this.state.destinationCategory}
                                        onChange={this.handleChange('destinationCategory')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            },
                                        }}
                                        helperText="لطفا مقصد سفر را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {categories.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="destinationCountry"
                                        select
                                        label="کشور مقصد"
                                        value={this.state.destinationCountry}
                                        onChange={this.handleChange('destinationCountry')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            },
                                        }}
                                        helperText="لطفا کشور مقصد سفر را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {countries.map((option) => {
                                            if (option.category === this.state.destinationCategory) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        {cities.map((option) => {
                                            if (option.country === this.state.destinationCountry) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        {airports.map((option) => {
                                            if (option.city === this.state.destinationCity) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                <Fab onClick={this.handleAddTrip} className="add-fab" color="primary" aria-label="Add">
                                    <Icon>add</Icon>
                                </Fab>
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
                                        label="پایانه اتوبوسرانی"
                                        value={this.state.tripBusCompany}
                                        onChange={this.handleChange('tripBusCompany')}
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
                                        {busCompanies.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        label="عنوان سفر"
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        value={this.state.tripTitle}
                                        onChange={this.handleChange('tripTitle')}
                                        margin="normal"
                                    />
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
                                <div className="sub-form">
                                    <TextField
                                        id="startCatgory"
                                        select
                                        label="مبدا"
                                        value={this.state.startCategory}
                                        onChange={this.handleChange('startCategory')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            },
                                        }}
                                        helperText="لطفا مبدا سفر را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {categories.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="startCountry"
                                        select
                                        label="کشور مبدا"
                                        value={this.state.startCountry}
                                        onChange={this.handleChange('startCountry')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            },
                                        }}
                                        helperText="لطفا کشور مبدا سفر را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {countries.map((option) => {
                                            if (option.category === this.state.startCategory) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        {cities.map((option) => {
                                            if (option.country === this.state.startCountry) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        label="ترمینال مبدا"
                                        value={this.state.startTerminal}
                                        onChange={this.handleChange('startTerminal')}
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
                                        {busTerminals.map((option) => {
                                            if (option.city === this.state.startCity) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        id="destinationCategory"
                                        select
                                        label="مقصد"
                                        value={this.state.destinationCategory}
                                        onChange={this.handleChange('destinationCategory')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            },
                                        }}
                                        helperText="لطفا مقصد سفر را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {categories.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="destinationCountry"
                                        select
                                        label="کشور مقصد"
                                        value={this.state.destinationCountry}
                                        onChange={this.handleChange('destinationCountry')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            },
                                        }}
                                        helperText="لطفا کشور مقصد سفر را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {countries.map((option) => {
                                            if (option.category === this.state.destinationCategory) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        {cities.map((option) => {
                                            if (option.country === this.state.destinationCountry) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        label="ترمینال مقصد"
                                        value={this.state.destinationTerminal}
                                        onChange={this.handleChange('destinationTerminal')}
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
                                        {busTerminals.map((option) => {
                                            if (option.city === this.state.destinationCity) {
                                                return (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.title}
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
                                        label="کلاس اتوبوس"
                                        value={this.state.busClass}
                                        onChange={this.handleChange('busClass')}
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
                                <Fab onClick={this.handleAddTrip} className="add-fab" color="primary" aria-label="Add">
                                    <Icon>add</Icon>
                                </Fab>
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
                        <Fab onClick={this.handleAddHotel} className="add-fab" color="primary" aria-label="Add">
                            <Icon>add</Icon>
                        </Fab>
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
                        <FormControl>
                            <label style={{textAlign: 'right', margin: '5px'}} htmlFor="tour-image">تصویر تور</label>
                            <input id="tour-image" type="file" onChange={this.imageChange}/>
                        </FormControl>
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
            <div>
                <Paper elevation={1} className="tour-form-paper">
                    <div className="right-dir">
                        <Stepper activeStep={this.state.activeStep}>
                            {steps.map((label, index) => {
                                const props = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...props}>
                                        <StepLabel classes={{label: 'font-applied step-label'}} {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        <div>
                            {this.state.activeStep === steps.length ? (
                                <div>
                                    <br/><br/>
                                    <p>
                                        تور شما آماده انتشار در آفرتور می باشد.لطفا پس از بررسی موارد به طور کامل روی ذخیره کلیک نمایید.
                                    </p>
                                    <Grid container spacing={24} className="my-container">
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <p><span className="bold">عنوان تور: </span>{this.state.title}</p>
                                            <p><span
                                                className="bold">شروع قیمت: </span>{numeral(this.state.startPrice).format('0,0')}
                                            </p>
                                            <p><span className="bold">مدت تور: </span>{this.state.duration}</p>
                                            <p><span className="bold">دسته بندی: </span><ItemRenderer
                                                id={this.state.category} type="category"/></p>
                                            <p><span className="bold">کشور: </span><ItemRenderer id={this.state.country}
                                                                                                 type="country"/></p>
                                            <p><span className="bold">شهر: </span><ItemRenderer id={this.state.city}
                                                                                                type="city"/></p>
                                            <p><span className="bold">هواپیمایی: </span><ItemRenderer
                                                id={this.state.flightCompany} type="flightCompany"/></p>
                                            <p><span
                                                className="bold">تاریخ شروع: </span>{moment(this.state.startDate).format('jYYYY/jMM/jDD')}
                                            </p>
                                            <p><span
                                                className="bold">تاریخ پایان: </span>{moment(this.state.endDate).format('jYYYY/jMM/jDD')}
                                            </p>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <p><span className="bold">مدارک لازم: </span>{this.state.documents}</p>
                                            <p><span className="bold">خدمات آژانس: </span>{this.state.services}</p>
                                            <p><span className="bold">توضیحات: </span>{this.state.fullDescription}</p>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Table className="font-applied">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="center">نوع</TableCell>
                                                        <TableCell align="center">عنوان</TableCell>
                                                        <TableCell align="center">مبدا</TableCell>
                                                        <TableCell align="center">مقصد</TableCell>
                                                        <TableCell align="center">ساعت</TableCell>
                                                        <TableCell align="center">مدت</TableCell>
                                                        <TableCell align="center">جزئیات</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {this.state.trips.map((trip) => (
                                                        <TripItem trip={trip}/>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Table className="font-applied">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="center">نام هتل</TableCell>
                                                        <TableCell align="center">منو غذا</TableCell>
                                                        <TableCell align="center">دوتخته</TableCell>
                                                        <TableCell align="center">یک تخته</TableCell>
                                                        <TableCell align="center">کودک با تخت</TableCell>
                                                        <TableCell align="center">کودک بدون تخت</TableCell>
                                                        <TableCell align="center">جزئیات</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {this.state.hotels.map((hotel) => (
                                                        <HotelItem hotel={hotel}/>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </Grid>
                                    </Grid>
                                </div>
                            ) : (
                                <div>
                                    <div className="font-applied">{this.getStepContent(this.state.activeStep)}</div>
                                    <br/>
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
                </Paper>
                <br/>
                {this.state.activeStep === 1 ?
                    <Paper elevation={1} className="tour-trips-table right-dir">
                        <Table className="font-applied">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">نوع</TableCell>
                                    <TableCell align="center">عنوان</TableCell>
                                    <TableCell align="center">مبدا</TableCell>
                                    <TableCell align="center">مقصد</TableCell>
                                    <TableCell align="center">ساعت</TableCell>
                                    <TableCell align="center">مدت</TableCell>
                                    <TableCell align="center">جزئیات</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.trips.map((trip) => (
                                    <TripItem trip={trip}/>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                    :
                    ''}
                {this.state.activeStep === 2 ?
                    <Paper elevation={1} className="tour-trips-table right-dir">
                        <Table className="font-applied">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">نام هتل</TableCell>
                                    <TableCell align="center">منو غذا</TableCell>
                                    <TableCell align="center">دوتخته</TableCell>
                                    <TableCell align="center">یک تخته</TableCell>
                                    <TableCell align="center">کودک با تخت</TableCell>
                                    <TableCell align="center">کودک بدون تخت</TableCell>
                                    <TableCell align="center">جزئیات</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.hotels.map((hotel) => (
                                    <HotelItem hotel={hotel}/>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                    :
                    ''}
            </div>
        );
    }
}

export default TourForm;