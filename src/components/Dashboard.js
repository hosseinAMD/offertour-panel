import React from 'react';
import Grid from '@material-ui/core/Grid';
import Comments from "./Comments";
import ToursVisitsReport from "./ToursVisitsReport";
import AgencyProfileVisitsReport from "./AgencyProfileVisitsReport";
import AgencyCategoriesReport from "./AgencyCategoriesReport";
import Slide from '@material-ui/core/Slide';
import {connect} from "react-redux";


const Dashboard = (props) => (
    <Grid container spacing={24} className="my-container">
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Slide direction="down" in={true} mountOnEnter>
                <ToursVisitsReport/>
            </Slide>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Slide direction="left" in={true} mountOnEnter>
                <AgencyProfileVisitsReport/>
            </Slide>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Slide direction="right" in={true} mountOnEnter>
                <Comments/>
            </Slide>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Slide direction="up" in={true} mountOnEnter>
                <AgencyCategoriesReport/>
            </Slide>
        </Grid>
    </Grid>
);

const mapStateToProps = (state) => ({
    categories: state.categories
});

export default connect(mapStateToProps)(Dashboard);