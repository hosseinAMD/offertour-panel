import React from 'react';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';

const HeaderChip = (props) => (
    <div className="paper-header">
        <Chip
            color="secondary"
            style={{backgroundColor:props.color}}
            icon={<Icon className="paper-header-icon">{props.icon}</Icon>}
            label={props.label}
            className="right-dir"
            classes={{label: 'font-applied peper-header-label'}}
        />
    </div>
);

export default HeaderChip;