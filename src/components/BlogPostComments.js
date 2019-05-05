import React from 'react';
import Paper from '@material-ui/core/Paper';
import HeaderChip from './HeaderChip';
import Divider from "@material-ui/core/Divider";
import axios from 'axios';
import baseUrl from '../config/config';
import Loading from "./Loading";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PostCommentItem from "./PostCommentItem";

class BlogPostComments extends React.Component {
    state = {
        comments: '',
        isLoaded: false
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
                                {this.state.comments.map((comment,index) => <PostCommentItem comment={comment} index={index}/>)}
                            </TableBody>
                        </Table>
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