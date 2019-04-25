import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import HeaderChip from './HeaderChip';
import ManagerForm from "./ManagerForm";

const AddManager = () => (
    <Paper elevation={1} className="right-dir agency-paper">
        <HeaderChip label='افزودن مدیر آژانس' color='#0288d1' icon='person_add'/>
        <Divider/>
        <br/>
        <ManagerForm/>
    </Paper>
);

export default AddManager;