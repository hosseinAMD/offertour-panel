import React from 'react';
import {NavLink} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const NavItems = () => (
    <div className="right-dir">
        <List>
            <ListItem button component={NavLink} to="/">
                <ListItemIcon><Icon>home</Icon></ListItemIcon>
                <ListItemText classes={{primary:'font-applied'}} primary="داشبورد"/>
            </ListItem>
            <ListItem button component={NavLink} to="/profile">
                <ListItemIcon><Icon>account_circle</Icon></ListItemIcon>
                <ListItemText classes={{primary:'font-applied'}} primary="اطلاعات کاربری و آژانس"/>
            </ListItem>
        </List>
    </div>
);

export default NavItems;