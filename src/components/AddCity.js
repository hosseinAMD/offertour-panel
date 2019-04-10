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
import categories from '../data/categories';
import countries from '../data/countries';
import provinces from '../data/provinces';
import cities from '../data/cities';

class AddCity extends React.Component {
    state = {
        name: '',
        category: 0,
        country: 0,
        province: 0,
        open: false,
        error: ''
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleClickOpen = () => {
        const isExist = cities.find((item) => this.state.name === item.title);
        if (isExist === undefined) {
            const error = '';
            this.setState({open: true, error});
        } else {
            const error = `کاربر گرامی! شهر ${this.state.name} در لیست شهر ها موجود می باشد.`;
            this.setState({open: true, error})
        }
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <Paper elevation={1} className="right-dir setting-forms-paper">
                <HeaderChip label="افزودن شهر" icon="add_circle" color={headerBlue}/>
                <Divider/>
                <br/>
                <div className="add-form">
                    <div>
                        <FormControl className="field-margin">
                            <InputLabel htmlFor="name" className="font-applied login-label">نام شهر</InputLabel>
                            <Input
                                className="font-applied"
                                id="name"
                                onChange={this.handleChange('name')}
                                value={this.state.name}
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
                            value={this.state.category}
                            onChange={this.handleChange('category')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Icon>layers</Icon></InputAdornment>,
                            }}
                        >
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
                                startAdornment: <InputAdornment position="start"><Icon>golf_course</Icon></InputAdornment>,
                            }}
                        >
                            {provinces.map(option => {
                                if (option.country === this.state.country) {
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
                                شهر مورد نظر با موفقیت به لیست شهر های آفرتور اضافه شد!
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

export default AddCity;