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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HeaderChip from "./HeaderChip";
import {headerBlue} from "../config/colors";
import axios from "axios";
import baseUrl from "../config/config";
import {token} from "../config/config";
import {connect} from "react-redux";
import {addTerminal} from "../actions/terminals";

class AddTerminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: 0,
            country: 0,
            province: 0,
            city: 0,
            open: false,
            error: ''
        };
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleClickOpen = () => {
        const terminals = this.props.terminals;
        const isExist = terminals.find((item) => this.state.name === item.Name);
        if (isExist === undefined) {
            const error = '';
            const data = {
                Data: {
                    Name: this.state.name,
                    CityID: this.state.city
                },
                Information: 'Terminal'
            };
            axios.post(`${baseUrl}/Admin/Information`, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            }).then(res => this.props.addTerminal({
                Id: res.data.Id,
                Name: this.state.name,
                CityID: this.state.city
            }));
            this.setState({open: true, error});
        } else {
            const error = `کاربر گرامی! ترمینال ${this.state.name} در لیست ترمینال ها موجود می باشد.`;
            this.setState({open: true, error})
        }
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <Paper elevation={1} className="right-dir setting-forms-paper">
                <HeaderChip label="افزودن ترمینال" icon="add_circle" color={headerBlue}/>
                <Divider/>
                <br/>
                <div className="add-form">
                    <div>
                        <FormControl className="field-margin">
                            <InputLabel htmlFor="name" className="font-applied login-label">نام ترمینال</InputLabel>
                            <Input
                                className="font-applied"
                                id="name"
                                onChange={this.handleChange('name')}
                                value={this.state.name}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Icon>directions_bus</Icon>
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
                            value={this.state.country}
                            onChange={this.handleChange('country')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Icon>flag</Icon></InputAdornment>,
                            }}
                        >
                            {this.props.countries.map(option => {
                                if (option.CategoryID === this.state.category) {
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
                            value={this.state.province}
                            onChange={this.handleChange('province')}
                            InputProps={{
                                startAdornment: <InputAdornment
                                    position="start"><Icon>golf_course</Icon></InputAdornment>,
                            }}
                        >
                            {this.props.provinces.map(option => {
                                if (option.CountryID === this.state.country) {
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
                            label="انتخاب شهر"
                            inputProps={{className: 'font-applied'}}
                            className="font-applied login-label field-margin"
                            value={this.state.city}
                            onChange={this.handleChange('city')}
                            InputProps={{
                                startAdornment: <InputAdornment
                                    position="start"><Icon>location_on</Icon></InputAdornment>,
                            }}
                        >
                            {this.props.cities.map(option => {
                                if (option.ProvinceID === this.state.province) {
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
                        <Button variant="contained" onClick={this.handleClickOpen} color="primary"
                                className="edit-button">افزودن</Button>
                    </div>
                </div>

                {/* Dialog box */}

                {this.state.error ?
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        className="right-dir font-applied"
                    >
                        <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon style={{color: 'red'}}
                                                                                             fontSize="large">close_circle</Icon>{"خطا در بروزرسانی اطلاعات"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {this.state.error}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                                بستن
                            </Button>
                        </DialogActions>
                    </Dialog>
                    :
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        className="right-dir font-applied"
                    >
                        <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon style={{color: 'green'}}
                                                                                             fontSize="large">check_circle</Icon>{"انجام شد!"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                ترمینال مورد نظر با موفقیت به لیست ترمینال های آفرتور اضافه شد!
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                                بستن
                            </Button>
                        </DialogActions>
                    </Dialog>
                }


            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    countries: state.countries,
    provinces: state.provinces,
    cities: state.cities,
    terminals: state.terminals
});


const mapDispatchToProps = (dispatch) => ({
    addTerminal: (terminal) => dispatch(addTerminal(terminal))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTerminal);