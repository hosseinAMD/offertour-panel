import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArticleForm from "./ArticleForm";

const AddArticle = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <ArticleForm/>
        </Grid>
    </Grid>
);

export default AddArticle;