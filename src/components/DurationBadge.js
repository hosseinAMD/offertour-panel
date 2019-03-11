import React from 'react';

const DurationBadge = (props) => {
    if (props.duration > 10) {
        return <span className="green-duration">{`${props.duration} روز`}</span>
    } else {
        return <span className="red-duration">{`${props.duration} روز`}</span>
    }
};

export default DurationBadge;