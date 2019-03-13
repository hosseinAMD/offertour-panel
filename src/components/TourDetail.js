import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import tours from '../data/tours';

class TourDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const tour = tours.find((tour) => tour.id === parseInt(this.props.match.params.id));
        return (
            <Grid container spacing={24} className="my-container">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Paper square>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            className="right-dir"
                        >
                            <Tab classes={{label: 'font-applied'}} icon={<Icon>info</Icon>} label="اطلاعات کلی"/>
                            <Tab classes={{label: 'font-applied'}} icon={<Icon>flight</Icon>} label="زمان بندی تور"/>
                            <Tab classes={{label: 'font-applied'}} icon={<Icon>home</Icon>} label="لیست پکیج ها"/>
                            <Tab classes={{label: 'font-applied'}} icon={<Icon>help</Icon>} label="جزئیات تور"/>
                        </Tabs>
                        {this.state.value === 0 ? <p>koli</p> : ''}
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}


export default TourDetail;