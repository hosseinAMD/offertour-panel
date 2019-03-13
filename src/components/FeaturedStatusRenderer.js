import React from 'react';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';

const FeaturedStatusRenderer = (props) => {
    if (props.featured === 1) {
        return (
            <Chip color="primary" label="ویژه" classes={{label: 'bold font-applied',icon:'chip-icon'}} className="featured-tour" icon={<Icon>grade</Icon>}/>
        );
    } else {
        return (
            <Chip color="secondary" label="عادی" classes={{label: 'bold font-applied'}} className="normal-tour"/>
        );
    }
};

export default FeaturedStatusRenderer;