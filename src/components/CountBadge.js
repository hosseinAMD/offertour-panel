import React from 'react';

const CountBadge = (props) => {
    if(props.count > 0){
        return <span className="bold">{props.count}</span>
    } else {
        return <span className="zero-count">اتمام</span>
    }
};

export default CountBadge;