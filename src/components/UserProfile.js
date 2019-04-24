import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import moment from 'moment-jalaali';
import HeaderChip from "./HeaderChip";
import {NavLink} from "react-router-dom";

class UserProfile extends React.Component {
    render() {
        const loggedInUser = JSON.parse(localStorage.getItem('user')).data.information;
        console.log(loggedInUser.RegistrationDate);
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
                <p><span className="bold">تلفن همراه: </span>{loggedInUser.PhoneNumber}</p>
                <p><span
                    className="bold">تاریخ تولد: </span>{moment.unix(loggedInUser.BirthDate).format('jDD jMMMM jYYYY')}
                </p>
                <p><span
                    className="bold">تاریخ ثبت نام: </span>{moment(parseInt(loggedInUser.RegistrationDate)).format('jDD jMMMM jYYYY')}
                </p>
                <Button component={NavLink} to="/edit-agency-user" variant="contained" color="primary" className="edit-button">ویرایش</Button>
            </Paper>
        );
    }
}

export default UserProfile;