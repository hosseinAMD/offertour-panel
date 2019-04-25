import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import agency from '../data/agency';
import Rate from "./Rate";
import moment from 'moment-jalaali';
import Button from "@material-ui/core/Button";
import HeaderChip from "./HeaderChip";
import {loggedInAgency} from "../config/config";
import ItemRenderer from "./ItemRenderer";
import {NavLink} from "react-router-dom";

class AgencyProfile extends React.Component{
    render() {
        return(
            <Paper elevation={1} className="right-dir agency-paper">
                <HeaderChip label="اطلاعات آژانس" color="#0288d1" icon="account_balance"/>
                <Divider/>
                <br/>
                <img className="agency-logo" alt={loggedInAgency.Name} src={agency.logo} />
                <p><span className="bold">نام آژانس: </span>{loggedInAgency.Name}</p>
                <p><span className="bold">شهر: </span><ItemRenderer id={loggedInAgency.CityID} type="city"/></p>
                <p><span className="bold">آدرس: </span>{loggedInAgency.Address}</p>
                <p><span className="bold">مالک: </span>{loggedInAgency.OwnerName} {loggedInAgency.OwnerFamilyName}</p>
                <p><span className="bold">تلفن ثابت: </span>{agency.phone}</p>
                <p><span className="bold">تلفن همراه: </span>{agency.mobile}</p>
                <p><span className="bold">تاریخ تاسیس: </span>{moment.unix(loggedInAgency.EstabilishedDate).format('jDD jMMMM jYYYY')}</p>
                <p><Rate rate={agency.rate}/></p>
                <Button component={NavLink} to="/phone-numbers" variant="contained" color="primary" className="edit-button">مدیریت تلفن ها</Button>
            </Paper>
        );
    }
}


export default AgencyProfile;