import React from 'react';
import Icon from '@material-ui/core/Icon';

const PlanStars = (props) => {
    let yellowRates = [];
    for (let i = 0; i < props.star; i++) {
        yellowRates.push(i);
    }
    return (
        <span>
        {yellowRates.length > 0 ? yellowRates.map((item) => <Icon key={item} className="goldStar">star</Icon>) :
            <Icon className="grayStar">star</Icon>}
        </span>
    );
};

export default PlanStars;