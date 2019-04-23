import React from 'react';
import Paper from '@material-ui/core/Paper';
import HeaderChip from './HeaderChip';
import Divider from "@material-ui/core/Divider";
import axios from 'axios';
import baseUrl from '../config/config';
import Loading from "./Loading";

class AgencyRatesAndComments extends React.Component {
    state = {
        rates: '',
        isLoaded: false
    };

    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('user')).data.token;
        axios.get(`${baseUrl}/Admin/RateAndComment`,{
            headers:{
                'Content-Type':'application/json',
                'token':token
            }
        }).then(res => {
            this.setState(() => ({rates:res.data.AgencyScoreAndComments,isLoaded: true}))
        })
    }

    render() {
        return (
            <Paper elevation={1} className="right-dir agency-paper">
                <HeaderChip label='امتیازات و نظرات آژانس ها' color='#0288d1' icon='star'/>
                <Divider/>
                <br/>
                {this.state.isLoaded ? 'fetch done' : <Loading color="primary"/>}
                {this.state.rates.length > 0 ? 'exist' : <p className="font-applied">در حال حاضر موردی ثبت نشده است</p>}
            </Paper>
        );
    }
}

export default AgencyRatesAndComments;