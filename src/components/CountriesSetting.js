import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import FilterCountry from "./FilterCountry";
import AddCountry from "./AddCountry";
import CountriesList from "./CountriesList";

class CountriesSetting extends React.Component {
    state = {
        name: '',
        category: ''
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };


    render() {
        return (
            <Grid container spacing={24} className="my-container">
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Slide direction="right" in={true} mountOnEnter>
                        <FilterCountry name={this.state.name} category={this.state.category}
                                       handleChange={this.handleChange}/>
                    </Slide>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Slide direction="left" in={true} mountOnEnter>
                        <AddCountry/>
                    </Slide>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Slide direction="up" in={true} mountOnEnter>
                        <CountriesList name={this.state.name} category={this.state.category}/>
                    </Slide>
                </Grid>
            </Grid>
        );
    }
}

export default CountriesSetting;