import React from 'react';
import {NavLink} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import user from '../data/user';
import {role,loggedInUser} from "../config/config";

const NavItems = () => {
    if(role==='support'){
        return(
            <div className="right-dir">
                <List>
                    <div className="nav-user-info">
                        <img className="user-image" src={user.image} alt="user"/>
                        <h5 className="font-applied">{loggedInUser.Name} {loggedInUser.FamilyName}</h5>
                    </div>
                    <ListItem button component={NavLink} to="/">
                        <ListItemIcon><Icon>home</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="داشبورد"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/profile">
                        <ListItemIcon><Icon>account_circle</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="اطلاعات کاربری"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/all-users">
                        <ListItemIcon><Icon>supervised_user_circle</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="لیست کاربران و آژانس ها"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/plan">
                        <ListItemIcon><Icon>attach_money</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="اطلاعات پلن"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/tours-list">
                        <ListItemIcon><Icon>list_alt</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="لیست تورها"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/add-article">
                        <ListItemIcon><Icon>edit</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="ارسال سفرنامه"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/settings">
                        <ListItemIcon><Icon>settings</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="تنظیمات"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/rates-comments">
                        <ListItemIcon><Icon>star</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="نظرات و امتیازات"/>
                    </ListItem>
                </List>
            </div>
        );
    } else {
        return(
            <div className="right-dir">
                <List>
                    <div className="nav-user-info">
                        <img className="user-image" src={user.image} alt="user"/>
                        <h5 className="font-applied">{loggedInUser.Name} {loggedInUser.FamilyName}</h5>
                    </div>
                    <ListItem button component={NavLink} to="/">
                        <ListItemIcon><Icon>home</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="داشبورد"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/profile">
                        <ListItemIcon><Icon>account_circle</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="اطلاعات کاربری و آژانس"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/agency-users">
                        <ListItemIcon><Icon>supervised_user_circle</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="لیست کاربران آژانس"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/plan">
                        <ListItemIcon><Icon>attach_money</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="اطلاعات پلن"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/add-tour">
                        <ListItemIcon><Icon>airplanemode_active</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="افزودن تور"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/tours-list">
                        <ListItemIcon><Icon>list_alt</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="لیست تورها"/>
                    </ListItem>
                    <ListItem button component={NavLink} to="/add-article">
                        <ListItemIcon><Icon>edit</Icon></ListItemIcon>
                        <ListItemText classes={{primary: 'font-applied right-txt'}} primary="ارسال سفرنامه"/>
                    </ListItem>
                </List>
            </div>
        );
    }
};

export default NavItems;