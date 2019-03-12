import React from 'react';
import categories from '../data/categories';
import flightCompanies from '../data/flightCompanies';
import countries from '../data/countries';
import cities from '../data/cities';
import tripTypes from "../data/tripTypes";
import flightClasses from "../data/flightClasses";
import airports from "../data/airports";
import busClasses from "../data/busClasses";
import foodTypes from "../data/foodTypes";
import busTerminals from "../data/busTerminals";
import busCompanies from "../data/busCompanies";


const ItemRenderer = (props) => {
    let item = '';
    switch (props.type) {
        case 'category':
            item = categories.find((item) => {
                if (item.id === props.id) {
                    return item.title;
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
            item = countries.find((item) => {
                if (item.id === props.id) {
                    return item.title;
                } else {
                    return undefined;
                }
            })
            ;
            break;
        case
        'city':
            item = cities.find((item) => {
                if (item.id === props.id) {
                    return item.title;
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
            item = airports.find((item) => {
                if (item.id === props.id) {
                    return item.title;
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
            item = busTerminals.find((item) => {
                if (item.id === props.id) {
                    return item.title;
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
        default:
            item = undefined;
    }
    return (
        <span>{item ? <span>{item.title}</span> : 'نامشخص'}</span>
    );
};

export default ItemRenderer;