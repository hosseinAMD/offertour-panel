import React from 'react';
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import HeaderChip from "./HeaderChip";
import {headerBlue} from "../config/colors";
import {connect} from "react-redux";

class FilterCity extends React.Component {
    render() {
        return (
            <div>
                <Paper elevation={1} className="right-dir setting-forms-paper">
                    <HeaderChip label="جستجو در شهر ها" icon="search" color={headerBlue}/>
                    <Divider/>
                    <br/>
                    <div className="add-form">
                        <div>
                            <FormControl className="field-margin">
                                <InputLabel htmlFor="name" className="font-applied login-label">نام شهر</InputLabel>
                                <Input
                                    className="font-applied"
                                    id="name"
                                    onChange={this.props.handleChange('name')}
                                    value={this.props.name}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Icon>location_on</Icon>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                select
                                InputLabelProps={{className: 'font-applied login-label'}}
                                label="انتخاب دسته بندی"
                                inputProps={{className: 'font-applied'}}
                                className="font-applied login-label field-margin"
                                value={this.props.category}
                                onChange={this.props.handleChange('category')}
                                InputProps={{
                                    startAdornment: <InputAdornment
                                        position="start"><Icon>layers</Icon></InputAdornment>,
                                }}
                            >
                                <MenuItem className="font-applied" value=''>همه موارد</MenuItem>
                                {this.props.categories.map(option => (
                                    <MenuItem className="font-applied" key={option.Id} value={option.Id}>
                                        {option.Name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                select
                                InputLabelProps={{className: 'font-applied login-label'}}
                                label="انتخاب کشور"
                                inputProps={{className: 'font-applied'}}
                                className="font-applied login-label field-margin"
                                value={this.props.country}
                                onChange={this.props.handleChange('country')}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Icon>flag</Icon></InputAdornment>,
                                }}
                            >
                                <MenuItem className="font-applied" value=''>همه موارد</MenuItem>
                                {this.props.countries.map(option => {
                                    if (option.CategoryID === this.props.category) {
                                        return (
                                            <MenuItem className="font-applied" key={option.Id} value={option.Id}>
                                                {option.Name}
                                            </MenuItem>
                                        );
                                    } else {
                                        return ''
                                    }
                                })}
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                select
                                InputLabelProps={{className: 'font-applied login-label'}}
                                label="انتخاب استان"
                                inputProps={{className: 'font-applied'}}
                                className="font-applied login-label field-margin"
                                value={this.props.province}
                                onChange={this.props.handleChange('province')}
                                InputProps={{
                                    startAdornment: <InputAdornment
                                        position="start"><Icon>golf_course</Icon></InputAdornment>,
                                }}
                            >
                                <MenuItem className="font-applied" value=''>همه موارد</MenuItem>
                                {this.props.provinces.map(option => {
                                    if (option.CountryID === this.props.country) {
                                        return (
                                            <MenuItem className="font-applied" key={option.Id} value={option.Id}>
                                                {option.Name}
                                            </MenuItem>
                                        );
                                    } else {
                                        return ''
                                    }
                                })}
                            </TextField>
                        </div>
                        <div style={{marginTop: '15px'}}>
                            <Button variant="contained" color="primary"
                                    className="edit-button">اعمال فیلتر</Button>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

const mappropsToProps = (props) => ({
    categories: props.categories,
    countries: props.countries,
    provinces: props.provinces
});

export default connect(mappropsToProps)(FilterCity);