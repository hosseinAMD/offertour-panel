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
import categories from '../data/categories';
import countries from '../data/countries';

class FilterProvince extends React.Component {
    state = {
        name: '',
        category: categories.length + 1,
        countries: countries.length + 1
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };


    render() {
        return (
            <div>
                <Paper elevation={1} className="right-dir setting-forms-paper">
                    <HeaderChip label="جستجو در استان ها" icon="search" color={headerBlue}/>
                    <Divider/>
                    <br/>
                    <div className="add-form">
                        <div>
                            <FormControl className="field-margin">
                                <InputLabel htmlFor="name" className="font-applied login-label">نام استان</InputLabel>
                                <Input
                                    className="font-applied"
                                    id="name"
                                    onChange={this.handleChange('name')}
                                    value={this.state.name}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Icon>gulf</Icon>
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
                                value={this.state.category}
                                onChange={this.handleChange('category')}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Icon>layers</Icon></InputAdornment>,
                                }}
                            >
                                <MenuItem className="font-applied" value={categories.length + 1}>همه موارد</MenuItem>
                                {categories.map(option => (
                                    <MenuItem className="font-applied" key={option.id} value={option.id}>
                                        {option.title}
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
                                value={this.state.country}
                                onChange={this.handleChange('country')}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Icon>flag</Icon></InputAdornment>,
                                }}
                            >
                                <MenuItem className="font-applied" value={categories.length + 1}>همه موارد</MenuItem>
                                {countries.map(option => {
                                    if (option.category === this.state.category) {
                                        return (
                                            <MenuItem className="font-applied" key={option.id} value={option.id}>
                                                {option.title}
                                            </MenuItem>
                                        );
                                    } else {
                                        return ''
                                    }
                                })}
                            </TextField>
                        </div>
                        <div style={{marginTop: '15px'}}>
                            <Button variant="contained" onClick={this.handleClickOpen} color="primary"
                                    className="edit-button">اعمال فیلتر</Button>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default FilterProvince;