import React from 'react';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';

const StatusRenderer = (props) => {
    if (props.status === 1 || props.status === true) {
        return (
            <Fab size="small" color="secondary" aria-label="enable" className="enable-status">
                <Icon>done</Icon>
            </Fab>
        );
    } else {
        return (
            <Fab size="small" color="secondary" aria-label="disable" className="disable-status">
                <Icon>close</Icon>
            </Fab>
        );
    }
};

export default StatusRenderer;