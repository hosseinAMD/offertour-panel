import React from 'react';
import Grid from '@material-ui/core/Grid';
import plans from '../data/plans';
import PlanItem from "./PlanItem";
import axios from 'axios';
import baseUrl from '../config/config';

class PlansList extends React.Component {
    state = {
        plans: '',
        isLoaded: false
    };

    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('user')).data.token;
        axios.get(`${baseUrl}/Agency/Plan`, {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => {
            this.setState(() => ({plans: res.data, isLoaded: true}))
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <Grid container spacing={24} className="my-container">
                {this.state.isLoaded ? this.state.plans.map((plan) => (<PlanItem key={plan.Id} plan={plan}/>)) : 'Loading'}
            </Grid>
        );
    }
}


export default PlansList;