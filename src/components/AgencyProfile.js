import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import agency from '../data/agency';
import Rate from "./Rate";
import moment from 'moment-jalaali';
import Button from "@material-ui/core/Button";
import HeaderChip from "./HeaderChip";

class AgencyProfile extends React.Component{
    render() {
        return(
            <Paper elevation={1} className="right-dir agency-paper">
                <HeaderChip label="اطلاعات آژانس" color="#0288d1" icon="account_balance"/>
                <Divider/>
                <br/>
                <img className="agency-logo" alt={agency.name} src={agency.logo} />
                <p><span className="bold">نام آژانس: </span>{agency.name}</p>
                <p><span className="bold">شهر: </span>{agency.city}</p>
                <p><span className="bold">آدرس: </span>{agency.address}</p>
                <p><span className="bold">تلفن ثابت: </span>{agency.phone}</p>
                <p><span className="bold">تلفن همراه: </span>{agency.mobile}</p>
                <p><span className="bold">حوزه فعالیت: </span>{agency.activityArea}</p>
                <p><span className="bold">تاریخ تاسیس: </span>{moment().subtract(6,'years').format('jYYYY/jMM/jDD')}</p>
                <p><Rate rate={agency.rate}/></p>
                <Button variant="contained" color="primary" className="edit-button">ویرایش</Button>
            </Paper>
        );
    }
}


export default AgencyProfile;