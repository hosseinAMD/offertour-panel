import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import ItemRenderer from "./ItemRenderer";
import StatusRenderer from "./StatusRenderer";
import axios from 'axios';
import baseUrl, {token} from "../config/config";
import Icon from "@material-ui/core/Icon";


class AgencyItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleAgencyStatus = (AgencyID, Status) => {
        const status = Status !== 1;
        axios.put(baseUrl + '/Admin/Agency', JSON.stringify({
            AgencyID,
            Status: status
        }), {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => this.setState(() => ({open: true})));
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const props = this.props;
        return (
            <TableRow>
                <TableCell align="center">{props.index}</TableCell>
                <TableCell align="center">{props.agency.Name}</TableCell>
                <TableCell align="center">{props.agency.OwnerName} {props.agency.OwnerFamilyName}</TableCell>
                <TableCell align="center"><ItemRenderer id={props.agency.Id} type="city"/></TableCell>
                <TableCell onClick={() => this.handleAgencyStatus(props.agency.Id, props.agency.EnableStatus)}
                           align="center"><StatusRenderer
                    status={props.agency.EnableStatus}/></TableCell>
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
                            وضعیت آژآنس مورد نظر تغییر کرد!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                            بستن
                        </Button>
                    </DialogActions>
                </Dialog>
            </TableRow>
        );
    }
}


export default AgencyItem;