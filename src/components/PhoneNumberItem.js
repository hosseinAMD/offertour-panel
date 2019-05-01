import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {agencyPhoneNumbers} from "../config/config";
import axios from 'axios';
import baseUrl, {token} from "../config/config";
import Icon from "@material-ui/core/Icon";
import Loading from "./Loading";
import {statusCodes} from "../config/errors";

class PhoneNumberItem extends React.Component {
    state = {
        PhoneNumber1: agencyPhoneNumbers && agencyPhoneNumbers.PhoneNumber1 ? agencyPhoneNumbers.PhoneNumber1 : '',
        PhoneNumber2: agencyPhoneNumbers && agencyPhoneNumbers.PhoneNumber2 ? agencyPhoneNumbers.PhoneNumber2 : '',
        PhoneNumber3: agencyPhoneNumbers && agencyPhoneNumbers.PhoneNumber3 ? agencyPhoneNumbers.PhoneNumber3 : '',
        PhoneNumber4: agencyPhoneNumbers && agencyPhoneNumbers.PhoneNumber4 ? agencyPhoneNumbers.PhoneNumber4 : '',
        PhoneNumber5: agencyPhoneNumbers && agencyPhoneNumbers.PhoneNumber5 ? agencyPhoneNumbers.PhoneNumber5 : '',
        openEdit: false,
        openAdd: false,
        openLoading: false,
        openError: false,
        error: ''
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleClose = () => {
        this.setState({openEdit: false, openAdd: false, openLoading: false, openError: false});
    };

    handlePhoneNumber = () => {
        const PhoneNumber1 = this.state.PhoneNumber1;
        const PhoneNumber2 = this.state.PhoneNumber2;
        const PhoneNumber3 = this.state.PhoneNumber3;
        const PhoneNumber4 = this.state.PhoneNumber4;
        const PhoneNumber5 = this.state.PhoneNumber5;
        if (agencyPhoneNumbers.PhoneNumber1) {
            this.setState(() => ({openLoading: true}));
            axios.put(baseUrl + '/Agency/AgencyPhoneNumber', JSON.stringify({
                PhoneNumber1,
                PhoneNumber2,
                PhoneNumber3,
                PhoneNumber4,
                PhoneNumber5
            }), {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            }).then(res => this.setState(() => ({openEdit: true, openLoading: false})))
                .catch(res => this.setState(() => ({
                    openError: true,
                    openLoading: false,
                    error: statusCodes.FA[res.response.data.code].message,
                })));
        } else {
            this.setState(() => ({openLoading: true}));
            axios.post(baseUrl + '/Agency/AgencyPhoneNumber', JSON.stringify({
                PhoneNumber1,
                PhoneNumber2,
                PhoneNumber3,
                PhoneNumber4,
                PhoneNumber5
            }), {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            }).then(res => this.setState(() => ({opanAdd: true, openLoading: false})))
                .catch(res => this.setState(() => ({
                    openError: true,
                    openLoading: false,
                    error: statusCodes.FA[res.response.data.code].message,
                })));
        }
    };

    render() {
        return (
            <Table className="font-applied">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="center">شماره</TableCell>
                        <TableCell align="center">عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">1</TableCell>
                        <TableCell align="center"><input value={this.state.PhoneNumber1}
                                                         onChange={this.handleChange('PhoneNumber1')}/></TableCell>
                        <TableCell align="center"><Button onClick={this.handlePhoneNumber} variant="contained"
                                                          color="primary"
                                                          className="edit-button">ذخیره</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">2</TableCell>
                        <TableCell align="center"><input value={this.state.PhoneNumber2}
                                                         onChange={this.handleChange('PhoneNumber2')}/></TableCell>
                        <TableCell align="center"><Button onClick={this.handlePhoneNumber} variant="contained"
                                                          color="primary"
                                                          className="edit-button">ذخیره</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">3</TableCell>
                        <TableCell align="center"><input value={this.state.PhoneNumber3}
                                                         onChange={this.handleChange('PhoneNumber3')}/></TableCell>
                        <TableCell align="center"><Button onClick={this.handlePhoneNumber} variant="contained"
                                                          color="primary"
                                                          className="edit-button">ذخیره</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">4</TableCell>
                        <TableCell align="center"><input value={this.state.PhoneNumber4}
                                                         onChange={this.handleChange('PhoneNumber4')}/></TableCell>
                        <TableCell align="center"><Button onClick={this.handlePhoneNumber} variant="contained"
                                                          color="primary"
                                                          className="edit-button">ذخیره</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">5</TableCell>
                        <TableCell align="center"><input value={this.state.PhoneNumber5}
                                                         onChange={this.handleChange('PhoneNumber5')}/></TableCell>
                        <TableCell align="center"><Button onClick={this.handlePhoneNumber} variant="contained"
                                                          color="primary"
                                                          className="edit-button">ذخیره</Button></TableCell>
                    </TableRow>
                </TableBody>
                <Dialog
                    open={this.state.openAdd}
                    onClose={this.handleClose}
                    className="right-dir font-applied"
                >
                    <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon style={{color: 'green'}}
                                                                                         fontSize="large">check_circle</Icon>{"انجام شد!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            شماره مورد نظر افزوده شد!در نظر داشته باشید تغییرات پس از یکبار ورود و خروج اعمال خواهند شد.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                            بستن
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.openEdit}
                    onClose={this.handleClose}
                    className="right-dir font-applied"
                >
                    <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon style={{color: 'green'}}
                                                                                         fontSize="large">check_circle</Icon>{"انجام شد!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            شماره مورد نظر تغییر کرد!در نظر داشته باشید تغییرات پس از یکبار ورود و خروج اعمال خواهند شد.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                            بستن
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.openError}
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
                <Dialog
                    open={this.state.openLoading}
                    onClose={this.handleClose}
                    className="right-dir font-applied"
                >
                    <DialogTitle id="alert-dialog-title" className="font-applied">{"در حال انجام عملیات!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Loading/>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </Table>
        );
    }
}

export default PhoneNumberItem;