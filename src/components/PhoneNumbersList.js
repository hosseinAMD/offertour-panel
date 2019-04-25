import React from 'react';
import {connect} from "react-redux";
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import HeaderChip from './HeaderChip';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PhoneNumberItem from "./PhoneNumberItem";

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