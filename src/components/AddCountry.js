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
import axios from 'axios';
import baseUrl from '../config/config';
import {connect} from "react-redux";
import {token} from "../config/config";
import {addCountry} from "../actions/countries";

class AddCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: 0,
            open: false,
            error: ''
        };
    }


    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleClickOpen = () => {
        const countries = this.props.countries;
        const isExist = countries.find((item) => this.state.name === item.Name);
        if (isExist === undefined) {
            const error = '';
            const data = {
                Data: {
                    Name: this.state.name,
                    CategoryID: this.state.category
                },
                Information: 'Country'
            };
            axios.post(`${baseUrl}/Admin/Information`, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            }).then(res=>this.props.addCountry({
                Id:res.data.Id,
                Name:this.state.name,
                CategoryID:this.state.category
            }));
            this.setState({open: true, error});
        } else {
            const error = `کاربر گرامی! کشور ${this.state.name} در لیست کشورها موجود می باشد.`;
            this.setState({open: true, error})
        }
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <Paper elevation={1} className="right-dir setting-forms-paper">
                <HeaderChip label="افزودن کشور" icon="add_circle" color={headerBlue}/>
                <Divider/>
                <br/>
                <div className="add-form">
                    <div>
                        <FormControl className="field-margin">
                            <InputLabel htmlFor="name" className="font-applied login-label">نام کشور</InputLabel>
                            <Input
                                className="font-applied"
                                id="name"
                                onChange={this.handleChange('name')}
                                value={this.state.name}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Icon>flag</Icon>
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
                                کشور مورد نظر با موفقیت به لیست کشورهای آفرتور اضافه شد!
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
    countries: state.countries
});

const mapDispatchToProps = (dispatch) => ({
    addCountry: (country) => dispatch(addCountry(country))
});


export default connect(mapStateToProps,mapDispatchToProps)(AddCountry);