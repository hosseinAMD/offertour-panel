import React from 'react';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import {NavLink} from "react-router-dom";

const DataSettingsItem = (props) => (
    <div className="settings-fab-wrapper">
    <Fab variant="extended" component={NavLink} to={props.to} color="primary" className="settings-fab" classes={{label:'font-applied'}}>
        <Icon>{props.icon}</Icon>
        {props.label}
    </Fab>
    </div>
);

export default DataSettingsItem;