import React from 'react';
import Icon from '@material-ui/core/Icon';

class Rate extends React.Component {

    render() {
        let yellowRates = [];
        let grayRates = [];
        for (let i = 0; i < this.props.rate; i++) {
            yellowRates.push('got');
        }
        for (let j = 0; j < 5 - this.props.rate; j++) {
            grayRates.push('failed');
        }
        return (
            <span>
                {yellowRates.map(() => <Icon className="goldStar">star</Icon>)}
                {grayRates.map(() => <Icon className="grayStar">star</Icon>)}
            </span>
        );
    }
}

export default Rate;