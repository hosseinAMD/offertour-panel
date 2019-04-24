import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';
import HeaderChip from './HeaderChip';
import {NavLink} from "react-router-dom";
import AgencyList from "./AgencyList";
import SupportUsersList from "./SupportUsersList";

class AllUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        return (
            <Grid container spacing={24} className="my-container">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Slide direction="up" in={true} mountOnEnter>
                        <div>
                            <Paper elevation={1} className="right-dir agency-paper">
                                <div>
                                <HeaderChip label='مدیریت کاربران' color='#0288d1' icon='account_circle'/>
                                </div>
                                <Divider/>
                                <br/>
                                <Tabs
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    variant="fullWidth"
                                    indicatorColor="primary"
                                    textColor="primary"
                                    className="right-dir"
                                >
                                    <Tab classes={{label: 'font-applied'}} icon={<Icon>account_balance</Icon>}
                                         label="لیست آژانس ها"/>
                                    <Tab classes={{label: 'font-applied'}} icon={<Icon>supervisor_account</Icon>}
                                         label="لیست مدیران آژانس ها"/>
                                    <Tab classes={{label: 'font-applied'}} icon={<Icon>contact_support</Icon>}
                                         label="لیست پشتیبان ها"/>
                                </Tabs>
                                <br/>
                                {this.state.value === 0 ? <AgencyList/> : ''}
                                {this.state.value === 2 ? <SupportUsersList/> : ''}
                                {/*<Button component={NavLink} to="/add-support-admin" variant="contained"*/}
                                        {/*color="primary" className="edit-button">افزودن پشتیبان</Button>*/}
                                {/*<Button component={NavLink} to="/add-agency" variant="contained"*/}

                                        {/*color="primary" className="edit-button">افزودن آژانس</Button>*/}
                            </Paper>
                        </div>
                    </Slide>
                </Grid>
            </Grid>
        );
    }
}

export default AllUsers;