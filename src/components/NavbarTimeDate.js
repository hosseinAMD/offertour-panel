import React from 'react';
import moment from 'moment-jalaali';


const NavbarTimeDate = () => (
    <div className="navbar-time-date">
        <span className="right-dir font-applied">{moment().format('jDD jMMMM jYYYY')}</span>
        <span className="right-dir font-applied">{moment().format('DD MMMM YYYY')}</span>
    </div>
);


export default NavbarTimeDate;