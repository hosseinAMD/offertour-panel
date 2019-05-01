import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import AddTerminal from "./AddTerminal";
import FilterTerminal from "./FilterTerminal";
import TerminalsList from "./TerminalsList";


class TerminalsSetting extends React.Component {
    state = {
        name: '',
        category: '',
        country: '',
        province: '',
        city: ''
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        return (
            <Grid container spacing={24} className="my-container">
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Slide direction="right" in={true} mountOnEnter>
                        <FilterTerminal name={this.state.name} category={this.state.category}
                                        country={this.state.country} province={this.state.province}
                                        city={this.state.city} handleChange={this.handleChange}/>
                    </Slide>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Slide direction="left" in={true} mountOnEnter>
                        <AddTerminal/>
                    </Slide>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Slide direction="up" in={true} mountOnEnter>
                        <TerminalsList name={this.state.name} category={this.state.category}
                                       country={this.state.country} province={this.state.province}
                                       city={this.state.city}/>
                    </Slide>
                </Grid>
            </Grid>
        );
    }
}

export default TerminalsSetting;