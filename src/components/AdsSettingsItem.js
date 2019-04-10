import React from 'react';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import {NavLink} from "react-router-dom";

const AdsSettingsItem = (props) => (
    <div className="settings-fab-wrapper">
        <Fab variant="extended" component={NavLink} to={props.to} color="primary" className="ads-fab" classes={{label:'font-applied'}}>
            <Icon>{props.icon}</Icon>
            {props.label}
        </Fab>
    </div>
);

export default AdsSettingsItem;