import React from 'react';

const CountBadge = (props) => {
    if(props.count > 0){
        return <span className="available-count">{props.count}</span>
    } else {
        return <span className="zero-count">اتمام</span>
    }
};

export default CountBadge;