import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import PhoneNumberItem from "./PhoneNumberItem";
import HeaderChip from './HeaderChip';

const PhoneNumbersList = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Slide direction="up" in={true} mountOnEnter>
                <Paper elevation={1} className="right-dir agency-paper">
                    <HeaderChip label="مدیریت شماره تلفن ها" color="#0288d1" icon="account_balance"/>
                    <Divider/>
                    <br/>
                    <PhoneNumberItem/>
                </Paper>
            </Slide>
        </Grid>
    </Grid>
);


export default PhoneNumbersList;