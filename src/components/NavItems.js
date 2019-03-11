import React from 'react';
import {NavLink} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import user from '../data/user';

const NavItems = () => (
    <div className="right-dir">
        <List>
            <div className="nav-user-info">
                <img className="user-image" src={user.image} alt="user"/>
                <h5 className="font-applied">{user.name} {user.familyName}</h5>
            </div>
            <ListItem button component={NavLink} to="/">
                <ListItemIcon><Icon>home</Icon></ListItemIcon>
                <ListItemText classes={{primary: 'font-applied right-txt'}} primary="داشبورد"/>
            </ListItem>
            <ListItem button component={NavLink} to="/profile">
                <ListItemIcon><Icon>account_circle</Icon></ListItemIcon>
                <ListItemText classes={{primary: 'font-applied right-txt'}} primary="اطلاعات کاربری و آژانس"/>
            </ListItem>
            <ListItem button component={NavLink} to="/plan">
                <ListItemIcon><Icon>attach_money</Icon></ListItemIcon>
                <ListItemText classes={{primary: 'font-applied right-txt'}} primary="اطلاعات پلن"/>
            </ListItem>
        </List>
    </div>
);

export default NavItems;