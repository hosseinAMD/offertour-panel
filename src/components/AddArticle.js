import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import HeaderChip from './HeaderChip';
import ArticleForm from "./ArticleForm";

const AddArticle = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Paper elevation={1} className="right-dir agency-paper">
                <HeaderChip label='افزودن سفرنامه' color='#0288d1' icon='edit'/>
                <Divider/>
                <br/>
                <ArticleForm/>
            </Paper>
        </Grid>
    </Grid>
);

export default AddArticle;