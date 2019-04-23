import React from 'react';
import Paper from '@material-ui/core/Paper';
import HeaderChip from './HeaderChip';
import Divider from "@material-ui/core/Divider";
import axios from 'axios';
import baseUrl from '../config/config';
import Loading from "./Loading";

class BlogPostComments extends React.Component {
    state = {
        comments: '',
        isLoaded: false
    };

    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('user')).data.token;
        axios.get(`${baseUrl}/Admin/RateAndComment`,{
            headers:{
                'Content-Type':'application/json',
                'token':token
            }
        }).then(res => {
            this.setState(() => ({comments:res.data.BlogPostComments,isLoaded: true}))
        })
    }

    render() {
        return (
            <Paper elevation={1} className="right-dir agency-paper">
                <HeaderChip label='آخرین نظرات مقالات' color='#0288d1' icon='comment'/>
                <Divider/>
                <br/>
                {this.state.isLoaded ? 'fetch done' : <Loading color="primary"/>}
                {this.state.comments.length > 0 ? 'exist' : <p className="font-applied">در حال حاضر موردی ثبت نشده است</p>}
            </Paper>
        );
    }
}

export default BlogPostComments;