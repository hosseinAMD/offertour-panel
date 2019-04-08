import React from 'react';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';

const PaymentStatus = (props) => {
    if(props.status){
        return(
            <Chip
                color="secondary"
                style={{backgroundColor:'#2e7d32'}}
                icon={<Icon className="payment-icon">done_all</Icon>}
                label='تکمیل پرداخت'
                className="right-dir"
                classes={{label: 'font-applied payment-label'}}
            />
        );
    } else {
        return (
            <Chip
                color="secondary"
                style={{backgroundColor:'#ef6c00'}}
                icon={<Icon className="payment-icon">donut_large</Icon>}
                label='در انتظار پرداخت'
                className="right-dir"
                classes={{label: 'font-applied payment-label'}}
            />
        );
    }
};

export default PaymentStatus;