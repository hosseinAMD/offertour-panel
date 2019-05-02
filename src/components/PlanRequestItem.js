import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ItemRenderer from "./ItemRenderer";
import PaymentStatus from "./PaymentStatus";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from "@material-ui/core/Icon";
import Loading from "./Loading";
import {statusCodes} from "../config/errors";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import baseUrl, {token} from "../config/config";

class PlanRequestItem extends React.Component {
    state = {
        openLoading: false,
        openSuccess: false,
        openError: false,
        error: ''
    };

    handleClose = () => {
        this.setState({openSuccess: false, opanLoading: false, openError: false});
    };

    handleAccept = (status, id) => {
        this.setState(() => ({openLoading: true}));
        axios.post(baseUrl + '/Admin/AgencyPlan', JSON.stringify({
            PlanID: id,
            Status: !status
        }), {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => this.setState(() => ({openSuccess: true, openLoading: false})))
            .catch(res => this.setState(() => ({
                openLoading: false,
                error: statusCodes.FA[res.response.data.code].message,
                openError: true
            })));
    };

    render() {
        const props = this.props;
        const status = props.request.Status;
        const id = props.request.Id;
        return (
            <TableRow>
                <TableCell align="center">{props.index + 1}</TableCell>
                <TableCell align="center"><ItemRenderer id={props.request.AgencyID} type="agency"/></TableCell>
                <TableCell align="center"><ItemRenderer id={props.request.PlanID} type="plan"/></TableCell>
                <TableCell align="center"><PaymentStatus status={props.request.Status}/></TableCell>
                <TableCell align="center"><Button onClick={() => this.handleAccept(status, id)}
                                                  variant="contained"
                                                  color={props.request.Status ? 'secondary' : 'primary'}
                                                  className="font-applied">{props.request.Status ? 'غیرفعال' : 'فعال'}</Button></TableCell>
                <Dialog
                    open={this.state.openSuccess}
                    onClose={this.handleClose}
                    className="right-dir font-applied"
                >
                    <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon style={{color: 'green'}}
                                                                                         fontSize="large">check_circle</Icon>{"انجام شد!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            تغییر وضعیت تور با موفقیت انجام شد!
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
                        <Loading/>
                    </DialogContent>
                </Dialog>
            </TableRow>
        );
    }
}


export default PlanRequestItem;