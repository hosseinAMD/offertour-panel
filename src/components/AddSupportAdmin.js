import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import HeaderChip from './HeaderChip';
import SupportAdminForm from "./SupportAdminForm";

const AddSupportAdmin = () => (
    <Paper elevation={1} className="right-dir agency-paper">
        <HeaderChip label='افزودن پشتیبان' color='#0288d1' icon='person_add'/>
        <Divider/>
        <br/>
        <SupportAdminForm/>
    </Paper>
);

export default AddSupportAdmin;