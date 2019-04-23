import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = (props) => {
    if(props.color && props.color === 'secondary'){
        return(
            <div style={{textAlign:'center',marginTop:'20px'}}>
                <CircularProgress color="secondary"/>
            </div>
        );
    } else {
        return(
            <div style={{textAlign:'center',marginTop:'20px'}}>
                <CircularProgress/>
            </div>
        );
    }
};

export default Loading;