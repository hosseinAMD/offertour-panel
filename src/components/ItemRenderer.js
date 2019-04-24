import React from 'react';
import numeral from 'numeral';
import flightCompanies from '../data/flightCompanies';
import tripTypes from "../data/tripTypes";
import flightClasses from "../data/flightClasses";
import busClasses from "../data/busClasses";
import foodTypes from "../data/foodTypes";
import busCompanies from "../data/busCompanies";
import tours from '../data/tours';
import plans from '../data/plans';
import {connect} from "react-redux";


const ItemRenderer = (props) => {
    let item = '';
    switch (props.type) {
        case 'category':
            item = props.categories.find((item) => {
                if (item.Id === props.id) {
                    return item.Name;
                } else {
                    return undefined;
                }
            });
            break;
        case
        'flightCompany':
            item = flightCompanies.find((item) => {
                if (item.id === props.id) {
                    return item.title;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'country':
            item = props.countries.find((item) => {
                if (item.Id === props.id) {
                    return item.Name;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'agency':
            item = props.agencies.find((item) => {
                if (item.Id === props.id) {
                    return item.Name;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'province':
            item = props.provinces.find((item) => {
                if (item.Id === props.id) {
                    return item.Name;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'city':
            item = props.cities.find((item) => {
                if (item.Id === props.id) {
                    return item.Name;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'tripType':
            item = tripTypes.find((item) => {
                if (item.id === props.id) {
                    return item.title;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'flightClass':
            item = flightClasses.find((item) => {
                if (item.id === props.id) {
                    return item.title;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'airport':
            item = props.airports.find((item) => {
                if (item.Id === props.id) {
                    return item.Name;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'busClass':
            item = busClasses.find((item) => {
                if (item.id === props.id) {
                    return item.title;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'foodType':
            item = foodTypes.find((item) => {
                if (item.id === props.id) {
                    return item.title;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'busTerminal':
            item = props.busTerminals.find((item) => {
                if (item.Id === props.id) {
                    return item.Name;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'busCompany':
            item = busCompanies.find((item) => {
                if (item.id === props.id) {
                    return item.title;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'tour':
            item = tours.find((item) => {
                if (item.id === props.id) {
                    return item.title;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'plan':
            item = plans.find((item) => {
                if (item.id === props.id) {
                    return item.title;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'planPrice':
            item = plans.find((item) => {
                if (item.id === props.id) {
                    return item.title;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        default:
            item = undefined;
    }
    return (
        <span>
        {props.type === 'planPrice' ?
            <span>{item ? <span>{numeral(item.price).format('0,0')} تومان</span> : 'نامشخص'}</span>
            :
            <span>{item ? <span>{item.Name}</span> : 'نامشخص'}</span>
        }
        </span>
    );
};

const mapStateToProps = (state) => (
    {
        categories: state.categories,
        countries: state.countries,
        provinces: state.provinces,
        cities: state.cities,
        airports: state.airports,
        terminals: state.terminals,
        agencies: state.agencies
    }
);

export default connect(mapStateToProps)(ItemRenderer);