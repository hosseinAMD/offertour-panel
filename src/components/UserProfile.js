import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import moment from 'moment-jalaali';
import HeaderChip from "./HeaderChip";
import {NavLink} from "react-router-dom";
import {loggedInUser} from "../config/config";
import {role} from "../config/config";
import enmoment from "moment";

class UserProfile extends React.Component {
    render() {
        const BirthDate = enmoment.unix(Number(loggedInUser.BirthDate)).format('YYYY/MM/DD');
        const RegistrationDate = enmoment.unix(Number(loggedInUser.RegistrationDate)).format('YYYY/MM/DD');
        return (
            <Paper elevation={1} className="right-dir agency-paper">
                <HeaderChip label='اطلاعات کاربری' color='#0288d1' icon='account_circle'/>
                <Divider/>
                <br/>
                <img className="user-image" alt={loggedInUser.UserName}
                     src={`data:image/jpeg;base64,${loggedInUser.Image}`}/>
                <p><span className="bold">نام: </span>{loggedInUser.Name}</p>
                <p><span className="bold">نام خانوادگی: </span>{loggedInUser.FamilyName}</p>
                <p><span className="bold">نام کاربری: </span>{loggedInUser.UserName}</p>
                <p><span
                    className="bold">تاریخ تولد: </span>{moment(BirthDate).format('jDD jMMMM jYYYY')}
                </p>
                <p><span
                    className="bold">تاریخ ثبت نام: </span>{moment(RegistrationDate).format('jDD jMMMM jYYYY')}
                </p>
                {role === 'support' ? '' :
                    <Button component={NavLink} to="/edit-agency-user" variant="contained" color="primary"
                            className="edit-button">ویرایش</Button>}
            </Paper>
        );
    }
}

export default UserProfile;