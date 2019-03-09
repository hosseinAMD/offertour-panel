import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import user from '../data/user';
import Button from "@material-ui/core/Button";

class UserProfile extends React.Component{
    render(){
        return(
            <Paper elevation={1} className="right-dir agency-paper">
                <h3 className="font-applied">اطلاعات کاربر</h3>
                <Divider/>
                <br/>
                <img className="user-image" alt={user.username} src={user.image} />
                <p><span className="bold">نام: </span>{user.name}</p>
                <p><span className="bold">نام خانوادگی: </span>{user.familyName}</p>
                <p><span className="bold">نام کاربری: </span>{user.username}</p>
                <p><span className="bold">تلفن همراه: </span>{user.phone}</p>
                <Button variant="contained" color="primary" className="edit-button">ویرایش</Button>
            </Paper>
        );
    }
}

export default UserProfile;