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
import ItemRenderer from "./ItemRenderer";
import {connect} from "react-redux";
import axios from 'axios';
import baseUrl, {token} from "../config/config";
import Loading from "./Loading";
import {statusCodes} from "../config/errors";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from '@material-ui/core/FormControlLabel';

class TourForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            id: '',
            title: '',
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
            tripType: 1,
            startCategory: '',
            startCountry: '',
            startProvince: '',
            startCity: '',
            destinationCategory: '',
            destinationCountry: '',
            endProvince: '',
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
            hotelCategory: '',
            hotelCountry: '',
            hotelProvince: '',
            hotelCity: '',
            hotelMenu: '',
            hotelBreakFast: false,
            hotelLunch: false,
            hotelDinner: false,
            hotelDescription: '',
            singleBed: '',
            multiBed: '',
            babyWithBed: '',
            babyNoBed: '',
            documents: '',
            services: '',
            fullDescription: '',
            tag: '',
            image: '',
            trips: [],
            hotels: [],
            tags: [],
            openError: false,
            openLoading: false,
            openSuccess: false,
            error: '',
            regexError: '',
        }
    };


    handleBreakFast = () => {
        const hotelBreakFast = this.state.hotelBreakFast;
        this.setState(() => ({hotelBreakFast: !hotelBreakFast}))
    };

    handleLunch = () => {
        const hotelLunch = this.state.hotelLunch;
        this.setState(() => ({hotelLunch: !hotelLunch}))
    };

    handleDinner = () => {
        const hotelDinner = this.state.hotelDinner;
        this.setState(() => ({hotelDinner: !hotelDinner}))
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


    handleAddTrip = () => {
        this.setState(() => ({openLoading: true}));
        let tripFields = {};
        if (this.state.tripType === 1) {
            tripFields = {
                TourID: this.state.id,
                StepTypeID: this.state.tripType,
                Title: this.state.tripTitle,
                OriginCityID: this.state.startCity,
                DestinationCityID: this.state.destinationCity,
                StepDateTime: this.state.tripDay,
                StepDuration: this.state.tripTime,
                OriginAirportID: this.state.startAirport,
                DestinationAirportID: this.state.destinationAirport,
                FlightAgency: this.state.tripFlightCompany,
                ClassID: this.state.tripType === 1 ? this.state.flightClass : this.state.busClass
            };
        } else {
            tripFields = {
                TourID: this.state.id,
                StepTypeID: this.state.tripType,
                Title: this.state.tripTitle,
                OriginCityID: this.state.startCity,
                DestinationCityID: this.state.destinationCity,
                StepDateTime: this.state.tripDay,
                StepDuration: this.state.tripTime,
                BusAgency: this.state.tripBusCompany,
                OriginTerminalID: this.state.startTerminal,
                DestinationTerminalID: this.state.destinationTerminal,
                ClassID: this.state.tripType === 1 ? this.state.flightClass : this.state.busClass
            };
        }

        axios.post(baseUrl + '/Agency/TourStep', JSON.stringify(tripFields), {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => {
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
            this.setState(() => ({trips, openSuccess: true, openLoading: false}));
        }).catch(res => {
            this.setState(() => ({
                openError: true,
                openLoading: false,
                error: statusCodes.FA[res.response.data.code].message
            }));
        });
    };

    handleAddHotel = () => {
        this.setState(() => ({openLoading: true}));
        let hotelFields = {
            TourID: this.state.id,
            HotelName: this.state.hotelName,
            HotelStar: this.state.hotelStarts,
            HotelCityID: this.state.hotelCity,
            BreakFastService: this.state.BreakFastService,
            LunchService: this.state.LunchService,
            DinnerService: this.state.DinnerService,
            PriceOF4BedStead: '#',
            PriceOF3BedStead: '#',
            PriceOF2BedStead: this.state.multiBed,
            PriceOF1BedStead: this.state.singleBed,
            PriceOFChildWithBedStead: this.state.babyWithBed,
            PriceOfChildWithOutBedStead: this.state.babyNoBed,
            Description: this.state.hotelDescription,
        };
        axios.post(baseUrl + '/Agency/Hotel', JSON.stringify(hotelFields), {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => {
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
            this.setState(() => ({hotels, openSuccess: true, openLoading: false}));
        }).catch(res => {
            this.setState(() => ({
                openError: true,
                openLoading: false,
                error: statusCodes.FA[res.response.data.code].message
            }));
        });
    };


    getSteps = () => {
        return ['اطلاعات کلی', 'جزئیات تور', 'زمانبندی تور', 'لیست پکیج ها'];
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
                        </div>
                    </div>
                );
            case 2:
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
                                        id="tripFlightCompany"
                                        label="آژانس هواپیمایی"
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        value={this.state.tripFlightCompany}
                                        onChange={this.handleChange('tripFlightCompany')}
                                        margin="normal"
                                        autoFocus={true}
                                    />
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
                                        id="startCategory"
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
                                        {this.props.categories.map(option => (
                                            <MenuItem key={option.Id} value={option.Id}>
                                                {option.Name}
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
                                        {this.props.countries.map((option) => {
                                            if (option.CategoryID === this.state.startCategory) {
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
                                        label="استان مبدا"
                                        value={this.state.startProvince}
                                        onChange={this.handleChange('startProvince')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا استان مبدا را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {this.props.provinces.map((option) => {
                                            if (option.CountryID === this.state.startCountry) {
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
                                        {this.props.cities.map((option) => {
                                            if (option.ProvinceID === this.state.startProvince) {
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
                                        {this.props.airports.map((option) => {
                                            if (option.CityID === this.state.startCity) {
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
                                        {this.props.categories.map(option => (
                                            <MenuItem key={option.Id} value={option.Id}>
                                                {option.Name}
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
                                        {this.props.countries.map((option) => {
                                            if (option.CategoryID === this.state.destinationCategory) {
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
                                        label="استان مقصد"
                                        value={this.state.endProvince}
                                        onChange={this.handleChange('endProvince')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا استان مقصد را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {this.props.provinces.map((option) => {
                                            if (option.CountryID === this.state.destinationCountry) {
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
                                        {this.props.cities.map((option) => {
                                            if (option.ProvinceID === this.state.endProvince) {
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
                                        {this.props.airports.map((option) => {
                                            if (option.CityID === this.state.destinationCity) {
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
                                        id="tripBusCompany"
                                        label="تعاونی اتوبوسرانی"
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        value={this.state.tripBusCompany}
                                        onChange={this.handleChange('tripBusCompany')}
                                        margin="normal"
                                        autoFocus={true}
                                    />
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
                                        {this.props.categories.map(option => (
                                            <MenuItem key={option.Id} value={option.Id}>
                                                {option.Name}
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
                                        {this.props.countries.map((option) => {
                                            if (option.CategoryID === this.state.startCategory) {
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
                                        label="استان مبدا"
                                        value={this.state.startProvince}
                                        onChange={this.handleChange('startProvince')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا استان مبدا را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {this.props.provinces.map((option) => {
                                            if (option.CountryID === this.state.startCountry) {
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
                                        {this.props.cities.map((option) => {
                                            if (option.ProvinceID === this.state.startProvince) {
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
                                        {this.props.terminals.map((option) => {
                                            if (option.CityID === this.state.startCity) {
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
                                        {this.props.categories.map(option => (
                                            <MenuItem key={option.Id} value={option.Id}>
                                                {option.Name}
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
                                        {this.props.countries.map((option) => {
                                            if (option.CategoryID === this.state.destinationCategory) {
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
                                        label="استان مقصد"
                                        value={this.state.endProvince}
                                        onChange={this.handleChange('endProvince')}
                                        InputLabelProps={{className: 'input-labels'}}
                                        InputProps={{className: 'font-applied'}}
                                        FormHelperTextProps={{className: 'font-applied'}}
                                        SelectProps={{
                                            MenuProps: {
                                                className: 'font-applied',
                                            }
                                        }}
                                        helperText="لطفا استان مقصد را انتخاب نمایید."
                                        margin="normal"
                                    >
                                        {this.props.provinces.map((option) => {
                                            if (option.CountryID === this.state.destinationCountry) {
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
                                        {this.props.cities.map((option) => {
                                            if (option.ProvinceID === this.state.endProvince) {
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
                                        {this.props.terminals.map((option) => {
                                            if (option.CityID === this.state.destinationCity) {
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
                            </div>
                        }
                    </div>
                );
            case 3:
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
                                onChange={this.handleNumbersChange('hotelStarts')}
                                margin="normal"
                            />
                            {this.state.regexError ?
                                <p className="font-applied regex-error">{this.state.regexError}</p> : ''}
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.hotelBreakFast}
                                        onChange={this.handleBreakFast}
                                        value={this.state.hotelBreakFast}
                                        color="primary"
                                    />
                                }
                                label="صبحانه"
                                classes={{label: 'font-applied'}}
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.hotelLunch}
                                        onChange={this.handleLunch}
                                        value={this.state.hotelLunch}
                                        color="primary"
                                    />
                                }
                                label="ناهار"
                                classes={{label: 'font-applied'}}
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.hotelDinner}
                                        onChange={this.handleDinner}
                                        value={this.state.hotelDinner}
                                        color="primary"
                                    />
                                }
                                label="شام"
                                classes={{label: 'font-applied'}}
                            />
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
                                id="hotelCategory"
                                select
                                label="دسته بندی"
                                value={this.state.hotelCategory}
                                onChange={this.handleChange('hotelCategory')}
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                SelectProps={{
                                    MenuProps: {
                                        className: 'font-applied',
                                    },
                                }}
                                helperText="لطفا دسته بندی هتل را انتخاب نمایید."
                                margin="normal"
                            >
                                {this.props.categories.map(option => (
                                    <MenuItem key={option.Id} value={option.Id}>
                                        {option.Name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="hotelCountry"
                                select
                                label="کشور"
                                value={this.state.hotelCountry}
                                onChange={this.handleChange('hotelCountry')}
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                SelectProps={{
                                    MenuProps: {
                                        className: 'font-applied',
                                    },
                                }}
                                helperText="لطفا کشور هتل را انتخاب نمایید."
                                margin="normal"
                            >
                                {this.props.countries.map((option) => {
                                    if (option.CategoryID === this.state.hotelCategory) {
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
                                id="hotelProvince"
                                select
                                label="استان"
                                value={this.state.hotelProvince}
                                onChange={this.handleChange('hotelProvince')}
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                SelectProps={{
                                    MenuProps: {
                                        className: 'font-applied',
                                    }
                                }}
                                helperText="لطفا استان هتل را انتخاب نمایید."
                                margin="normal"
                            >
                                {this.props.provinces.map((option) => {
                                    if (option.CountryID === this.state.hotelCountry) {
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
                                id="hotelCity"
                                select
                                label="شهر"
                                value={this.state.hotelCity}
                                onChange={this.handleChange('hotelCity')}
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                SelectProps={{
                                    MenuProps: {
                                        className: 'font-applied',
                                    }
                                }}
                                helperText="لطفا شهر هتل را انتخاب نمایید."
                                margin="normal"
                            >
                                {this.props.cities.map((option) => {
                                    if (option.ProvinceID === this.state.hotelProvince) {
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
                                id="startPrice"
                                label="یک تخته"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                helperText={`${numeral(this.state.singleBed).format('0,0')} تومان`}
                                value={this.state.singleBed}
                                onChange={this.handleNumbersChange('singleBed')}
                                margin="normal"
                            />
                            {this.state.regexError ?
                                <p className="font-applied regex-error">{this.state.regexError}</p> : ''}
                            <TextField
                                id="startPrice"
                                label="دو تخته"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                helperText={`${numeral(this.state.multiBed).format('0,0')} تومان`}
                                value={this.state.multiBed}
                                onChange={this.handleNumbersChange('multiBed')}
                                margin="normal"
                            />
                            {this.state.regexError ?
                                <p className="font-applied regex-error">{this.state.regexError}</p> : ''}
                            <TextField
                                id="startPrice"
                                label="کودک بدون تخت"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                helperText={`${numeral(this.state.babyWithBed).format('0,0')} تومان`}
                                value={this.state.babyWithBed}
                                onChange={this.handleNumbersChange('babyWithBed')}
                                margin="normal"
                            />
                            {this.state.regexError ?
                                <p className="font-applied regex-error">{this.state.regexError}</p> : ''}
                            <TextField
                                id="startPrice"
                                label="کودک با تخت"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                FormHelperTextProps={{className: 'font-applied'}}
                                helperText={`${numeral(this.state.babyNoBed).format('0,0')} تومان`}
                                value={this.state.babyNoBed}
                                onChange={this.handleNumbersChange('babyNoBed')}
                                margin="normal"
                            />
                            {this.state.regexError ?
                                <p className="font-applied regex-error">{this.state.regexError}</p> : ''}
                        </div>
                        <Fab onClick={this.handleAddHotel} className="add-fab" color="primary" aria-label="Add">
                            <Icon>add</Icon>
                        </Fab>
                    </div>
                );
            case 1:
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
                        {this.state.activeStep === 2 ?
                            <Fab onClick={this.handleAddTrip} className="add-fab" color="primary" aria-label="AddTrip">
                                <Icon>add</Icon>
                            </Fab> : ''}
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
                        <Stepper activeStep={this.state.activeStep}>
                            {steps.map((label, index) => {
                                const props = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...props}>
                                        <StepLabel
                                            classes={{label: 'font-applied step-label'}} {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        <div>
                            {this.state.activeStep === steps.length ? (
                                <div>
                                    <br/><br/>
                                    <p>تور شما جهت بررسی به واحد پشتیبانی آفرتور ارسال شد.پس از تایید پشتیبانی تور شما
                                        نمایش داده می شود.</p>
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
                                            disabled={this.state.activeStep === 0 || this.state.activeStep === 2}
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
                {this.state.activeStep === 2 ?
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
                                    <TripItem trip={trip} type="form"/>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                    :
                    ''}
                {this.state.activeStep === 3 ?
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
                                    <HotelItem hotel={hotel} type="form"/>
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

const mapStateToProps = (state) => ({
    categories: state.categories,
    countries: state.countries,
    provinces: state.provinces,
    cities: state.cities,
    airports: state.airports,
    terminals: state.terminals
});

export default connect(mapStateToProps)(TourForm);