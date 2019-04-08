import React from 'react';
import moment from 'moment-jalaali';

class NavbarTimeDate extends React.Component{
    state={
        now:''
    };

    render() {
        setInterval(() => {
            const now = moment();
            this.setState(() => ({now}));
        },1000);
        return (
            <div className="navbar-time-date">
                <span className="right-dir font-applied">{moment().format('jDD jMMMM jYYYY')}</span>
                <span>{moment().format('HH:mm:ss')}</span>
            </div>
        );
    }
}

export default NavbarTimeDate;