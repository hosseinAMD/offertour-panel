import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import AddCity from "./AddCity";
import FilterCity from "./FilterCity";
import CitiesList from "./CitiesList";

class CitiesSetting extends React.Component {
    state = {
        name: '',
        category: '',
        country: '',
        province: ''
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        return (
            <Grid container spacing={24} className="my-container">
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Slide direction="right" in={true} mountOnEnter>
                        <FilterCity name={this.state.name} category={this.state.category}
                                    country={this.state.country} province={this.state.province}
                                    handleChange={this.handleChange}/>
                    </Slide>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Slide direction="left" in={true} mountOnEnter>
                        <AddCity/>
                    </Slide>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Slide direction="up" in={true} mountOnEnter>
                        <CitiesList name={this.state.name} category={this.state.category}
                                    country={this.state.country} province={this.state.province}/>
                    </Slide>
                </Grid>
            </Grid>
        );
    }
}


export default CitiesSetting;