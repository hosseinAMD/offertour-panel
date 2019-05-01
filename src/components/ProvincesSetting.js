import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import AddProvince from "./AddProvince";
import FilterProvince from "./FilterProvince";
import ProvincesList from "./ProvincesList";


class ProvincesSetting extends React.Component {
    state = {
        name: '',
        category: '',
        country: ''
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        return (
            <Grid container spacing={24} className="my-container">
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Slide direction="right" in={true} mountOnEnter>
                        <FilterProvince name={this.state.name} category={this.state.category}
                                        country={this.state.country} handleChange={this.handleChange}/>
                    </Slide>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Slide direction="left" in={true} mountOnEnter>
                        <AddProvince/>
                    </Slide>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Slide direction="up" in={true} mountOnEnter>
                        <ProvincesList name={this.state.name}
                                       country={this.state.country}/>
                    </Slide>
                </Grid>
            </Grid>
        );
    }
}


export default ProvincesSetting;