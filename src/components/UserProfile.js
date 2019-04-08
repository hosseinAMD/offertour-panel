import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import user from '../data/user';
import Button from "@material-ui/core/Button";
import moment from 'moment-jalaali';
import HeaderChip from "./HeaderChip";

class UserProfile extends React.Component{
    render(){
        return(
            <Paper elevation={1} className="right-dir agency-paper">
                <HeaderChip label='اطلاعات کاربری' color='#00838f' icon='account_circle'/>
                <Divider/>
                <br/>
                <img className="user-image" alt={user.username} src={user.image} />
                <p><span className="bold">نام: </span>{user.name}</p>
                <p><span className="bold">نام خانوادگی: </span>{user.familyName}</p>
                <p><span className="bold">نام کاربری: </span>{user.username}</p>
                <p><span className="bold">تلفن همراه: </span>{user.phone}</p>
                <p><span className="bold">تاریخ تولد: </span>{moment().subtract(25,'years').format('jDD jMMMM jYYYY')}</p>
                <p><span className="bold">تاریخ ثبت نام: </span>{moment().subtract(3,'months').format('jDD jMMMM jYYYY')}</p>
                <Button variant="contained" color="primary" className="edit-button">ویرایش</Button>
            </Paper>
        );
    }
}

export default UserProfile;