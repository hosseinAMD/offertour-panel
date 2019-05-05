import React from 'react';
import Paper from '@material-ui/core/Paper';
import HeaderChip from './HeaderChip';
import Divider from "@material-ui/core/Divider";
import axios from 'axios';
import baseUrl, {token} from '../config/config';
import {statusCodes} from "../config/errors";
import Loading from "./Loading";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PostCommentItem from "./PostCommentItem";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from "@material-ui/core/Icon";
import Button from '@material-ui/core/Button';

class BlogPostComments extends React.Component {
    state = {
        comments: '',
        isLoaded: false,
        openLoading: false,
        openSuccess: false,
        openError: false,
        error: ''
    };

    handleClose = () => {
        this.setState({openSuccess: false, openLoading: false, openError: false});
    };

    handleAccept = (status, id) => {
        this.setState(() => ({openLoading: true}));
        axios.put(baseUrl + '/Admin/Blog', JSON.stringify({
            BlogID: id,
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

    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('user')).data.token;
        axios.get(`${baseUrl}/Admin/RateAndComment`, {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => {
            this.setState(() => ({comments: res.data.BlogPostComments, isLoaded: true}))
        })
    }

    render() {
        if (this.state.isLoaded) {
            if (this.state.comments.length > 0) {
                return (
                    <Paper elevation={1} className="right-dir agency-paper">
                        <HeaderChip label='آخرین نظرات مقالات' color='#0288d1' icon='comment'/>
                        <Divider/>
                        <br/>
                        <Table className="font-applied">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">#</TableCell>
                                    <TableCell align="center">متن</TableCell>
                                    <TableCell align="center">تاریخ</TableCell>
                                    <TableCell align="center">امتیاز</TableCell>
                                    <TableCell align="center">وضعیت</TableCell>
                                    <TableCell align="center">عملیات</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.comments.map((comment, index) => <PostCommentItem
                                    handleAccept={this.handleAccept} comment={comment}
                                    index={index}/>)}
                            </TableBody>
                        </Table>
                        <Dialog
                            open={this.state.openSuccess}
                            onClose={this.handleClose}
                            className="right-dir font-applied"
                        >
                            <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon
                                style={{color: 'green'}}
                                fontSize="large">check_circle</Icon>{"انجام شد!"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    تغییر وضعیت نظر با موفقیت انجام شد!
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
                    </Paper>
                );
            } else {
                return (<p className="font-applied">در حال حاضر موردی ثبت نشده است</p>);
            }
        } else {
            return <Loading/>
        }
    }
}

export default BlogPostComments;