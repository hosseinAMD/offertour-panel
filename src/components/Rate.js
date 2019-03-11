import React from 'react';
import Icon from '@material-ui/core/Icon';

class Rate extends React.Component {

    render() {
        let yellowRates = [];
        let grayRates = [];
        for (let i = 0; i < this.props.rate; i++) {
            yellowRates.push(i);
        }
        for (let j = 0; j < 5 - this.props.rate; j++) {
            grayRates.push(j);
        }
        return (
            <span>
                {yellowRates.map((item) => <Icon key={item} className="goldStar">star</Icon>)}
                {grayRates.map((item) => <Icon key={item} className="grayStar">star</Icon>)}
            </span>
        );
    }
}

export default Rate;